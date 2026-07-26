(function () {
  "use strict";

  const { projects, cleanPath, pageUrl } = window.WikiProjects;

  const byId = (id) => document.getElementById(id);
  const navTree = byId("nav-tree");
  const skipLink = document.querySelector(".skip-link");
  const article = byId("wiki-content");
  const tocLinks = byId("toc-links");
  const sidebar = byId("sidebar");
  const scrim = byId("sidebar-scrim");
  const menuButton = byId("menu-button");
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  const sourceCache = new Map();
  const supportedMeta = new Set(["title", "description", "updated"]);
  let headingObserver;
  let pageController;
  let loadedPath = "";

  const flatPages = projects.flatMap((project) => project.pages.flatMap((item) => {
    if (item.children) {
      return item.children.map((child) => ({ ...child, section: item.title, project: project.id }));
    }
    return [{ ...item, section: "Overview", project: project.id }];
  }));
  const pagesByPath = new Map(flatPages.map((page) => [page.path, page]));

  function routeState(url = new URL(location.href)) {
    const pathname = url.pathname.replace(/(?:^|\/)index\.html\/?$/i, "/").replace(/\.html\/?$/i, "");
    let path = cleanPath(pathname);
    if (!path) path = "home";
    if (!pagesByPath.has(path) && pagesByPath.has(`${path}/index`)) path = `${path}/index`;
    return { path, section: url.searchParams.get("section") || "" };
  }

  function restoreFallbackRoute() {
    const redirected = new URLSearchParams(location.search).get("__wiki_route");
    if (!redirected || !redirected.startsWith("/") || redirected.startsWith("//")) return;
    const target = new URL(redirected, location.origin);
    if (target.origin !== location.origin) return;
    history.replaceState(null, "", `${target.pathname}${target.search}${target.hash}`);
  }

  function migrateLegacyHashRoute() {
    if (!location.hash.startsWith("#/")) return;
    const route = location.hash.slice(2);
    const queryStart = route.indexOf("?");
    const path = cleanPath(queryStart === -1 ? route : route.slice(0, queryStart)) || "home";
    const query = queryStart === -1 ? "" : route.slice(queryStart + 1);
    const section = new URLSearchParams(query).get("section") || "";
    history.replaceState(null, "", pageUrl(path, section));
  }

  function renderNavigation(path) {
    const activeProject = pagesByPath.get(path)?.project;
    const visibleProjects = projects.filter((project) => project.id === "general" || project.id === activeProject);
    navTree.innerHTML = visibleProjects.map((project) => `
      <section class="nav-project">
        <p class="nav-project__title"><span>${WikiMarkdown.escapeHtml(project.title)}</span></p>
        ${project.pages.map((item, index) => {
          if (!item.children) return navLink(item);
          const expanded = index === 1 || item.children.some((child) => child.path === path);
          return `
            <div class="nav-section">
              <button class="nav-section__toggle" type="button" aria-expanded="${expanded}">
                <span>${WikiMarkdown.escapeHtml(item.title)}</span>
              </button>
              <div class="nav-section__children"${expanded ? "" : " hidden"}>
                ${item.children.map(navLink).join("")}
              </div>
            </div>`;
        }).join("")}
      </section>`).join("");

    navTree.querySelectorAll(".nav-section__toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        button.nextElementSibling.hidden = expanded;
      });
    });
    markActiveLink(path);
  }

  function navLink(page) {
    return `<a class="nav-link" href="${WikiMarkdown.escapeHtml(pageUrl(page.path))}" data-page="${WikiMarkdown.escapeHtml(page.path)}"><span>${WikiMarkdown.escapeHtml(page.title)}</span></a>`;
  }

  function markActiveLink(path) {
    navTree.querySelectorAll(".nav-link").forEach((link) => {
      const active = link.dataset.page === path;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function parseFrontmatter(source) {
    const normalized = String(source).replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
    const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    if (!match) return { meta: {}, body: normalized };

    const meta = {};
    match[1].split("\n").forEach((line) => {
      const separator = line.indexOf(":");
      if (separator < 1) return;
      const key = line.slice(0, separator).trim().toLowerCase();
      if (!supportedMeta.has(key)) return;
      let value = line.slice(separator + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      meta[key] = value;
    });
    return { meta, body: normalized.slice(match[0].length) };
  }

  function breadcrumbsFor(page, pageTitle) {
    const parts = [{ title: "Wiki", path: "home" }];
    if (page?.project === "lotn") parts.push({ title: "Legends of the North", path: "lotn/index" });
    if (page?.project === "valentines") parts.push({ title: "Valentines", path: "valentines/index" });
    if (page?.section && page.section !== "Overview") parts.push({ title: page.section });
    if (parts.at(-1)?.title !== pageTitle) parts.push({ title: pageTitle });

    return parts.map((part, index) => {
      const separator = index ? '<span class="breadcrumb-separator" aria-hidden="true">/</span>' : "";
      const content = part.path
        ? `<a href="${WikiMarkdown.escapeHtml(pageUrl(part.path))}">${WikiMarkdown.escapeHtml(part.title)}</a>`
        : `<span>${WikiMarkdown.escapeHtml(part.title)}</span>`;
      return separator + content;
    }).join("");
  }

  async function getPageSource(path, signal) {
    if (sourceCache.has(path)) return sourceCache.get(path);
    const url = `/pages/${path.split("/").map(encodeURIComponent).join("/")}.md`;
    const response = await fetch(url, { cache: "no-cache", signal });
    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }
    const source = await response.text();
    sourceCache.set(path, source);
    return source;
  }

  function setLoading() {
    article.setAttribute("aria-busy", "true");
    article.innerHTML = '<div class="loading-state"><span class="loading-state__mark"></span><span>Opening the wiki...</span></div>';
    tocLinks.innerHTML = "";
  }

  async function loadPage(path = routeState().path) {
    pageController?.abort();
    pageController = new AbortController();
    const { signal } = pageController;
    const page = pagesByPath.get(path);

    renderNavigation(path);
    setLoading();
    window.scrollTo({ top: 0, behavior: "auto" });

    try {
      if (!page) {
        const error = new Error("Unknown page");
        error.status = 404;
        throw error;
      }

      const source = await getPageSource(path, signal);
      if (signal.aborted) return;
      const { meta, body } = parseFrontmatter(source);
      const title = meta.title || page.title || "Untitled page";
      const description = meta.description || "";
      const metadata = [
        meta.updated ? `Updated ${WikiMarkdown.escapeHtml(meta.updated)}` : "",
        `${estimateReadingTime(body)} min read`
      ].filter(Boolean);

      document.title = `${title} · Lokahst Wiki`;
      canonicalLink.href = new URL(pageUrl(path), location.origin).href;
      article.dataset.path = path;
      article.innerHTML = `
        <header class="article-head">
          <nav class="breadcrumbs" aria-label="Breadcrumb">${breadcrumbsFor(page, title)}</nav>
          <h1>${WikiMarkdown.escapeHtml(title)}</h1>
          ${description ? `<p class="lead">${WikiMarkdown.escapeHtml(description)}</p>` : ""}
          <div class="article-meta">${metadata.map((item) => `<span>${item}</span>`).join("")}</div>
        </header>
        <div class="markdown-body">${WikiMarkdown.render(body, { path })}</div>`;

      article.querySelectorAll(".heading-anchor").forEach((anchor) => {
        const heading = anchor.closest("h1, h2, h3, h4, h5, h6");
        anchor.href = pageUrl(path, heading.id);
      });
      loadedPath = path;
      renderToc(path);
      closeMobileMenu();
      article.focus({ preventScroll: true });
      requestAnimationFrame(scrollToSection);
      document.dispatchEvent(new CustomEvent("wiki:page-loaded", { detail: { path, title } }));
    } catch (error) {
      if (error.name === "AbortError") return;
      showLoadError(error.status === 404);
    } finally {
      if (!signal.aborted) article.removeAttribute("aria-busy");
    }
  }

  function showLoadError(notFound) {
    loadedPath = "";
    tocLinks.innerHTML = '<span class="toc-empty">No sections on this page.</span>';
    document.title = `${notFound ? "Page not found" : "Loading error"} · Lokahst Wiki`;
    article.innerHTML = notFound
      ? '<div class="article-error"><span class="article-error__code">404 · Lost page</span><h1>That page wandered off.</h1><p>The guide may have moved, or the route is not part of this wiki yet.</p></div>'
      : '<div class="article-error"><span class="article-error__code">Unable to load</span><h1>The page could not be opened.</h1><p>Check your connection and try loading the page again.</p><button class="article-error__retry" type="button">Try again</button></div>';
    closeMobileMenu();
  }

  function estimateReadingTime(text) {
    const words = String(text).trim().match(/\S+/g)?.length || 0;
    return Math.max(1, Math.ceil(words / 220));
  }

  function headingText(heading) {
    const copy = heading.cloneNode(true);
    copy.querySelector(".heading-anchor")?.remove();
    return copy.textContent.trim();
  }

  function renderToc(path) {
    headingObserver?.disconnect();
    const headings = [...article.querySelectorAll(".markdown-body h2, .markdown-body h3")];
    tocLinks.innerHTML = headings.length
      ? headings.map((heading) => `<a href="${WikiMarkdown.escapeHtml(pageUrl(path, heading.id))}" data-level="${heading.tagName.slice(1)}" data-heading="${WikiMarkdown.escapeHtml(heading.id)}">${WikiMarkdown.escapeHtml(headingText(heading))}</a>`).join("")
      : '<span class="toc-empty">No sections on this page.</span>';
    if (!("IntersectionObserver" in window)) return;

    headingObserver = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
        tocLinks.querySelectorAll("a").forEach((link) => {
          link.classList.toggle("active", link.dataset.heading === entry.target.id);
        });
      });
    }, { rootMargin: "-90px 0px -72% 0px" });
    headings.forEach((heading) => headingObserver.observe(heading));
  }

  function scrollToSection() {
    const { section } = routeState();
    if (!section) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    document.getElementById(section)?.scrollIntoView({ block: "start" });
  }

  function handleRouteChange() {
    const { path, section } = routeState();
    if (pagesByPath.has(path)) {
      const canonicalPath = pageUrl(path, section);
      if (`${location.pathname}${location.search}` !== canonicalPath) history.replaceState(null, "", canonicalPath);
    }
    if (path === loadedPath) scrollToSection();
    else loadPage(path);
  }

  function handleInternalLink(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest("a[href]");
    if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

    const target = new URL(anchor.href, location.href);
    if (target.origin !== location.origin) return;
    const { path } = routeState(target);
    if (!pagesByPath.has(path)) return;

    event.preventDefault();
    const nextUrl = `${target.pathname}${target.search}`;
    if (`${location.pathname}${location.search}` !== nextUrl) history.pushState(null, "", nextUrl);
    handleRouteChange();
  }

  async function copyCode(button) {
    const code = button.closest(".code-block")?.querySelector("code")?.textContent;
    if (code == null) return;
    const originalText = button.textContent;
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = "Copied!";
    } catch (_) {
      button.textContent = "Select & copy";
    }
    window.setTimeout(() => { button.textContent = originalText; }, 1400);
  }

  function openMobileMenu() {
    sidebar.classList.add("open");
    scrim.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
    document.body.classList.add("menu-open");
  }

  function closeMobileMenu() {
    sidebar.classList.remove("open");
    scrim.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  }

  article.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".code-copy");
    if (copyButton) copyCode(copyButton);
    if (event.target.closest(".article-error__retry")) loadPage();
  });
  skipLink.addEventListener("click", (event) => {
    event.preventDefault();
    requestAnimationFrame(() => {
      article.focus({ preventScroll: true });
      article.scrollIntoView({ block: "start" });
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("open")) closeMobileMenu();
  });
  document.addEventListener("click", handleInternalLink);
  menuButton.addEventListener("click", () => sidebar.classList.contains("open") ? closeMobileMenu() : openMobileMenu());
  scrim.addEventListener("click", closeMobileMenu);
  window.addEventListener("popstate", handleRouteChange);

  restoreFallbackRoute();
  migrateLegacyHashRoute();
  handleRouteChange();
})();
