---
title: Equipment and Tempering
description: Item levels, armor ratings, quality ranks, and all supported gear
updated: July 26, 2026
---
LotN stores equipment statistics as persistent item data instead of reading lore as gameplay data.

## Armor Rating

Supported armor uses custom armor ratings. Damage reduction follows the configured scaling value of `250.0` and is capped at `70%` for supported damage causes.

## Item Levels

Weapons gain item experience from kills. Armor gains item experience from damage received while worn. Item level is separate from equipment quality and can reach level **100**.

## Tempering

Place one supported weapon or armor piece in an anvil with its configured tempering material. Each successful upgrade moves the item to the next quality rank.

| Rank | Quality | Base bonus | Smithing level | Material cost | Required perk |
|---|---|---|---|---|---|
| 0 | Normal | 0% | 0 | 0 | - |
| 1 | Fine | 4% | 10 | 1 | - |
| 2 | Superior | 8% | 20 | 1 | - |
| 3 | Exquisite | 13% | 30 | 2 | - |
| 4 | Flawless | 19% | 40 | 2 | - |
| 5 | Epic | 26% | 50 | 3 | - |
| 6 | Legendary | 35% | 70 | 4 | - |

The final percentage also includes Smithing level and relevant perks. Wooden equipment stops early, stone equipment cannot be tempered, and chainmail cannot be upgraded by default.

## Material Access

Diamond and Netherite weapons and armor are locked behind the corresponding Smithing perks by default. Locked equipment cannot be crafted, picked up, equipped, used, or taken from containers unless the player has the required perk or bypass permission.

## Supported Weapons

| Material | Category | Base stats | Weight | Family | Tempering material | Max quality |
|---|---|---|---|---|---|---|
| `WOODEN_SWORD` | One Handed | Damage 4; Speed 1.6 | 2.0 | Wood | `LEATHER` | 1 |
| `STONE_SWORD` | One Handed | Damage 5; Speed 1.6 | 3.0 | Stone | `COBBLESTONE` | 0 |
| `COPPER_SWORD` | One Handed | Damage 5; Speed 1.6 | 4.0 | Copper | `COPPER_INGOT` | 6 |
| `IRON_SWORD` | One Handed | Damage 6; Speed 1.6 | 5.0 | Iron | `IRON_INGOT` | 6 |
| `GOLDEN_SWORD` | One Handed | Damage 4; Speed 1.6 | 4.0 | Gold | `GOLD_INGOT` | 6 |
| `DIAMOND_SWORD` | One Handed | Damage 7; Speed 1.6 | 4.0 | Diamond | `DIAMOND` | 6 |
| `NETHERITE_SWORD` | One Handed | Damage 8; Speed 1.6 | 7.0 | Netherite | `NETHERITE_INGOT` | 6 |
| `WOODEN_AXE` | One Handed | Damage 7; Speed 0.8 | 3.0 | Wood | `LEATHER` | 1 |
| `STONE_AXE` | One Handed | Damage 9; Speed 0.8 | 5.0 | Stone | `COBBLESTONE` | 0 |
| `COPPER_AXE` | One Handed | Damage 8; Speed 0.9 | 6.0 | Copper | `COPPER_INGOT` | 6 |
| `IRON_AXE` | One Handed | Damage 9; Speed 0.9 | 7.0 | Iron | `IRON_INGOT` | 6 |
| `GOLDEN_AXE` | One Handed | Damage 7; Speed 1.0 | 6.0 | Gold | `GOLD_INGOT` | 6 |
| `DIAMOND_AXE` | One Handed | Damage 9; Speed 1.0 | 6.0 | Diamond | `DIAMOND` | 6 |
| `NETHERITE_AXE` | One Handed | Damage 10; Speed 1.0 | 9.0 | Netherite | `NETHERITE_INGOT` | 6 |
| `MACE` | One Handed | Damage 6; Speed 0.6 | 16.0 | Mace | `BREEZE_ROD` | 6 |
| `BOW` | Bow | Damage 6; Speed 1.0 | 3.0 | Bow | `STRING` | 6 |
| `CROSSBOW` | Crossbow | Damage 9; Speed 0.75 | 8.0 | Crossbow | `IRON_INGOT` | 6 |
| `TRIDENT` | Spear | Damage 9; Speed 1.1 | 8.0 | Prismarine | `PRISMARINE_SHARD` | 6 |
| `WOODEN_SPEAR` | Spear | Damage 4; Speed 1.2 | 2.5 | Wood | `LEATHER` | 1 |
| `STONE_SPEAR` | Spear | Damage 5; Speed 1.2 | 4.0 | Stone | `COBBLESTONE` | 0 |
| `COPPER_SPEAR` | Spear | Damage 6; Speed 1.2 | 5.0 | Copper | `COPPER_INGOT` | 6 |
| `IRON_SPEAR` | Spear | Damage 7; Speed 1.2 | 6.0 | Iron | `IRON_INGOT` | 6 |
| `GOLDEN_SPEAR` | Spear | Damage 5; Speed 1.3 | 4.5 | Gold | `GOLD_INGOT` | 6 |
| `DIAMOND_SPEAR` | Spear | Damage 8; Speed 1.2 | 6.5 | Diamond | `DIAMOND` | 6 |
| `NETHERITE_SPEAR` | Spear | Damage 9; Speed 1.2 | 9.0 | Netherite | `NETHERITE_INGOT` | 6 |

