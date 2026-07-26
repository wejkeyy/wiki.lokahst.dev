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
            { path: "lotn/gameplay/leveling-and-vitals", title: "Leveling & Vitals" },
            { path: "lotn/gameplay/skilltree", title: "Skill Trees" },
            { path: "lotn/gameplay/stamina", title: "Stamina" },
            { path: "lotn/gameplay/magicka", title: "Magicka" },
            { path: "lotn/gameplay/weight", title: "Weight System" },
            { path: "lotn/gameplay/temperature-and-survival", title: "Temperature & Survival" },
            { path: "lotn/gameplay/injuries", title: "Injuries" },
            { path: "lotn/gameplay/alchemy", title: "Alchemy" },
            { path: "lotn/gameplay/bosses", title: "Bosses" },
            { path: "lotn/gameplay/character-creation", title: "Character Creation" },
            { path: "lotn/gameplay/combat", title: "Combat" },
            { path: "lotn/gameplay/custom-enchantments", title: "Custom Enchantments" },
            { path: "lotn/gameplay/discoveries-codex-achievements", title: "Discoveries, Codex & Achievements" },
            { path: "lotn/gameplay/economy-and-trading", title: "Economy & Trading" },
            { path: "lotn/gameplay/equipment-and-tempering", title: "Equipment & Tempering" },
            { path: "lotn/gameplay/fast-travel", title: "Fast Travel" },
            { path: "lotn/gameplay/fishing", title: "Fishing" },
            { path: "lotn/gameplay/interface-and-hud", title: "Interface & HUD" },
            { path: "lotn/gameplay/mobs-and-holograms", title: "Mobs & Holograms" },
            { path: "lotn/gameplay/perks", title: "Perks" },
            { path: "lotn/gameplay/quests-and-contracts", title: "Quests & Contracts" },
            { path: "lotn/gameplay/races", title: "Races" },
            { path: "lotn/gameplay/shouts", title: "Shouts" },
            { path: "lotn/gameplay/skill-books", title: "Skill Books" },
            { path: "lotn/gameplay/skills", title: "Skills" }
          ]
        },
        {
          title: "Administration",
          children: [
            { path: "lotn/administration/configuration", title: "Configuration" },
            { path: "lotn/administration/commands", title: "Commands" },
            { path: "lotn/administration/permissions", title: "Permissions" },
            { path: "lotn/administration/placeholders", title: "Placeholders" }
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