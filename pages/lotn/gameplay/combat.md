---
title: Combat
description: RPG damage, Stamina, status effects, and feedback
updated: July 26, 2026
---
LotN layers RPG calculations and visual feedback over normal Minecraft combat.

## Core Rules

| Mechanic | Default |
|---|---|
| Base critical chance | 5% |
| Critical multiplier | 1.5× |
| Maximum critical chance | 75% |
| Heavy armor critical modifier | -2% |
| Damage variation | ±10% |
| Shield damage through | 10% base, scaling with mob level |
| Mob dodge | 2% base, up to 12% |

## Status Effects

| Effect | Default behavior |
|---|---|
| Bleed | Damage over time for configured hits and perks |
| Poison | Applies a temporary poison effect |
| Burn | Ignites the target |
| Frost | Slows or freezes mobs and can modify damage |
| Shock | Adds damage and may chain to nearby enemies |

## Stamina Combat

Attacks spend Stamina. Attacking at empty Stamina causes exhaustion and temporarily slows further attacks. Shields also drain Stamina while raised and receive a cooldown when Stamina is depleted.

## Skill and Perk Integration

Weapon skill levels, attributes, race multipliers, perks, tempering, and enchantments can all modify final damage. Block and armor skills improve defensive calculations.

## Visual Effects

EA13 enables weapon impacts, power-attack effects, shield-block effects, projectile trails, kill effects, wounded-player feedback, healing effects, and larger boss bursts by default.