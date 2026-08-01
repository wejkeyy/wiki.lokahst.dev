---
title: Shouts
description: How to unlock, select, and use shouts
updated: August 1, 2026
---

Shouts use all three words by default. Administrators can lower the starting word count in `config.yml`, down to `0`.

## Selecting and Activating

1. Open Shouts from `/lotn`.
2. Select an unlocked shout.
3. Double-shift to activate.

The two sneak presses must happen within `350` milliseconds. Shouts cannot be used while dead or in Spectator mode. Using one consumes Magicka and starts its cooldown.

| Shout | Words | Magicka | Cooldown | Effect |
|---|---|---|---|---|
| Unrelenting Force | `Fus Ro Dah` | 25 | 12 | Pushes and damages enemies in a cone.<br>Range 10.0 blocks; Damage 2.0 |
| Whirlwind Sprint | `Wuld Nah Kest` | 25 | 10 | Launches the player forward and stops before unsafe blocks.<br>Distance 7.0/11.0/15.0 blocks |
| Fire Breath | `Yol Toor Shul` | 30 | 18 | Damages and ignites enemies in a cone.<br>Range 10.0/14.0/18.0 blocks; Fire 4/6/8s; Damage 4.0/7.0/10.0 |
| Become Ethereal | `Feim Zii Gron` | 35 | 45 | Prevents incoming damage while offensive actions are disabled.<br>Duration 3/5/8s |
| Storm Call | `Strun Bah Qo` | 60 | 1200 | Starts a storm and strikes nearby enemies.<br>Duration 60s |
| Aura Whisper | `Laas Yah Nir` | 30 | 300 | Reveals nearby mobs through walls.<br>Range 15.0/22.0/30.0 blocks; Duration 10/20/30s |
| Battle Cry | `Kaan Drem Ov` | 50 | 3600 | Forces nearby mobs to stop combat temporarily.<br>Range 20.0/25.0/30.0 blocks; Duration 20s |
| Clear Skies | `Lok Vah Koor` | 20 | 300 | Clears weather and active Storm Call.<br>Clear weather 600s |
| Dragon Aspect | `Mul Qah Diiv` | 75 | 3600 | Increases worn armor rating by 20% for five minutes.<br>Duration 300s |

## Special Rules

- Fire Breath deals only 15% of normal damage to dragons.
- Storm Call lasts 60 seconds and attempts strikes every 3 to 6 seconds within 64 blocks.
- Battle Cry suppresses nearby mob combat for 20 seconds.
- Dragon Aspect needs at least one worn armor piece.
- High Elves have 15% longer shout cooldowns.