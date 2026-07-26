---
title: Leveling and Vitals
description: Overall levels, Health, Stamina, and Magicka
updated: July 26, 2026
---
## Overall Level

The maximum character level is **100**. Overall XP uses a linear requirement:

```text
Required XP = 100.0 + (25.0 × current level)
```

Skill level-ups contribute to overall character progression. A few configured activities can also award direct overall XP.

Each character level grants:

- `1` perk point
- `1` attribute point
- one pending upgrade choice between Health, Stamina, and Magicka

## Vitality Choices

Each pending vitality choice increases one maximum by:

| Vital | Increase |
|---|---|
| Health | 10.0 |
| Stamina | 10.0 |
| Magicka | 10.0 |

## Stamina

Stamina is used by sprinting, shielding, and attacks. Default attack costs are multiplied by the global drain multiplier of `0.5`.

| Action | Base cost or drain |
|---|---|
| Sword attack | 2.0 |
| Axe attack | 3.5 |
| Mace attack | 5.0 |
| Spear attack | 3.0 |
| Ranged attack | 2.5 |
| Sprinting | 10.0 per second |
| Shielding | 12.0 per second |

Stamina regeneration begins after attack and sprint delays. Empty Stamina causes exhaustion, slows attacks, prevents repeated sprinting, and temporarily disables shields.

## Magicka

Magicka regenerates automatically at `20.0` per second before attribute, race, temperature, and potion modifiers. Shouts spend Magicka.

## Health Display

LotN displays scaled RPG health separately from Minecraft hearts. The default display conversion is `5.0` LotN health for each Minecraft health point.