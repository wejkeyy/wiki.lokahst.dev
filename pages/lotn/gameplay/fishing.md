---
title: Fishing
description: Rarities, species, conditions, and selling
updated: July 26, 2026
---
![Fishing adventure menu](assets/fishing-adventure.png)

LotN replaces ordinary fishing rewards with named catches that have rarity, weight, length, and sale value.

## Catch Flow

A successful hook can produce fish, junk, or treasure. Fishing skill, Luck, perks, potion effects, biome, time, weather, and rarity settings influence the result.

## Rarities

| Rarity | Weight | Price | XP | Weight size | Length size |
|---|---|---|---|---|---|
| Common | 100.0 | 1.0× | 1.0× | 1.0× | 1.0× |
| Uncommon | 45.0 | 2.5× | 1.5× | 1.2× | 1.1× |
| Rare | 18.0 | 6.0× | 3.0× | 1.5× | 1.3× |
| Epic | 6.0 | 15.0× | 6.0× | 2.0× | 1.6× |
| Legendary | 1.5 | 40.0× | 12.0× | 3.0× | 2.0× |
| Mythic | 0.3 | 100.0× | 25.0× | 4.0× | 2.5× |

Legendary and Mythic rolls require a mastered Fishing skill by default. The Northern Fisherman perk improves legendary chances.

## Fish Species

| Fish | Base value | Base weight kg | Base length cm | Biomes | Special conditions |
|---|---|---|---|---|---|
| Trout | 5.0 | 1.2 | 30.0 | RIVER, SWAMP, FOREST, PLAINS | - |
| Salmon | 8.0 | 3.5 | 50.0 | RIVER, OCEAN, BEACH | - |
| Pike | 12.0 | 4.0 | 60.0 | RIVER, SWAMP | - |
| Carp | 4.0 | 2.5 | 40.0 | RIVER, SWAMP | - |
| Perch | 3.5 | 0.8 | 25.0 | RIVER, FOREST, SWAMP | - |
| Catfish | 10.0 | 5.0 | 70.0 | RIVER, SWAMP | - |
| Cod | 6.0 | 3.0 | 45.0 | OCEAN, BEACH | - |
| Tuna | 20.0 | 15.0 | 120.0 | OCEAN | - |
| Swordfish | 35.0 | 25.0 | 200.0 | OCEAN | - |
| Mackerel | 5.5 | 1.0 | 35.0 | OCEAN, BEACH | - |
| Clownfish | 15.0 | 0.3 | 15.0 | OCEAN | - |
| Pufferfish | 18.0 | 1.5 | 30.0 | OCEAN | - |
| Anglerfish | 45.0 | 8.0 | 90.0 | OCEAN | - |
| Golden Koi | 80.0 | 0.5 | 20.0 | RIVER, SWAMP | - |
| Crystal Bass | 120.0 | 2.0 | 50.0 | OCEAN, RIVER | - |
| Shadow Eel | 150.0 | 3.0 | 80.0 | SWAMP, OCEAN | - |
| Starfin | 200.0 | 1.0 | 40.0 | OCEAN | - |
| Leviathan Spawn | 500.0 | 50.0 | 300.0 | OCEAN | - |
| Northern Kraken | 2500.0 | 120.0 | 900.0 | OCEAN | Legendary-only |
| Aurora Dragonfish | 3200.0 | 18.0 | 180.0 | OCEAN, RIVER | Legendary-only; Time: NIGHT |
| Stormglass Herring | 1800.0 | 4.0 | 55.0 | OCEAN, DEEP_OCEAN | Legendary-only; Weather: THUNDER |
| Pale Ice Koi | 2200.0 | 2.0 | 48.0 | FROZEN_RIVER, FROZEN_OCEAN | Legendary-only; Time: NIGHT |

## Selling

Use `/sellfish` to sell all LotN fish in the inventory. Final value includes rarity, measured weight, measured length, Fishing skill, perks, faction reputation, race effects, and the global selling multiplier.

Vault and an economy provider are required. Without them, fish can still be caught and recorded, but selling is disabled.