## Supported Tools

| Material | Category | Base stats | Weight | Family | Tempering material | Max quality |
|---|---|---|---|---|---|---|
| `WOODEN_PICKAXE` | Pickaxe | Tool | 3.0 | Wood | `LEATHER` | 1 |
| `STONE_PICKAXE` | Pickaxe | Tool | 5.0 | Stone | `COBBLESTONE` | 0 |
| `COPPER_PICKAXE` | Pickaxe | Tool | 6.0 | Copper | `COPPER_INGOT` | 6 |
| `IRON_PICKAXE` | Pickaxe | Tool | 7.0 | Iron | `IRON_INGOT` | 6 |
| `GOLDEN_PICKAXE` | Pickaxe | Tool | 6.0 | Gold | `GOLD_INGOT` | 6 |
| `DIAMOND_PICKAXE` | Pickaxe | Tool | 6.0 | Diamond | `DIAMOND` | 6 |
| `NETHERITE_PICKAXE` | Pickaxe | Tool | 9.0 | Netherite | `NETHERITE_INGOT` | 6 |
| `WOODEN_HOE` | Hoe | Tool | 2.0 | Wood | `LEATHER` | 1 |
| `STONE_HOE` | Hoe | Tool | 3.0 | Stone | `COBBLESTONE` | 0 |
| `COPPER_HOE` | Hoe | Tool | 3.0 | Copper | `COPPER_INGOT` | 6 |
| `IRON_HOE` | Hoe | Tool | 4.0 | Iron | `IRON_INGOT` | 6 |
| `GOLDEN_HOE` | Hoe | Tool | 4.0 | Gold | `GOLD_INGOT` | 6 |
| `DIAMOND_HOE` | Hoe | Tool | 4.0 | Diamond | `DIAMOND` | 6 |
| `NETHERITE_HOE` | Hoe | Tool | 6.0 | Netherite | `NETHERITE_INGOT` | 6 |

## Supported Armor

