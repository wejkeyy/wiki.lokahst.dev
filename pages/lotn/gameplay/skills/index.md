---
title: Skills
description: Skill XP, levels, and rewards
updated: August 1, 2026
---

LotN has 14 skills. Each skill gains XP from related actions, levels on its own, and unlocks one reward per level.

| Skill | Category | Maximum level | Main XP sources |
|---|---|---|---|
| One-Handed | Combat | 30 | Damage with One-Handed weapons<br>Critical hits and kills<br>Elite and boss fights |
| Archery | Combat | 30 | Projectile damage and long-range shots<br>Headshots and moving targets<br>Kills and boss fights |
| Blocking | Combat | 30 | Damage blocked<br>Perfect blocks and projectiles<br>Shield bashes |
| Heavy Armor | Combat | 30 | Combat damage taken or blocked<br>Matching heavy armor pieces<br>Surviving fights |
| Light Armor | Combat | 30 | Combat damage taken or blocked<br>Matching leather pieces<br>Surviving fights |
| Unarmed | Combat | 10 | Unarmed damage and kills<br>Combos and armored enemies<br>Elite and boss fights |
| Smithing | Crafting & Gathering | 30 | Crafting and tempering equipment<br>Repairing damaged gear<br>Smelting tracked materials |
| Enchanting | Crafting & Gathering | 20 | Discovering enchantments<br>Enchanted mob drops<br>Effect activations and higher tiers |
| Alchemy | Crafting & Gathering | 30 | Brewing potions and discovering recipes<br>Higher-quality mixtures<br>Using LotN potions |
| Mining | Crafting & Gathering | 15 | Naturally generated ores<br>Rare materials and deep mining<br>First-time block discoveries |
| Farming | Crafting & Gathering | 15 | Planting and harvesting crops<br>Breeding and animal products<br>Farm sales and new crops |
| Fishing | Crafting & Gathering | 20 | Catching fish<br>Treasure and new species<br>Rare and legendary catches |
| Wayfaring | Utility | 3 | Walking and sprinting<br>New biomes, beds, and dimensions<br>Exploration milestones and normal travel |
| Trading | Utility | 10 | Buying and selling<br>Different merchants and item rarity<br>Crafted goods and larger trades |

## XP Formula

Every skill uses the same default formula: base `100`, growth `1.18`, and multiplier `1.0`.

```text
required XP = 100 * 1.18 ^ current skill level
```

The final XP amount may also be changed by global multipliers, world settings, permissions, mob type, mob tier, anti-farming checks, and the target's level.

## Anti-Exploit Defaults

- PvP skill XP is disabled.
- Friendly targets do not grant skill XP.
- Player-spawned mobs do not grant normal XP.
- Repeating the same action on one target gives less XP over time.
- Mobs far below the player's level give less XP.
- Movement XP stops after 120 seconds without real player activity.
- A single XP grant is capped at 10,000.