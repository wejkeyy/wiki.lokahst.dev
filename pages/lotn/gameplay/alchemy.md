---
title: Alchemy
description: Ingredient research, recipes, potion qualities, and effects
updated: July 26, 2026
---
Alchemy uses a custom workbench opened with `/alchemy`. It does not use the vanilla brewing stand recipe system.

## Learning Ingredients

Drop one supported ingredient onto the study slot. Each ingredient has hidden properties that are discovered through repeated study. Successful research grants `6.0` Alchemy XP; unsuccessful study grants `1.0` XP.

## Brewing

Place exactly three different ingredients in the brewing slots. A potion is created only when the three-item set matches a configured recipe. Successful brewing grants `12.0` Alchemy XP.

## Potion Quality

| Quality | Required Alchemy level |
|---|---|
| Potion | 0 |
| Draught | 25 |
| Philter | 50 |
| Elixir | 75 |

Potion strength can also be modified by Alchemy perks, the character's Alchemy skill, race effects, and active Alchemist potions.

## Ingredients

| Ingredient | Possible properties |
|---|---|
| `BROWN_MUSHROOM` | Regenerate Health, Heavy Armor |
| `RED_MUSHROOM` | Fortify Health, Alchemist |
| `CRIMSON_FUNGUS` | Resist Fire |
| `WARPED_FUNGUS` | Resist Fire |
| `DANDELION` | Regenerate Health, Light Armor |
| `POPPY` | Restore Health, Warrior |
| `BLUE_ORCHID` | Fortify Health, Fortify Magicka, Cooling |
| `ALLIUM` | Fortify Stamina, Defender |
| `AZURE_BLUET` | Regenerate Magicka, Invisibility |
| `RED_TULIP` | Warmth, Warrior |
| `ORANGE_TULIP` | Regenerate Stamina, Smithing |
| `WHITE_TULIP` | Defender, Resist Frost |
| `PINK_TULIP` | Fortify Magicka, Light Armor |
| `OXEYE_DAISY` | Alchemist, Cure |
| `CORNFLOWER` | Restore Magicka, Enchanting |
| `LILY_OF_THE_VALLEY` | Invisibility, Cure |
| `WHEAT_SEEDS` | Restore Stamina, Fishing |
| `COCOA_BEANS` | Fortify Health, Restore Magicka, Resist Frost, Smithing |
| `PUMPKIN_SEEDS` | Fortify Stamina, Defender |
| `MELON_SEEDS` | Regenerate Stamina, Light Armor, Cooling |
| `BEETROOT_SEEDS` | Regenerate Magicka, Alchemist |
| `KELP` | Regenerate Stamina, Regenerate Magicka, Resist Frost, Cooling, Fishing |
| `EGG` | Restore Health, Heavy Armor |
| `NETHER_WART` | Resist Fire |
| `GUNPOWDER` | Invisibility, Fishing |
| `FERMENTED_SPIDER_EYE` | Fortify Magicka, Invisibility, Enchanting, Cure |
| `SUGAR` | Restore Stamina, Restore Magicka, Warmth, Enchanting |
| `WHEAT` | Regenerate Health, Warrior, Heavy Armor, Warmth, Smithing |
| `RABBIT_FOOT` | Restore Stamina, Light Armor |
| `SPIDER_EYE` | Warrior, Defender, Cure |
| `SWEET_BERRIES` | Restore Health, Fortify Stamina |

## Recipes

