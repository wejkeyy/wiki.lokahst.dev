---
title: Survival
description: Carry weight, temperature, and broken legs
updated: August 1, 2026
---

## Carry Weight

Base carry capacity is `200.0`. Equipment uses the weight set in its definition, while food and potions use fixed values.

- At 91% capacity, Stamina regeneration begins to suffer.
- At 95% capacity, sprinting is blocked.
- At 100% capacity, movement is slowed and Fast Travel is blocked.
- The default overweight movement penalty is `15.0%`.
- Nord characters receive 8% more carry capacity.

Custom LotN potions weigh `0.2` each. Edible items weigh `0.3` each.

## Broken Legs

A player can break a leg when final fall damage is at least `4.0`.

| Setting | Default |
|---|---|
| Base chance | 8% |
| Extra chance per damage above threshold | 3% |
| Maximum chance | 80% |
| Movement multiplier | 0.55x |
| Sprinting | Disabled |
| Persists through death | Yes |
| Natural healing time | 48000 ticks, about 40 real minutes |

Some LotN healing potions can cure the injury, and administrators can heal it through `/lotnea`. Players with `lotn.bypass.survival` ignore these penalties.

## Temperature

Temperature is affected by biome, season, weather, altitude, nearby heat sources, armor, and potions. It changes Stamina regeneration and other recovery rates.

| Temperature | Stamina regen multiplier | Recovery multiplier |
|---|---|---|
| At or below -8°C | 0.50x | 0.40x |
| -7°C to 0°C | 0.60x | 0.55x |
| 1°C to 7°C | 0.80x | 0.75x |
| 8°C to 11°C | 0.95x | 0.90x |
| 12°C to 22°C | 1.00x | 1.00x |
| 23°C to 29°C | 1.05x | 1.08x |
| Above 29°C | 1.10x | 1.15x |

Rain lowers the target temperature by 2°C, while thunder lowers it by 5°C. High altitude can lower it further. Each worn leather armor piece slows cooling by 12%.