(function () {
  "use strict";

  const projects = [
    {
      id: "general",
      title: "Lokahst",
      pages: [
        { path: "home", title: "Wiki home" }
      ]
    },
    {
      id: "lotn",
      title: "Legends of the North",
      pages: [
        { path: "lotn/index", title: "Overview" },
        {
          title: "Gameplay",
          children: [
            { path: "lotn/gameplay/getting-started", title: "Getting Started" },
            { path: "lotn/gameplay/character-creation", title: "Character Creation" },
            { path: "lotn/gameplay/races", title: "Races" },
            { path: "lotn/gameplay/leveling-and-vitals", title: "Leveling & Vitals" },
            { path: "lotn/gameplay/skills/index", title: "Skills" },
            { path: "lotn/gameplay/skills/combat", title: "Combat Skills" },
            { path: "lotn/gameplay/skills/crafting-and-gathering", title: "Crafting & Gathering Skills" },
            { path: "lotn/gameplay/skills/utility", title: "Utility Skills" },
            { path: "lotn/gameplay/combat", title: "Combat" },
            { path: "lotn/gameplay/equipment-and-tempering", title: "Equipment & Tempering" },
            { path: "lotn/gameplay/item-progression", title: "Item Progression" },
            { path: "lotn/gameplay/enchantments", title: "Enchantments" },
            { path: "lotn/gameplay/alchemy", title: "Alchemy" },
            { path: "lotn/gameplay/shouts", title: "Shouts" },
            { path: "lotn/gameplay/quests", title: "Quests" },
            { path: "lotn/gameplay/fishing", title: "Fishing" },
            { path: "lotn/gameplay/economy-and-trading", title: "Economy & Trading" },
            { path: "lotn/gameplay/mobs-and-scaling", title: "Mobs & Scaling" },
            { path: "lotn/gameplay/bosses", title: "Bosses" },
            { path: "lotn/gameplay/survival", title: "Survival" },
            { path: "lotn/gameplay/fast-travel", title: "Fast Travel" },
            { path: "lotn/gameplay/discoveries-codex-achievements", title: "Discoveries, Codex & Achievements" },
            { path: "lotn/gameplay/interface", title: "Interface" }
          ]
        },
        {
          title: "Administration",
          children: [
            { path: "lotn/administration/installation", title: "Installation" },
            { path: "lotn/administration/commands-and-permissions", title: "Commands & Permissions" },
            { path: "lotn/administration/extended-administration", title: "Extended Administration" },
            { path: "lotn/administration/configuration", title: "Configuration" },
            { path: "lotn/administration/player-data-and-backups", title: "Player Data & Backups" },
            { path: "lotn/administration/placeholders", title: "Placeholders" },
            { path: "lotn/administration/verified-source-notes", title: "Verified Source Notes" }
          ]
        }
      ]
    },
    {
      id: "valentines",
      title: "Valentines",
      pages: [
        { path: "valentines/index", title: "Overview" },
        { path: "valentines/commands", title: "Commands" },
        { path: "valentines/permissions", title: "Permissions" },
        { path: "valentines/configuration", title: "Configuration" },
        { path: "valentines/placeholders", title: "Placeholders" },
        { path: "valentines/interactions", title: "Interactions" },
        { path: "valentines/moods", title: "Moods" },
        { path: "valentines/effects", title: "Effects" },
        { path: "valentines/playerprofile", title: "Player Profile" },
        { path: "valentines/friends", title: "Friends" },
        { path: "valentines/marriage", title: "Marriage" },
        { path: "valentines/age", title: "Age" },
        { path: "valentines/leaderboard", title: "Leaderboard" },
        { path: "valentines/achievements", title: "Achievements" }
      ]
    }
  ];

  function cleanPath(value) {
    let decoded = String(value);
    try { decoded = decodeURIComponent(decoded); } catch (_) { return ""; }
    const parts = decoded.replaceAll("\\", "/").split("/").filter(Boolean);
    return parts.length && parts.every((part) => /^[a-zA-Z0-9_-]+$/.test(part))
      ? parts.join("/")
      : "";
  }

  function pageUrl(path, section = "") {
    const clean = cleanPath(path) || "home";
    let pathname = `/${clean}`;
    if (clean === "home") pathname = "/";
    else if (clean.endsWith("/index")) pathname = `/${clean.slice(0, -6)}/`;
    return `${pathname}${section ? `?section=${encodeURIComponent(section)}` : ""}`;
  }

  window.WikiProjects = Object.freeze({ projects, cleanPath, pageUrl });
})();
