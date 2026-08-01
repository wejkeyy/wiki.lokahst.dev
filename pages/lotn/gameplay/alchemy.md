---
title: Alchemy
description: Ingredients, recipes, brewing, and potion quality
updated: August 1, 2026
---

Open Alchemy from `/lotn`. It uses its own  GUI instead of the vanilla brewing stand.

## Requirements

Alchemy requires `lotn.alchemy`, a completed character, an allowed world, and both Alchemy settings to be enabled.

## Learning Ingredients

Place an ingredient listed in the Alchemy config on the spyglass icon to study it. One item is consumed per attempt.

- A successful study reveals a hidden property and grants `6` Alchemy XP.
- A failed study grants `1` Alchemy XP.
- Already known properties are not rediscovered.
- Each property is assigned a random discovery requirement between 5 and 50 study attempts.

## Brewing

Place three different ingredients from the Alchemy list in the brewing slots. They must match a recipe exactly. All three are consumed when the potion is brewed.

Brewing takes `5` seconds before skill bonuses. A successful potion starts at `12` Alchemy XP, with more XP for higher quality. Discovering a recipe for the first time gives an extra bonus.

## Potion Quality

| Quality | Required Alchemy level |
|---|---|
| Potion | 0 |
| Draught | 25 |
| Philter | 50 |
| Elixir | 75 |

Potion strength can also be changed by Alchemy perks, race bonuses, and an active Alchemist potion.

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
| `CORNFLOWER` | Restore Magicka |
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
| `FERMENTED_SPIDER_EYE` | Fortify Magicka, Invisibility, Cure |
| `SUGAR` | Restore Stamina, Restore Magicka, Warmth |
| `WHEAT` | Regenerate Health, Warrior, Heavy Armor, Warmth, Smithing |
| `RABBIT_FOOT` | Restore Stamina, Light Armor |
| `SPIDER_EYE` | Warrior, Defender, Cure |
| `SWEET_BERRIES` | Restore Health, Fortify Stamina |

## Recipes