| Potion | Ingredients | Effect | Configured qualities |
|---|---|---|---|
| Potion of Restore Health | `SWEET_BERRIES`, `POPPY`, `EGG` | Restore Health | Potion: 15, 0s<br>Draught: 30, 0s<br>Philter: 50, 0s<br>Elixir: 80, 0s |
| Potion of Regenerate Health | `BROWN_MUSHROOM`, `DANDELION`, `WHEAT` | Regenerate Health | Potion: 0.25, 60s<br>Draught: 0.5, 120s<br>Philter: 0.75, 180s<br>Elixir: 1, 300s |
| Potion of Fortify Health | `RED_MUSHROOM`, `BLUE_ORCHID`, `COCOA_BEANS` | Fortify Health | Potion: 10, 60s<br>Draught: 20, 120s<br>Philter: 30, 180s<br>Elixir: 40, 300s |
| Potion of Restore Stamina | `SUGAR`, `WHEAT_SEEDS`, `RABBIT_FOOT` | Restore Stamina | Potion: 20, 0s<br>Draught: 40, 0s<br>Philter: 65, 0s<br>Elixir: 100, 0s |
| Potion of Regenerate Stamina | `KELP`, `MELON_SEEDS`, `ORANGE_TULIP` | Regenerate Stamina | Potion: 0.25, 60s<br>Draught: 0.5, 120s<br>Philter: 0.75, 180s<br>Elixir: 1, 300s |
| Potion of Fortify Stamina | `PUMPKIN_SEEDS`, `ALLIUM`, `SWEET_BERRIES` | Fortify Stamina | Potion: 15, 60s<br>Draught: 30, 120s<br>Philter: 45, 180s<br>Elixir: 60, 300s |
| Potion of Restore Magicka | `CORNFLOWER`, `COCOA_BEANS`, `SUGAR` | Restore Magicka | Potion: 20, 0s<br>Draught: 40, 0s<br>Philter: 65, 0s<br>Elixir: 100, 0s |
| Potion of Regenerate Magicka | `AZURE_BLUET`, `KELP`, `BEETROOT_SEEDS` | Regenerate Magicka | Potion: 0.25, 60s<br>Draught: 0.5, 120s<br>Philter: 0.75, 180s<br>Elixir: 1, 300s |
| Potion of Fortify Magicka | `BLUE_ORCHID`, `PINK_TULIP`, `FERMENTED_SPIDER_EYE` | Fortify Magicka | Potion: 15, 60s<br>Draught: 30, 120s<br>Philter: 45, 180s<br>Elixir: 60, 300s |
| Potion of the Warrior | `POPPY`, `SPIDER_EYE`, `WHEAT` | Warrior | Potion: 0.1, 60s<br>Draught: 0.15, 120s<br>Philter: 0.2, 180s<br>Elixir: 0.25, 300s |
| Potion of Heavy Armor | `BROWN_MUSHROOM`, `WHEAT`, `EGG` | Heavy Armor | Potion: 0.1, 60s<br>Draught: 0.15, 120s<br>Philter: 0.2, 180s<br>Elixir: 0.25, 300s |
| Potion of the Defender | `WHITE_TULIP`, `PUMPKIN_SEEDS`, `SPIDER_EYE` | Defender | Potion: 0.1, 60s<br>Draught: 0.15, 120s<br>Philter: 0.2, 180s<br>Elixir: 0.25, 300s |
| Potion of Light Armor | `DANDELION`, `RABBIT_FOOT`, `MELON_SEEDS` | Light Armor | Potion: 10, 60s<br>Draught: 20, 120s<br>Philter: 30, 180s<br>Elixir: 40, 300s |
| Potion of Resist Fire | `CRIMSON_FUNGUS`, `WARPED_FUNGUS`, `NETHER_WART` | Resist Fire | Potion: 1, 60s<br>Draught: 1, 120s<br>Philter: 1, 180s<br>Elixir: 1, 300s |
| Potion of Resist Frost | `WHITE_TULIP`, `KELP`, `COCOA_BEANS` | Resist Frost | Potion: 1, 60s<br>Draught: 1, 120s<br>Philter: 1, 180s<br>Elixir: 1, 300s |
| Potion of Warmth | `RED_TULIP`, `WHEAT`, `SUGAR` | Warmth | Potion: 0.5, 300s |
| Potion of Cooling | `BLUE_ORCHID`, `KELP`, `MELON_SEEDS` | Cooling | Potion: 0.5, 300s |
| Potion of Invisibility | `FERMENTED_SPIDER_EYE`, `LILY_OF_THE_VALLEY`, `GUNPOWDER` | Invisibility | Potion: 1, 45s<br>Draught: 1, 90s<br>Philter: 1, 150s<br>Elixir: 1, 240s |
| Potion of Smithing | `ORANGE_TULIP`, `WHEAT`, `COCOA_BEANS` | Smithing | Potion: 0.04, 60s<br>Draught: 0.09, 120s<br>Philter: 0.13, 180s<br>Elixir: 0.17, 300s |
| Potion of Enchanting | `CORNFLOWER`, `FERMENTED_SPIDER_EYE`, `SUGAR` | Enchanting | Potion: 0.04, 60s<br>Draught: 0.09, 120s<br>Philter: 0.13, 180s<br>Elixir: 0.17, 300s |
| Potion of the Alchemist | `OXEYE_DAISY`, `RED_MUSHROOM`, `BEETROOT_SEEDS` | Alchemist | Potion: 0.04, 60s<br>Draught: 0.09, 120s<br>Philter: 0.13, 180s<br>Elixir: 0.17, 300s |
| Potion of Cure | `SPIDER_EYE`, `FERMENTED_SPIDER_EYE`, `OXEYE_DAISY` | Cure | Potion: 1, 0s |
| Potion of Fishing | `KELP`, `WHEAT_SEEDS`, `GUNPOWDER` | Fishing | Potion: 0.2, 60s<br>Draught: 0.25, 120s<br>Philter: 0.3, 180s<br>Elixir: 0.35, 300s |