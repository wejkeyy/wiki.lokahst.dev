---
title: Temperature and Survival
description: Climate, injuries, weight, calendar, and water currents
updated: July 26, 2026
---
## Temperature

LotN calculates a changing temperature from biome climate, month, time of day, weather, altitude, nearby heat sources, leather insulation, attributes, and potion effects.

### Altitude

| Height | Temperature change |
|---|---|
| Y 110+ | -6°C |
| Y 160+ | -9°C |
| Y 200+ | -15°C |
| Y 260+ | -21°C |
| Y 300+ | -32°C |
| Below Y 30 | +2°C |

Rain reduces temperature by 2°C and thunder by 5°C. Nearby campfires, furnaces, torches, lanterns, lava, magma, fire, and several luminous blocks provide heat. Leather armor reduces the rate of cooling by 12% per piece.

### Gameplay Effects

Cold temperatures reduce Stamina regeneration and healing. Warm temperatures improve both. Endurance softens temperature penalties, and alchemy can provide Warmth, Cooling, Resist Frost, or Resist Fire effects.

## Calendar

The in-game calendar uses twelve 30-day months. Dates and time can appear on the scoreboard and through PlaceholderAPI.

## Broken Leg

A sufficiently damaging fall can cause a broken leg.

| Setting | Default |
|---|---|
| Minimum fall damage | 4.0 |
| Base chance | 8% |
| Extra chance per additional damage | 3% |
| Maximum chance | 80% |
| Movement multiplier | 0.55× |
| Sprinting | Disabled |
| Persists through death | Yes |

Approved LotN Cure and Health potions mend the injury. Natural healing is disabled by default.

## Carry Weight

Base carry capacity is **200.0**. Supported weapons, armor, tools, and potions contribute weight. Strength, race, armor perks, and Weightless potions can increase capacity.

An overweight player cannot sprint and receives movement penalties until enough weight is removed.

## Water Currents

Flowing water pushes survival-mode players in its calculated flow direction. Creative, spectator, flying, mounted, bypassed, and disabled-world players are ignored.

Players with `lotn.bypass.survival` bypass LotN survival penalties.
