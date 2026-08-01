---
title: Combat
description: Damage, critical hits, status effects, and shields
updated: August 1, 2026
---

LotN adds its own damage calculations on top of Minecraft combat. Skills, item quality, enchantments, races, and active effects all affect the final damage.

## Core Defaults

| Mechanic | Default |
|---|---|
| Base critical chance | 5% |
| Critical multiplier | 1.5x |
| Maximum critical chance | 75% |
| Heavy armor critical modifier | -2% |
| Random damage variation | +/-10% |
| Mob dodge | 2% base, capped at 12% |

## Status Effects

| Effect | Base chance | Effect |
|---|---|---|
| Bleed | 8% | 1 damage every 20 ticks for 60 ticks |
| Poison | 5% | Poison level 1 for 100 ticks |
| Burn | 10% | Ignites the target for 40 ticks |
| Frost | 10% | Slowness level 2 for 60 ticks; mobs can be frozen |
| Shock | 8% | 1.15x damage; 25% chain chance within 3 blocks |

## Shields

Mob attacks can still deal damage through a raised shield. The default formula starts at `35%`, adds `0.65%` per mob level, and limits the final value to `25%` to `85%`.

Holding a shield also drains Stamina. When Stamina reaches zero, the shield is disabled for the set duration.

## What Changes Final Damage

Final damage can be changed by weapon skill, attributes, race bonuses, critical hits, low-health perks, mob tier, tempering, item level, enchantments, armor, blocking, potions, and shouts.