---
title: Interface and HUD
description: Menus, scoreboard, quest bar, and holograms
updated: July 26, 2026
---
## Main Menu

`/lotn` opens the central interface for Character, Skills, Enchantments, Alchemy, Shouts, Quests, Codex, Fishdex, Fish Exchange, and Fast Travel.

![Main menu](assets/main-menu.png)

## Character Menu

The Character screen shows name, race, level, overall XP, vitality values, perk points, attribute points, and pending Health, Stamina, or Magicka choices.

![Character menu](assets/character-menu.png)

## Skill Menus

The skill category screen separates Combat, Protection, Professions, and Crafting skills. Individual trees show perk requirements, ranks, effects, and purchase status.

![Skill tree](assets/skill-tree.png)

## Scoreboard

The default scoreboard updates every `20` ticks. Its configured lines are:

```text
&a★ &lCharacter
&fName: &7{character_name}
&fMoney: &7◈{balance}

&7★ &lPhysical
&fArmor: &e{armor_rating}
&fCarrying: &e{carry_weight}

&9★ &lLevel
&fLevel: &7{level}
&fXP: &7{xp}/{xp_required}

&d★ &lWorld
&fDate: &7{date}
&fTemp: &7{temp_c}
```

## Quest Bar

The tracked quest is displayed in a boss bar by default. It updates every `10` ticks and uses the format:

```text
&f{quest} &8• &7{objective}
```

## Mob Holograms

Mob name, level, and health appear while looking at a mob or fighting it. See [Mobs and Holograms](mobs-and-holograms.md).