| Potion | Ingredients | Effect | Maximum quality | Default values |
|---|---|---|---|---|
| Potion of Restore Health | `SWEET_BERRIES`<br>`POPPY`<br>`EGG` | Restore Health | Elixir | Potion: 15, 0s<br>Draught: 30, 0s<br>Philter: 50, 0s<br>Elixir: 80, 0s |
| Potion of Regenerate Health | `BROWN_MUSHROOM`<br>`DANDELION`<br>`WHEAT` | Regenerate Health | Elixir | Potion: 0.25, 60s<br>Draught: 0.5, 120s<br>Philter: 0.75, 180s<br>Elixir: 1, 300s |
| Potion of Fortify Health | `RED_MUSHROOM`<br>`BLUE_ORCHID`<br>`COCOA_BEANS` | Fortify Health | Elixir | Potion: 10, 60s<br>Draught: 20, 120s<br>Philter: 30, 180s<br>Elixir: 40, 300s |
| Potion of Restore Stamina | `SUGAR`<br>`WHEAT_SEEDS`<br>`RABBIT_FOOT` | Restore Stamina | Elixir | Potion: 20, 0s<br>Draught: 40, 0s<br>Philter: 65, 0s<br>Elixir: 100, 0s |
| Potion of Regenerate Stamina | `KELP`<br>`MELON_SEEDS`<br>`ORANGE_TULIP` | Regenerate Stamina | Elixir | Potion: 0.25, 60s<br>Draught: 0.5, 120s<br>Philter: 0.75, 180s<br>Elixir: 1, 300s |
| Potion of Fortify Stamina | `PUMPKIN_SEEDS`<br>`ALLIUM`<br>`SWEET_BERRIES` | Fortify Stamina | Elixir | Potion: 15, 60s<br>Draught: 30, 120s<br>Philter: 45, 180s<br>Elixir: 60, 300s |
| Potion of Restore Magicka | `CORNFLOWER`<br>`COCOA_BEANS`<br>`SUGAR` | Restore Magicka | Elixir | Potion: 20, 0s<br>Draught: 40, 0s<br>Philter: 65, 0s<br>Elixir: 100, 0s |
| Potion of Regenerate Magicka | `AZURE_BLUET`<br>`KELP`<br>`BEETROOT_SEEDS` | Regenerate Magicka | Elixir | Potion: 0.25, 60s<br>Draught: 0.5, 120s<br>Philter: 0.75, 180s<br>Elixir: 1, 300s |
| Potion of Fortify Magicka | `BLUE_ORCHID`<br>`PINK_TULIP`<br>`FERMENTED_SPIDER_EYE` | Fortify Magicka | Elixir | Potion: 15, 60s<br>Draught: 30, 120s<br>Philter: 45, 180s<br>Elixir: 60, 300s |
| Potion of the Warrior | `POPPY`<br>`SPIDER_EYE`<br>`WHEAT` | Warrior | Elixir | Potion: 0.1, 60s<br>Draught: 0.15, 120s<br>Philter: 0.2, 180s<br>Elixir: 0.25, 300s |
| Potion of Heavy Armor | `BROWN_MUSHROOM`<br>`WHEAT`<br>`EGG` | Heavy Armor | Elixir | Potion: 0.1, 60s<br>Draught: 0.15, 120s<br>Philter: 0.2, 180s<br>Elixir: 0.25, 300s |
| Potion of the Defender | `WHITE_TULIP`<br>`PUMPKIN_SEEDS`<br>`SPIDER_EYE` | Defender | Elixir | Potion: 0.1, 60s<br>Draught: 0.15, 120s<br>Philter: 0.2, 180s<br>Elixir: 0.25, 300s |
| Potion of Light Armor | `DANDELION`<br>`RABBIT_FOOT`<br>`MELON_SEEDS` | Light Armor | Elixir | Potion: 10, 60s<br>Draught: 20, 120s<br>Philter: 30, 180s<br>Elixir: 40, 300s |
| Potion of Resist Fire | `CRIMSON_FUNGUS`<br>`WARPED_FUNGUS`<br>`NETHER_WART` | Resist Fire | Elixir | Potion: 1, 60s<br>Draught: 1, 120s<br>Philter: 1, 180s<br>Elixir: 1, 300s |
| Potion of Resist Frost | `WHITE_TULIP`<br>`KELP`<br>`COCOA_BEANS` | Resist Frost | Elixir | Potion: 1, 60s<br>Draught: 1, 120s<br>Philter: 1, 180s<br>Elixir: 1, 300s |
| Potion of Warmth | `RED_TULIP`<br>`WHEAT`<br>`SUGAR` | Warmth | Potion | Potion: 0.5, 300s |
| Potion of Cooling | `BLUE_ORCHID`<br>`KELP`<br>`MELON_SEEDS` | Cooling | Potion | Potion: 0.5, 300s |
| Potion of Invisibility | `FERMENTED_SPIDER_EYE`<br>`LILY_OF_THE_VALLEY`<br>`GUNPOWDER` | Invisibility | Elixir | Potion: 1, 45s<br>Draught: 1, 90s<br>Philter: 1, 150s<br>Elixir: 1, 240s |
| Potion of Smithing | `ORANGE_TULIP`<br>`WHEAT`<br>`COCOA_BEANS` | Smithing | Elixir | Potion: 0.04, 60s<br>Draught: 0.09, 120s<br>Philter: 0.13, 180s<br>Elixir: 0.17, 300s |
| Potion of the Alchemist | `OXEYE_DAISY`<br>`RED_MUSHROOM`<br>`BEETROOT_SEEDS` | Alchemist | Elixir | Potion: 0.04, 60s<br>Draught: 0.09, 120s<br>Philter: 0.13, 180s<br>Elixir: 0.17, 300s |
| Potion of Cure | `SPIDER_EYE`<br>`FERMENTED_SPIDER_EYE`<br>`OXEYE_DAISY` | Cure | Potion | Potion: 1, 0s |
| Potion of Fishing | `KELP`<br>`WHEAT_SEEDS`<br>`GUNPOWDER` | Fishing | Elixir | Potion: 0.2, 60s<br>Draught: 0.25, 120s<br>Philter: 0.3, 180s<br>Elixir: 0.35, 300s |
