---
title: Equipment and Tempering
description: Equipment stats, armor rating, and tempering
updated: August 1, 2026
---

## Equipment Registry

The default equipment registry contains `68` entries, including weapons, armor, pickaxes, hoes, tridents, and the custom mace and spear materials.

LotN divides armor into two classes:

- Light: leather, chainmail, gold, and turtle shell pieces
- Heavy: copper, iron, diamond, and netherite pieces

## Armor Rating

Physical damage reduction follows this formula:

```text
reduction = total armor rating / (total armor rating + 250)
```

Damage reduction is capped at `70%`. It works against melee attacks, sweep attacks, projectiles, and explosions. Void, kill, and sonic boom damage ignore armor rating.

## Quality Ranks

| Rank | Quality | Base bonus | Material cost |
|---|---|---|---|
| 0 | Normal | 0% | 0 |
| 1 | Fine | 4% | 1 |
| 2 | Superior | 8% | 1 |
| 3 | Exquisite | 13% | 2 |
| 4 | Flawless | 19% | 2 |
| 5 | Epic | 26% | 3 |
| 6 | Legendary | 35% | 4 |

## Using the Anvil

Put a registered weapon or armor piece in the first anvil slot and its upgrade material in the second. Tempering does not cost Minecraft XP.

- Smithing level 1 unlocks general tempering.
- Each material family has its own Smithing requirement.
- Wood is capped at Fine and at an 8% final tempering bonus.
- The general final tempering bonus is capped at 75%.
- Each armor quality rank adds 2.5% to that item's weight.

| Material family | Required Smithing level |
|---|---|
| Wood | 2 |
| Leather | 4 |
| Stone | 6 |
| Copper | 8 |
| Gold | 10 |
| Chainmail | 12 |
| Iron | 14 |
| Diamond | 16 |
| Netherite | 18 |

## Tempering Formula

```text
base quality bonus
* (1 + Smithing level * 0.005)
* (1 + general tempering perk + material perk)
* potion multiplier
* race tempering multiplier
```

A successful upgrade always adds at least 0.5%. Higher material tiers, quality ranks, and material costs grant more Smithing XP.