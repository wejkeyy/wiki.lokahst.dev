(function () {
  "use strict";

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const slugify = (value) => String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "section";

  function normalizeRoute(value) {
    const parts = [];
    String(value).replaceAll("\\", "/").split("/").forEach((part) => {
      if (!part || part === ".") return;
      if (part === "..") parts.pop();
      else if (/^[a-zA-Z0-9_.-]+$/.test(part)) parts.push(part);
    });
    return parts.join("/");
  }

  function splitTarget(value) {
    const match = String(value).trim().match(/^([^#]*)(?:#(.*))?$/);
    return { path: match?.[1] || "", section: match?.[2] || "" };
  }

  function decode(value) {
    try { return decodeURIComponent(value); } catch (_) { return value; }
  }

  function markdownRoute(target, currentPath) {
    const { path, section } = splitTarget(target);
    const cleanPath = path.replace(/[?].*$/, "");
    if (!/\.md$/i.test(cleanPath)) return null;

    const base = currentPath.includes("/") ? currentPath.slice(0, currentPath.lastIndexOf("/")) : "";
    const fromRoot = cleanPath.replace(/^\/?pages\//i, "");
    const joined = cleanPath.startsWith("/") || /^pages\//i.test(cleanPath)
      ? fromRoot
      : `${base}/${cleanPath}`;
    const route = normalizeRoute(joined.replace(/\.md$/i, ""));
    if (!route) return null;
    return WikiProjects.pageUrl(route, section ? slugify(decode(section)) : "");
  }

  function relativeAsset(target, currentPath) {
    const { path, section } = splitTarget(target);
    const queryIndex = path.indexOf("?");
    const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
    const query = queryIndex === -1 ? "" : path.slice(queryIndex);
    const base = currentPath.includes("/") ? currentPath.slice(0, currentPath.lastIndexOf("/")) : "";
    const resolved = normalizeRoute(`${base}/${pathname}`);
    return resolved ? `/pages/${resolved}${query}${section ? `#${encodeURIComponent(section)}` : ""}` : "";
  }

  function resolveTarget(value, currentPath = "") {
    const target = String(value).trim();
    if (!target) return null;

    const route = markdownRoute(target, currentPath);
    if (route) return { href: route, external: false };
    if (target.startsWith("#/")) {
      const legacy = target.slice(2).split("?");
      const section = new URLSearchParams(legacy[1] || "").get("section") || "";
      return { href: WikiProjects.pageUrl(normalizeRoute(legacy[0]), section), external: false };
    }
    if (target.startsWith("#")) {
      const section = slugify(decode(target.slice(1)));
      return { href: WikiProjects.pageUrl(currentPath || "home", section), external: false };
    }
    if (/^(https?:)?\/\//i.test(target)) return { href: target, external: true };
    if (/^mailto:/i.test(target)) return { href: target, external: false };
    if (/^[a-z][a-z\d+.-]*:/i.test(target)) return null;
    if (target.startsWith("/")) return { href: target, external: false };

    const href = relativeAsset(target, currentPath);
    return href ? { href, external: false } : null;
  }

  function formatText(source) {
    return escapeHtml(source)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/__([^_]+)__/g, "<strong>$1</strong>")
      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>")
      .replace(/(?<!_)_([^_]+)_(?!_)/g, "<em>$1</em>")
      .replace(/~~([^~]+)~~/g, "<del>$1</del>");
  }

  function inline(source, context) {
    const tokens = [];
    const stash = (html) => `\u0000${tokens.push(html) - 1}\u0000`;
    let text = String(source);

    text = text.replace(/`([^`\n]+)`/g, (_, code) => stash(`<code>${escapeHtml(code)}</code>`));
    text = text.replace(/<br\s*\/?\s*>/gi, () => stash("<br />"));
    text = text.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["']([^"']*)["'])?\)/g, (_, alt, sourceUrl, title) => {
      const target = resolveTarget(sourceUrl, context.path);
      if (!target || /^mailto:/i.test(target.href)) return escapeHtml(alt);
      const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";
      return stash(`<img src="${escapeHtml(target.href)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async"${titleAttribute} />`);
    });
    text = text.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+["']([^"']*)["'])?\)/g, (_, linkText, destination, title) => {
      const target = resolveTarget(destination, context.path);
      if (!target) return formatText(linkText);
      const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";
      const externalAttributes = target.external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return stash(`<a href="${escapeHtml(target.href)}"${titleAttribute}${externalAttributes}>${formatText(linkText)}</a>`);
    });

    return formatText(text).replace(/\u0000(\d+)\u0000/g, (_, index) => tokens[Number(index)] || "");
  }

  function splitTableRow(row) {
    const cells = [];
    let cell = "";
    let escaped = false;

    for (const character of row.trim().replace(/^\||\|$/g, "")) {
      if (escaped) {
        cell += character;
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === "|") {
        cells.push(cell.trim());
        cell = "";
      } else {
        cell += character;
      }
    }
    if (escaped) cell += "\\";
    cells.push(cell.trim());
    return cells;
  }

  function renderCards(lines, context) {
    const cards = lines.filter((line) => line.trim()).map((line) => {
      const match = line.match(/^\[([^\]]+)\]\(([^)\s]+)\)\s*\|\s*(.+)$/);
      if (!match) return "";
      const [, title, destination, description] = match;
      const target = resolveTarget(destination, context.path);
      if (!target) return "";
      const externalAttributes = target.external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="doc-card" href="${escapeHtml(target.href)}"${externalAttributes}><strong>${inline(title, context)}</strong><span>${inline(description.trim(), context)}</span><span class="doc-card__arrow" aria-hidden="true">➤</span></a>`;
    }).filter(Boolean).join("");
    return cards ? `<div class="doc-card-grid">${cards}</div>` : "";
  }

  function renderCallout(type, title, lines, context) {
    const supportedTypes = new Set(["note", "warning", "success"]);
    const kind = supportedTypes.has(type) ? type : "note";
    const defaultTitle = kind === "warning" ? "Heads up" : kind === "success" ? "Good to know" : "Note";
    return `<aside class="callout callout--${kind}"><div class="callout__body"><strong class="callout__title">${inline(title || defaultTitle, context)}</strong>${renderBlocks(lines.join("\n"), context)}</div></aside>`;
  }

  function renderSpoiler(title, lines, context, open = false) {
    return `<details class="spoiler"${open ? " open" : ""}><summary>${inline(title || "Show details", context)}</summary><div class="spoiler__content">${renderBlocks(lines.join("\n"), context)}</div></details>`;
  }

  function renderSteps(lines, context) {
    const steps = lines.filter((line) => line.trim()).map((line) => {
      const clean = line.replace(/^\s*\d+\.\s*/, "");
      const separator = clean.indexOf("|");
      const rawTitle = separator === -1 ? clean : clean.slice(0, separator);
      const description = separator === -1 ? "" : clean.slice(separator + 1).trim();
      const title = rawTitle.trim().replace(/^\*\*(.+)\*\*$/, "$1");
      return `<div class="step"><strong>${inline(title, context)}</strong>${description ? `<p>${inline(description, context)}</p>` : ""}</div>`;
    }).join("");
    return steps ? `<div class="steps">${steps}</div>` : "";
  }

  function isTable(lines, index) {
    if (!lines[index]?.includes("|") || !lines[index + 1]?.includes("|")) return false;
    const separators = splitTableRow(lines[index + 1]);
    return separators.length > 0 && separators.every((cell) => /^:?-{3,}:?$/.test(cell));
  }

  function isBlockStart(lines, index) {
    const line = lines[index] || "";
    const trimmed = line.trim();
    return /^(#{1,6})\s+/.test(trimmed)
      || /^(`{3,}|~{3,})/.test(trimmed)
      || trimmed.startsWith(":::")
      || /^<details(?:\s+open)?\s*>$/i.test(trimmed)
      || trimmed.startsWith(">")
      || /^\s*[-*+]\s+/.test(line)
      || /^\s*\d+[.)]\s+/.test(line)
      || /^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)
      || isTable(lines, index);
  }

  function renderCodeBlock(lines, index) {
    const opening = lines[index].trim().match(/^(`{3,}|~{3,})\s*([^\s`]*)?.*$/);
    const fence = opening[1][0];
    const fenceLength = opening[1].length;
    const language = (opening[2] || "text").toLowerCase().replace(/[^a-z0-9_+-]/g, "") || "text";
    const code = [];
    index += 1;
    while (index < lines.length && !new RegExp(`^\\s*${fence}{${fenceLength},}\\s*$`).test(lines[index])) code.push(lines[index++]);
    if (index < lines.length) index += 1;
    const html = `<div class="code-block"><div class="code-block__bar"><span>${escapeHtml(language)}</span><button class="code-copy" type="button" aria-label="Copy code">Copy</button></div><pre><code class="language-${escapeHtml(language)}">${escapeHtml(code.join("\n"))}</code></pre></div>`;
    return { html, index };
  }

  function renderBlocks(markdown, context) {
    const lines = String(markdown).replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").split("\n");
    const output = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];
      const trimmed = line.trim();
      if (!trimmed) { index += 1; continue; }

      if (/^(`{3,}|~{3,})/.test(trimmed)) {
        const block = renderCodeBlock(lines, index);
        output.push(block.html);
        index = block.index;
        continue;
      }

      if (trimmed.startsWith(":::")) {
        const [type = "note", ...titleParts] = trimmed.slice(3).trim().split(/\s+/);
        const body = [];
        index += 1;
        while (index < lines.length && lines[index].trim() !== ":::") body.push(lines[index++]);
        if (index < lines.length) index += 1;
        if (type === "cards") output.push(renderCards(body, context));
        else if (type === "steps") output.push(renderSteps(body, context));
        else if (type === "spoiler") output.push(renderSpoiler(titleParts.join(" "), body, context));
        else output.push(renderCallout(type, titleParts.join(" "), body, context));
        continue;
      }

      const details = trimmed.match(/^<details(\s+open)?\s*>$/i);
      if (details) {
        const body = [];
        let title = "Show details";
        index += 1;
        const summary = lines[index]?.trim().match(/^<summary>([\s\S]*?)<\/summary>$/i);
        if (summary) {
          title = summary[1].trim();
          index += 1;
        }
        while (index < lines.length && !/^<\/details>$/i.test(lines[index].trim())) body.push(lines[index++]);
        if (index < lines.length) index += 1;
        output.push(renderSpoiler(title, body, context, Boolean(details[1])));
        continue;
      }

      const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        const title = heading[2].replace(/\s+#+$/, "");
        const baseId = slugify(title);
        const count = context.slugs.get(baseId) || 0;
        context.slugs.set(baseId, count + 1);
        const id = count ? `${baseId}-${count + 1}` : baseId;
        output.push(`<h${level} id="${escapeHtml(id)}">${inline(title, context)}<a class="heading-anchor" href="#${escapeHtml(id)}" aria-label="Link to ${escapeHtml(title)}">#</a></h${level}>`);
        index += 1;
        continue;
      }

      if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
        output.push("<hr />");
        index += 1;
        continue;
      }

      if (trimmed.startsWith(">")) {
        const quote = [];
        while (index < lines.length && lines[index].trim().startsWith(">")) quote.push(lines[index++].replace(/^\s*>\s?/, ""));
        output.push(`<blockquote>${renderBlocks(quote.join("\n"), context)}</blockquote>`);
        continue;
      }

      if (/^\s*[-*+]\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index])) {
          items.push(`<li>${inline(lines[index++].replace(/^\s*[-*+]\s+/, ""), context)}</li>`);
        }
        output.push(`<ul>${items.join("")}</ul>`);
        continue;
      }

      if (/^\s*\d+[.)]\s+/.test(line)) {
        const items = [];
        const start = Number(line.match(/^\s*(\d+)/)?.[1] || 1);
        while (index < lines.length && /^\s*\d+[.)]\s+/.test(lines[index])) {
          items.push(`<li>${inline(lines[index++].replace(/^\s*\d+[.)]\s+/, ""), context)}</li>`);
        }
        output.push(`<ol${start === 1 ? "" : ` start="${start}"`}>${items.join("")}</ol>`);
        continue;
      }

      if (isTable(lines, index)) {
        const headers = splitTableRow(line);
        const separators = splitTableRow(lines[index + 1]);
        const alignments = separators.map((cell) => cell.startsWith(":") && cell.endsWith(":") ? "center" : cell.endsWith(":") ? "right" : "left");
        index += 2;
        const rows = [];
        while (index < lines.length && lines[index].trim() && lines[index].includes("|")) rows.push(splitTableRow(lines[index++]));
        const headerHtml = headers.map((cell, cellIndex) => `<th style="text-align:${alignments[cellIndex] || "left"}">${inline(cell, context)}</th>`).join("");
        const bodyHtml = rows.map((row) => `<tr>${headers.map((_, cellIndex) => `<td style="text-align:${alignments[cellIndex] || "left"}">${inline(row[cellIndex] || "", context)}</td>`).join("")}</tr>`).join("");
        output.push(`<div class="table-wrap"><table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`);
        continue;
      }

      const paragraph = [trimmed];
      index += 1;
      while (index < lines.length && lines[index].trim() && !isBlockStart(lines, index)) paragraph.push(lines[index++].trim());
      output.push(`<p>${inline(paragraph.join(" "), context)}</p>`);
    }

    return output.filter(Boolean).join("\n");
  }

  function render(markdown, options = {}) {
    return renderBlocks(markdown, {
      path: normalizeRoute(options.path || ""),
      slugs: new Map()
    });
  }

  window.WikiMarkdown = { render, slugify, escapeHtml };
})();
