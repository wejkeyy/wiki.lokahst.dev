---
title: Mobs and Scaling
description: Mob levels, tiers, variants, gear, and rewards
updated: August 1, 2026
---

Mob scaling is enabled by default. Registered mobs receive a level, family, variant name, tier, scaled stats, and hologram.

## Level Selection

- Minimum level: `1`
- Maximum level: `80`
- Nearby player detection radius: `48.0` blocks
- Creative and Spectator players are ignored for level selection.
- Base environment levels are 1 in the Overworld, 20 in the Nether, and 35 in the End.

## Base Scaling

| Setting | Default |
|---|---|
| Base Health multiplier | 1.1x |
| Base damage multiplier | 1.05x |
| Health per mob level | 2.8% |
| Damage per mob level | 1.8% |
| Armor per mob level | 0.025 |

## Tier Stats

| Tier | Health | Damage | Armor bonus | Speed | XP | Knockback resistance |
|---|---|---|---|---|---|---|
| 1 | 0.95 | 0.95 | 0.0 | 1.0 | 0.85 | 0.0 |
| 2 | 1.12 | 1.05 | 1.0 | 1.1 | 1.1 | 0.02 |
| 3 | 1.4 | 1.22 | 2.5 | 1.04 | 1.45 | 0.06 |
| 4 | 1.9 | 1.38 | 4.0 | 1.07 | 2.1 | 0.12 |
| 5 | 2.65 | 1.6 | 6.0 | 1.1 | 3.2 | 0.2 |
| 6 | 3.7 | 1.88 | 8.0 | 1.12 | 5.0 | 0.3 |

Tier 4 and higher mobs can spawn with armor. The default profiles use chainmail at Tier 4, iron at Tier 5, and diamond at Tier 6.

## Families and Variants

| Family | Minecraft entities | Possible variants |
|---|---|---|
| Zombie | ZOMBIE, HUSK, ZOMBIE_VILLAGER | Rotten Corpse (T1), Zombie (T2), Diseased Zombie (T3), Plague Walker (T4), Grave Champion (T5), Undying Lord (T6) |
| Skeleton | SKELETON, STRAY, BOGGED, WITHER_SKELETON | Skeleton (T1), Archer Skeleton (T2), Bone Hunter (T3), Bone Captain (T4), Bone Warden (T5), Bone Overlord (T6) |
| Spider | SPIDER, CAVE_SPIDER | Spider (T1), Venom Spider (T2), Frost Spider (T3), Widow Spider (T4), Broodmother (T5), Ancient Broodmother (T6) |
| Creeper | CREEPER | Creeper (T1), Swift Creeper (T2), Armored Creeper (T3), Toxic Creeper (T4), Infernal Creeper (T5), Ancient Creeper (T6) |
| Drowned | DROWNED | Drowned (T1), Sea Walker (T2), Deep Stalker (T3), Abyss Hunter (T4), Abyss Guardian (T5), Leviathan's Servant (T6) |
| Phantom | PHANTOM | Phantom (T1), Night Phantom (T2), Shadow Phantom (T3), Soul Phantom (T4), Nightmare (T5), Ancient Nightmare (T6) |
| Piglin | PIGLIN, PIGLIN_BRUTE, ZOMBIFIED_PIGLIN | Piglin (T1), Piglin Raider (T2), Piglin Warrior (T3), Piglin Champion (T4), Piglin Warlord (T5), Piglin King (T6) |
| Blaze | BLAZE | Blaze (T1), Infernal Blaze (T2), Ember Mage (T3), Hellfire Sentinel (T4), Flame Tyrant (T5), Phoenix Herald (T6) |
| Pillager | PILLAGER | Pillager (T1) |
| Vindicator | VINDICATOR | Vindicator (T1) |
| Evoker | EVOKER | Evoker (T1) |
| Magma Cube | MAGMA_CUBE | Magma Cube (T1) |
| Enderman | ENDERMAN | Enderman (T1) |
| Shulker | SHULKER | Shulker (T1) |
| Endermite | ENDERMITE | Endermite (T1) |
| Witch | WITCH | Witch (T1) |
| Slime | SLIME | Slime (T1) |
| Silverfish | SILVERFISH | Silverfish (T1) |
| Guardian | GUARDIAN | Guardian (T1) |
| Ghast | GHAST | Ghast (T1) |
| Hoglin | HOGLIN | Hoglin (T1) |
| Zoglin | ZOGLIN | Zoglin (T1) |
| Ravager | RAVAGER | Ravager (T1) |
| Vex | VEX | Vex (T1) |
| Breeze | BREEZE | Breeze (T1) |
| Creaking | CREAKING | Creaking (T1) |

## Kill Rewards

Base kill XP is `8.0 + 1.2` per mob level. Tier and other progression multipliers are applied afterward. Farmed mobs give only `0.15x` rewards and do not count toward quests by default.