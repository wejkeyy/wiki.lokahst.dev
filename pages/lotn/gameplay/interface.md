---
title: Interface
description: Scoreboard, quest bar, action bars, and mob holograms
updated: August 1, 2026
---

## Scoreboard

The scoreboard is enabled by default and refreshes every `20` ticks. Minecraft's red score numbers are hidden.

```text
&a★ &lCharacter
&fName: &7{character_name}
&fMoney: &7◈{balance}

&7★ &lPhysical
&fArmor: &e{armor_rating}
&fCarry: &e{weight}

&9★ &lLevel
&fLevel: &7{level}
&fXP: &7{xp}/{xp_required}

&d★ &lWorld
&fDate: &7{date}
&fTemp: &7{temp_c}
```

## Quest Bar

The tracked quest boss bar is enabled by default and refreshes every `10` ticks. It uses `YELLOW` with the `SEGMENTED_10` style.

## Action Bars

Overall XP and skill XP are shown in the action bar by default. Skill level-ups also use chat messages, sounds, and particles.

## Mob Holograms

Mob holograms show the mob's LotN name, level, and health. They appear when a player looks at the mob or enters combat with it.