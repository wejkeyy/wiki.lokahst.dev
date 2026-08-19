---
title: Configuration
description: Config files, world filters, and reloading
updated: August 1, 2026
---


LotN loads `16` YAML config files. Invalid values may be limited, ignored, or replaced with a fallback. Most problems are also printed to the console.

| File | Main sections |
|---|---|
| `achievements.yml` | enabled, entries |
| `alchemy.yml` | schema-version, enabled, messages, study, brewing, quality-thresholds, ingredients, recipes |
| `bosses.yml` | schema-version, enabled, respect-existing-custom-name, format, names, dragon |
| `codex.yml` | schema-version, enabled, categories |
| `combat.yml` | schema-version, critical, ambient-effects, bleed, poison, burn, frost, shock, damage-variation, mob-shield-damage, combat-effects |
| `config.yml` | schema-version, chat, console, links, leveling, systems, shouts, worlds, storage, character-creation, vitals, world-settings, trading, weight |
| `discoveries.yml` | schema-version, enabled, check-cell-size, milestones, rewards |
| `effects.yml` | schema-version, enabled, combat, fishing, quests, travel, loot, discoveries, alchemy, general |
| `enchantments.yml` | schema-version, debug, tiers, compatibility, drops, skill-modifiers, armor-caps, physical-damage-causes, immunities, discovery, families, lore, gui, visuals, messages |
| `equipment.yml` | schema-version, debug, armor, quality, tempering, definitions |
| `fishing.yml` | schema-version, fishing, rarities, fish, junk, treasures, sell |
| `mobs.yml` | schema-version, scaling, player-selection, levels, tiers, families, hologram, armor, equipment-profiles, rewards |
| `quests.yml` | schema-version, settings, quests |
| `scoreboard.yml` | schema-version, enabled, update-interval-ticks, show-title, show-numbers, title, quest-bar, lines |
| `skills.yml` | schema-version, migration, multipliers, debug, item-progression, anti-exploit, notifications, categories, gui, integrations, xp-values, skills |
| `survival.yml` | schema-version, injuries, messages |

## World Filtering

`config.yml` has `worlds.whitelist` and `worlds.blacklist`.

- An empty whitelist allows every world unless blacklisted.
- A non-empty whitelist allows only listed worlds.
- The blacklist always blocks matching worlds.

Alchemy, progression, survival, and several other systems use these world rules.

## System Toggles

The `systems` section in `config.yml` lets each major feature be enabled or disabled separately: Skills, Quests, Discovery, Codex viewing, Codex recording, Achievements, Fishing, Temperature, Injuries, Weight, Fast Travel, Mob Scaling, and Alchemy.

## Reload

The settings page in `/lotnea` can reload the config without restarting the server. Systems with reload support will refresh their values, registries, and scheduled tasks. Invalid material, sound, particle, entity, or recipe names may still be rejected.

## Schema Versions

Most config files include `schema-version`. Keep it in place, because LotN uses it when loading and migrating config or player data.
