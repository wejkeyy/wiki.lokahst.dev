---
title: Mobs and Holograms
description: Enemy levels, variants, rewards, and health bars
updated: July 26, 2026
---
![Scaled mob hologram](assets/scaled-mob.png)

## Level Scaling

Mob levels range from **1** to **80**. The nearest eligible player's level influences the roll, while world environment and random spread prevent every enemy from matching the player exactly.

Per-level scaling:

- Health: +2.8%
- Damage: +1.8%
- Armor: +2.5%

## Tiers

| Tier | Purpose | Health | Damage | Armor | Speed | XP | Knockback resistance |
|---|---|---|---|---|---|---|---|
| 1 | Common | 0.9× | 0.9× | 0.0 | 1.0× | 0.85× | 0.0 |
| 2 | Uncommon | 1.05× | 1.0× | 1.0 | 1.1× | 1.1× | 0.02 |
| 3 | Strong | 1.3× | 1.15× | 2.5 | 1.04× | 1.45× | 0.06 |
| 4 | Elite | 1.75× | 1.3× | 4.0 | 1.07× | 2.1× | 0.12 |
| 5 | Champion | 2.4× | 1.5× | 6.0 | 1.1× | 3.2× | 0.2 |
| 6 | Legendary | 3.25× | 1.75× | 8.0 | 1.12× | 5.0× | 0.3 |

## Enemy Families

| Family | Minecraft entities | Possible variants |
|---|---|---|
| Zombie | ZOMBIE, HUSK, ZOMBIE_VILLAGER | Rotten Corpse, Zombie, Diseased Zombie, Plague Walker, Grave Champion, Undying Lord |
| Skeleton | SKELETON, STRAY, BOGGED, WITHER_SKELETON | Skeleton, Archer Skeleton, Bone Hunter, Bone Captain, Bone Warden, Bone Overlord |
| Spider | SPIDER, CAVE_SPIDER | Spider, Venom Spider, Frost Spider, Widow Spider, Broodmother, Ancient Broodmother |
| Creeper | CREEPER | Creeper, Swift Creeper, Armored Creeper, Toxic Creeper, Infernal Creeper, Ancient Creeper |
| Drowned | DROWNED | Drowned, Sea Walker, Deep Stalker, Abyss Hunter, Abyss Guardian, Leviathan's Servant |
| Phantom | PHANTOM | Phantom, Night Phantom, Shadow Phantom, Soul Phantom, Nightmare, Ancient Nightmare |
| Piglin | PIGLIN, PIGLIN_BRUTE, ZOMBIFIED_PIGLIN | Piglin, Piglin Raider, Piglin Warrior, Piglin Champion, Piglin Warlord, Piglin King |
| Blaze | BLAZE | Blaze, Infernal Blaze, Ember Mage, Hellfire Sentinel, Flame Tyrant, Phoenix Herald |
| Pillager | PILLAGER | Pillager |
| Vindicator | VINDICATOR | Vindicator |
| Evoker | EVOKER | Evoker |
| Magma Cube | MAGMA_CUBE | Magma Cube |
| Enderman | ENDERMAN | Enderman |
| Shulker | SHULKER | Shulker |
| Endermite | ENDERMITE | Endermite |
| Witch | WITCH | Witch |
| Slime | SLIME | Slime |
| Silverfish | SILVERFISH | Silverfish |
| Guardian | GUARDIAN | Guardian |
| Ghast | GHAST | Ghast |
| Hoglin | HOGLIN | Hoglin |
| Zoglin | ZOGLIN | Zoglin |
| Ravager | RAVAGER | Ravager |
| Vex | VEX | Vex |
| Breeze | BREEZE | Breeze |
| Creaking | CREAKING | Creaking |

Variant weights change across player-level brackets, so common variants dominate early while elite, champion, and legendary variants become more likely later.

## Holograms

Holograms can appear above hostile, passive, neutral, and boss mobs. The default display shows the custom name, level, and a segmented health bar.

- Look range: `8.0` blocks
- Look-away retention: `2000` ms
- Combat retention: `8000` ms
- Visibility range: `32.0` blocks

Holograms are hidden when the camera is too close or inside the mob.