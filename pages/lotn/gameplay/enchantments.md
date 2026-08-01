---
title: Enchantments
description: Enchanting tiers, drops, discoveries, and effects
updated: August 1, 2026
---

LotN has eight enchantment families, each split into five tiers. The player menu is used to browse tiers and check discovered effects.

## Tier Unlocks

| Tier | Required Enchanting level | Base roll weight |
|---|---|---|
| Tier I | 1 | 45 |
| Tier II | 5 | 27 |
| Tier III | 10 | 16 |
| Tier IV | 15 | 9 |
| Tier V | 20 | 3 |

Enchantments only work after the player unlocks their tier. Locked tiers can still be viewed in the GUI.

## Obtaining Enchanted Gear

Compatible equipment dropped by mobs can receive a LotN enchantment. Extra generated gear is disabled by default, so the plugin normally enchants an item the mob already dropped.

| Mob classification | Base chance | Minimum tier | Notes |
|---|---|---|---|
| Normal | 0.25% | 1 | Standard roll |
| Strong | 0.5% | 1 | Standard roll |
| Elite | 1.5% | 1 | Uses elite classification |
| Boss | 5% | 1 | Uses boss classification |
| World Boss | 100% | 3 | Guaranteed roll |

The Ender Dragon is the default world boss. Its compatible equipment drops always roll an enchantment, with Tier III as the minimum, as long as the player has unlocked at least one tier.

Kills caused by the environment do not roll enchantments by default. Enchanting levels improve the drop chance and can eventually allow a second or third enchantment on the same item.

## Discovering Effects

An enchantment is discovered the first time its effect activates. Active armor effects count too. The discovery is added to the Codex and grants `12` Enchanting XP by default; unknown effects stay hidden in the GUI.

## Compatibility

Weapon enchantments work on swords, axes, bows, and crossbows. Armor enchantments work on helmets, chestplates, leggings, and boots. One item cannot have two tiers from the same family; the higher tier replaces the lower one.

## Vanilla Enchanting

Vanilla enchanting tables and enchanted books are enabled by default. Administrators can disable either one in `config.yml`.

## Fire

**Target:** Weapons

| Tier | Default values |
|---|---|
| Tier 1 | Chance: 10%<br>Damage: 2.0<br>Duration Seconds: 2.0 |
| Tier 2 | Chance: 12%<br>Damage: 4.0<br>Duration Seconds: 3.0 |
| Tier 3 | Chance: 15%<br>Damage: 6.0<br>Duration Seconds: 4.0 |
| Tier 4 | Chance: 18%<br>Damage: 9.0<br>Duration Seconds: 5.0 |
| Tier 5 | Chance: 22%<br>Damage: 12.0<br>Duration Seconds: 6.0 |

## Poison

**Target:** Weapons

| Tier | Default values |
|---|---|
| Tier 1 | Chance: 8%<br>Damage: 3.0<br>Duration Seconds: 3.0<br>Healing Reduction: 0% |
| Tier 2 | Chance: 10%<br>Damage: 5.0<br>Duration Seconds: 4.0<br>Healing Reduction: 0% |
| Tier 3 | Chance: 12%<br>Damage: 8.0<br>Duration Seconds: 5.0<br>Healing Reduction: 0% |
| Tier 4 | Chance: 15%<br>Damage: 12.0<br>Duration Seconds: 6.0<br>Healing Reduction: 0% |
| Tier 5 | Chance: 18%<br>Damage: 16.0<br>Duration Seconds: 8.0<br>Healing Reduction: 20% |

## Slowness

**Target:** Weapons

| Tier | Default values |
|---|---|
| Tier 1 | Chance: 10%<br>Speed Reduction: 10%<br>Duration Seconds: 2.0<br>Prevent Sprinting: False |
| Tier 2 | Chance: 12%<br>Speed Reduction: 15%<br>Duration Seconds: 2.5<br>Prevent Sprinting: False |
| Tier 3 | Chance: 15%<br>Speed Reduction: 20%<br>Duration Seconds: 3.0<br>Prevent Sprinting: False |
| Tier 4 | Chance: 18%<br>Speed Reduction: 25%<br>Duration Seconds: 3.5<br>Prevent Sprinting: False |
| Tier 5 | Chance: 20%<br>Speed Reduction: 30%<br>Duration Seconds: 4.0<br>Prevent Sprinting: True |

## Shock

**Target:** Weapons

| Tier | Default values |
|---|---|
| Tier 1 | Chance: 8%<br>Damage: 2.0<br>Resource Drain: 4.0<br>Arc Targets: 0<br>Arc Damage: 0.0<br>Arc Radius: 5.0 |
| Tier 2 | Chance: 10%<br>Damage: 3.0<br>Resource Drain: 6.0<br>Arc Targets: 0<br>Arc Damage: 0.0<br>Arc Radius: 5.0 |
| Tier 3 | Chance: 12%<br>Damage: 5.0<br>Resource Drain: 8.0<br>Arc Targets: 0<br>Arc Damage: 0.0<br>Arc Radius: 5.0 |
| Tier 4 | Chance: 15%<br>Damage: 7.0<br>Resource Drain: 12.0<br>Arc Targets: 1<br>Arc Damage: 3.0<br>Arc Radius: 5.0 |
| Tier 5 | Chance: 18%<br>Damage: 10.0<br>Resource Drain: 16.0<br>Arc Targets: 2<br>Arc Damage: 5.0<br>Arc Radius: 5.0 |

## Vitality

**Target:** Armor

| Tier | Default values |
|---|---|
| Tier 1 | Maximum Health: 0.5 |
| Tier 2 | Maximum Health: 1.0 |
| Tier 3 | Maximum Health: 1.5 |
| Tier 4 | Maximum Health: 2.0 |
| Tier 5 | Maximum Health: 3.0 |

## Fortification

**Target:** Armor

| Tier | Default values |
|---|---|
| Tier 1 | Physical Reduction: 1% |
| Tier 2 | Physical Reduction: 1.5% |
| Tier 3 | Physical Reduction: 2% |
| Tier 4 | Physical Reduction: 2.5% |
| Tier 5 | Physical Reduction: 3.5% |

## Agility

**Target:** Armor

| Tier | Default values |
|---|---|
| Tier 1 | Movement Speed: 0.5%<br>Stamina Regeneration: 0% |
| Tier 2 | Movement Speed: 1%<br>Stamina Regeneration: 0% |
| Tier 3 | Movement Speed: 1.5%<br>Stamina Regeneration: 0% |
| Tier 4 | Movement Speed: 2%<br>Stamina Regeneration: 0% |
| Tier 5 | Movement Speed: 2.5%<br>Stamina Regeneration: 2% |

## Thorns

**Target:** Armor

| Tier | Default values |
|---|---|
| Tier 1 | Chance: 2%<br>Damage: 1.0<br>Stagger Ticks: 0 |
| Tier 2 | Chance: 3%<br>Damage: 2.0<br>Stagger Ticks: 0 |
| Tier 3 | Chance: 4%<br>Damage: 3.0<br>Stagger Ticks: 0 |
| Tier 4 | Chance: 5%<br>Damage: 4.0<br>Stagger Ticks: 0 |
| Tier 5 | Chance: 6%<br>Damage: 6.0<br>Stagger Ticks: 10 |

## Armor Caps

| Effect | Combined cap |
|---|---|
| Vitality bonus Health | 12.0 |
| Fortification physical reduction | 14% |
| Agility movement speed | 10% |
| Agility Stamina regeneration | 8% |
| Thorns activation chance | 24% |