| Material | Category | Base stats | Weight | Family | Tempering material | Max quality |
|---|---|---|---|---|---|---|
| `LEATHER_HELMET` | Light Armor | Armor 5 | 3.0 | Leather | `LEATHER` | 6 |
| `LEATHER_CHESTPLATE` | Light Armor | Armor 15 | 8.0 | Leather | `LEATHER` | 6 |
| `LEATHER_LEGGINGS` | Light Armor | Armor 12 | 6.0 | Leather | `LEATHER` | 6 |
| `LEATHER_BOOTS` | Light Armor | Armor 5 | 2.0 | Leather | `LEATHER` | 6 |
| `CHAINMAIL_HELMET` | Light Armor | Armor 15 | 5.0 | Chainmail | `IRON_INGOT` | 0 |
| `CHAINMAIL_CHESTPLATE` | Light Armor | Armor 25 | 13.0 | Chainmail | `IRON_INGOT` | 0 |
| `CHAINMAIL_LEGGINGS` | Light Armor | Armor 20 | 10.0 | Chainmail | `IRON_INGOT` | 0 |
| `CHAINMAIL_BOOTS` | Light Armor | Armor 8 | 4.0 | Chainmail | `IRON_INGOT` | 0 |
| `GOLDEN_HELMET` | Light Armor | Armor 12 | 6.0 | Gold | `GOLD_INGOT` | 6 |
| `GOLDEN_CHESTPLATE` | Light Armor | Armor 25 | 15.0 | Gold | `GOLD_INGOT` | 6 |
| `GOLDEN_LEGGINGS` | Light Armor | Armor 15 | 12.0 | Gold | `GOLD_INGOT` | 6 |
| `GOLDEN_BOOTS` | Light Armor | Armor 8 | 5.0 | Gold | `GOLD_INGOT` | 6 |
| `TURTLE_HELMET` | Light Armor | Armor 18 | 5.0 | Turtle | `TURTLE_SCUTE` | 6 |
| `COPPER_HELMET` | Heavy Armor | Armor 17 | 6.0 | Copper | `COPPER_INGOT` | 6 |
| `COPPER_CHESTPLATE` | Heavy Armor | Armor 28 | 15.0 | Copper | `COPPER_INGOT` | 6 |
| `COPPER_LEGGINGS` | Heavy Armor | Armor 22 | 12.0 | Copper | `COPPER_INGOT` | 6 |
| `COPPER_BOOTS` | Heavy Armor | Armor 10 | 5.0 | Copper | `COPPER_INGOT` | 6 |
| `IRON_HELMET` | Heavy Armor | Armor 20 | 7.0 | Iron | `IRON_INGOT` | 6 |
| `IRON_CHESTPLATE` | Heavy Armor | Armor 32 | 18.0 | Iron | `IRON_INGOT` | 6 |
| `IRON_LEGGINGS` | Heavy Armor | Armor 25 | 14.0 | Iron | `IRON_INGOT` | 6 |
| `IRON_BOOTS` | Heavy Armor | Armor 12 | 6.0 | Iron | `IRON_INGOT` | 6 |
| `DIAMOND_HELMET` | Heavy Armor | Armor 25 | 6.0 | Diamond | `DIAMOND` | 6 |
| `DIAMOND_CHESTPLATE` | Heavy Armor | Armor 40 | 16.0 | Diamond | `DIAMOND` | 6 |
| `DIAMOND_LEGGINGS` | Heavy Armor | Armor 30 | 13.0 | Diamond | `DIAMOND` | 6 |
| `DIAMOND_BOOTS` | Heavy Armor | Armor 15 | 5.0 | Diamond | `DIAMOND` | 6 |
| `NETHERITE_HELMET` | Heavy Armor | Armor 28 | 9.0 | Netherite | `NETHERITE_INGOT` | 6 |
| `NETHERITE_CHESTPLATE` | Heavy Armor | Armor 45 | 24.0 | Netherite | `NETHERITE_INGOT` | 6 |
| `NETHERITE_LEGGINGS` | Heavy Armor | Armor 35 | 20.0 | Netherite | `NETHERITE_INGOT` | 6 |
| `NETHERITE_BOOTS` | Heavy Armor | Armor 18 | 8.0 | Netherite | `NETHERITE_INGOT` | 6 |