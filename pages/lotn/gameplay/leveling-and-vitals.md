---
title: Leveling and Vitals
description: Character levels, Health, Stamina, and Magicka
updated: August 1, 2026
---

## Overall Level

Character level is capped at `100`. XP needed for the next level is calculated with:

```text
115 + (current level - 1) * 28
```

Raising skills also raises the character level. Higher skill levels contribute more XP, but focusing almost entirely on a few skills reduces that contribution.

## Vitality Choices

Each character level gives one vitality point. It can be spent in the Character menu on Health, Stamina, or Magicka.

| Choice | Increase |
|---|---|
| Health | 10 |
| Stamina | 10 |
| Magicka | 10 |

## Health Display

LotN displays `5` Health for every `1` point of Minecraft health. The underlying Minecraft health scale remains `20`.

## Stamina

Attacking, sprinting, and holding a shield drain Stamina. At zero Stamina, the player becomes exhausted and cannot attack at normal speed until some Stamina returns.

| Action | Default |
|---|---|
| Sword attack | 6.5 Stamina |
| Axe attack | 7 Stamina |
| Mace attack | 7 Stamina |
| Spear attack | 6.5 Stamina |
| Ranged attack | 6.5 Stamina |
| Power attack | 16.5 Stamina |
| Sprint drain | 5 Stamina per second after the global 0.5x drain multiplier |
| Raised shield drain | 6 Stamina per second after the global 0.5x drain multiplier |
| Regeneration | 18 per second before other modifiers |
| Attack regeneration delay | 80 ticks |
| Exhaustion recovery threshold | 25% |

An attack counts as a power attack when Minecraft's attack cooldown is at least `0.9`. Reaching zero Stamina applies Slowness `5` for `40` ticks and sets attack cooldown to `24` ticks.

## Magicka

Magicka regenerates at `20` per second before race, temperature, skill, and potion bonuses. Shouts consume their Magicka cost as soon as they activate.