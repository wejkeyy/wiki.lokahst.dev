---
title: Placeholders
updated: July 19, 2026
---

# Placeholders

LOTN includes built-in support for [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

The expansion identifier is:

```text
lotn
```

---

## Player Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%lotn_character_name%` | LOTN character name. Falls back to the Minecraft username when no character name is set |
| `%lotn_character%` | LOTN character name. Falls back to the Minecraft username when no character name is set |
| `%lotn_level%` | Current player level |
| `%lotn_player_level%` | Current player level |
| `%lotn_level_max%` | Configured maximum player level |
| `%lotn_xp%` | Current XP toward the next player level |
| `%lotn_level_xp%` | Current XP toward the next player level |
| `%lotn_xp_required%` | XP required for the next player level. Returns `0` at maximum level |
| `%lotn_level_xp_required%` | XP required for the next player level. Returns `0` at maximum level |
| `%lotn_skill_points%` | Available perk points |
| `%lotn_perk_points%` | Available perk points |
| `%lotn_pending_attribute_choices%` | Unspent upgrade points |
| `%lotn_attribute_points%` | Available attribute points |
| `%lotn_injury_broken_leg%` | Returns `true` when the player has a broken leg, otherwise `false` |

---

## Attribute Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%lotn_health%` | Current displayed health. Returns `0` while offline |
| `%lotn_hp%` | Current displayed health. Returns `0` while offline |
| `%lotn_max_health%` | Maximum health |
| `%lotn_max_hp%` | Maximum health |
| `%lotn_stamina%` | Current stamina, rounded to a whole number |
| `%lotn_max_stamina%` | Effective maximum stamina, rounded to a whole number |
| `%lotn_magicka%` | Current magicka, rounded to a whole number |
| `%lotn_max_magicka%` | Effective maximum magicka, rounded to a whole number |
| `%lotn_armor%` | Total armor rating. Returns `0` while offline |
| `%lotn_armor_rating%` | Total armor rating. Returns `0` while offline |
| `%lotn_weight%` | Current carried weight, formatted to one decimal place |
| `%lotn_carry_weight%` | Current carried weight, formatted to one decimal place |
| `%lotn_max_weight%` | Maximum carry weight, formatted to one decimal place |
| `%lotn_max_carry_weight%` | Maximum carry weight, formatted to one decimal place |

---

## World Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%lotn_temperature%` | Current LOTN temperature. Returns `0` while offline |
| `%lotn_biome%` | Current biome name. Returns an empty value while offline |
| `%lotn_world%` | Current world name. Returns an empty value while offline |
| `%lotn_in_game_date%` | Current LOTN in-game date. Returns an empty value while offline |
| `%lotn_date%` | Current LOTN in-game date. Returns an empty value while offline |
| `%lotn_in_game_time%` | Current LOTN in-game time. Returns an empty value while offline |
| `%lotn_time%` | Current LOTN in-game time. Returns an empty value while offline |

---

## Quest and Progression Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%lotn_active_quest%` | Name of the currently tracked quest |
| `%lotn_active_quest_objective%` | Current tracked quest objective and progress text |
| `%lotn_active_quest_progress%` | Current tracked quest objective and progress text |
| `%lotn_quests_active%` | Returns `1` when a quest is tracked, otherwise `0` |
| `%lotn_quests_completed%` | Number of completed quests |
| `%lotn_discoveries%` | Number of recorded discoveries |
| `%lotn_fish_caught%` | Total number of fish caught |

---

## Economy Placeholders

Vault and a compatible economy plugin are required for economy placeholders.

| Placeholder | Description |
|-------------|-------------|
| `%lotn_economy_balance%` | Formatted Vault economy balance |
| `%lotn_balance%` | Formatted Vault economy balance |

---

## Target Placeholders

Target placeholders display information about the living entity the player is currently looking at.

The targeting range is **8 blocks**. These placeholders return an empty value when the player is offline or no living entity is targeted.

| Placeholder | Description |
|-------------|-------------|
| `%lotn_target_name%` | Display name of the targeted living entity |
| `%lotn_target_variant%` | LOTN variant ID of the targeted living entity |
| `%lotn_target_family%` | LOTN family ID of the targeted living entity |
| `%lotn_target_level%` | LOTN level of the targeted living entity |
| `%lotn_target_hp%` | Current health of the targeted living entity |
| `%lotn_target_max_hp%` | Maximum health of the targeted living entity |
| `%lotn_target_hp_percent%` | Health percentage of the targeted living entity |
| `%lotn_target_tier%` | LOTN tier of the targeted living entity |

---

## Skill Placeholders

Replace `(skill)` with a recognised skill ID.

| Placeholder | Description |
|-------------|-------------|
| `%lotn_skill_(skill)_level%` | Current level of the specified skill |
| `%lotn_skill_(skill)_xp%` | Current XP of the specified skill |
| `%lotn_skill_(skill)_xp_required%` | XP required for the next skill level. Returns `0` at maximum level or for an unknown skill |
| `%lotn_skill_(skill)_progress%` | Progress toward the next skill level as a percentage from `0` to `100` |

### Recognised Skill IDs

| Skill | ID |
|-------|----|
| One-Handed | `one_handed` |
| Two-Handed | `two_handed` |
| Archery | `archery` |
| Block | `block` |
| Heavy Armor | `heavy_armor` |
| Light Armor | `light_armor` |
| Sneak | `sneak` |
| Mining | `mining` |
| Woodcutting | `woodcutting` |
| Fishing | `fishing` |
| Alchemy | `alchemy` |
| Enchanting | `enchanting` |
| Smithing | `smithing` |
| Survival | `survival` |
| Restoration | `restoration` |
| Destruction | `destruction` |
| Farming | `farming` |
| Trading | `trading` |

### Examples

```text
%lotn_skill_archery_level%
%lotn_skill_archery_xp%
%lotn_skill_archery_xp_required%
%lotn_skill_archery_progress%
```

---

# Perk Placeholders

Every recognised perk supports two placeholders:

```text
%lotn_perk_(perk)_rank%
%lotn_perk_(perk)_max_rank%
```

- `rank` returns the player's current rank.
- `max_rank` returns the configured maximum rank.

---

## Archery Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Steady Aim | `%lotn_perk_steady_aim_rank%` | `%lotn_perk_steady_aim_max_rank%` |
| Eagle Eye | `%lotn_perk_eagle_eye_rank%` | `%lotn_perk_eagle_eye_max_rank%` |
| Hunter's Draw | `%lotn_perk_hunters_draw_rank%` | `%lotn_perk_hunters_draw_max_rank%` |
| Piercing Shot | `%lotn_perk_piercing_shot_rank%` | `%lotn_perk_piercing_shot_max_rank%` |

---

## Block Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Deflection | `%lotn_perk_deflection_rank%` | `%lotn_perk_deflection_max_rank%` |
| Steadfast | `%lotn_perk_steadfast_rank%` | `%lotn_perk_steadfast_max_rank%` |
| Counterguard | `%lotn_perk_counterguard_rank%` | `%lotn_perk_counterguard_max_rank%` |
| Last Bastion | `%lotn_perk_last_bastion_rank%` | `%lotn_perk_last_bastion_max_rank%` |

---

## One-Handed Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Armsman | `%lotn_perk_armsman_rank%` | `%lotn_perk_armsman_max_rank%` |
| Quick Strikes | `%lotn_perk_quick_strikes_rank%` | `%lotn_perk_quick_strikes_max_rank%` |
| Bleeding Edge | `%lotn_perk_bleeding_edge_rank%` | `%lotn_perk_bleeding_edge_max_rank%` |
| Crushing Blows | `%lotn_perk_crushing_blows_rank%` | `%lotn_perk_crushing_blows_max_rank%` |

---

## Two-Handed Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Barbarian | `%lotn_perk_barbarian_rank%` | `%lotn_perk_barbarian_max_rank%` |
| Heavy Impact | `%lotn_perk_heavy_impact_rank%` | `%lotn_perk_heavy_impact_max_rank%` |
| Sweeping Force | `%lotn_perk_sweeping_force_rank%` | `%lotn_perk_sweeping_force_max_rank%` |

---

## Heavy Armor Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Iron Skin | `%lotn_perk_iron_skin_rank%` | `%lotn_perk_iron_skin_max_rank%` |
| Unshaken | `%lotn_perk_unshaken_rank%` | `%lotn_perk_unshaken_max_rank%` |
| Juggernaut | `%lotn_perk_juggernaut_rank%` | `%lotn_perk_juggernaut_max_rank%` |

---

## Light Armor Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Agile Defense | `%lotn_perk_agile_defense_rank%` | `%lotn_perk_agile_defense_max_rank%` |
| Windstep | `%lotn_perk_windstep_rank%` | `%lotn_perk_windstep_max_rank%` |
| Evasion | `%lotn_perk_evasion_rank%` | `%lotn_perk_evasion_max_rank%` |

---

## Fishing Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Experienced Angler | `%lotn_perk_experienced_angler_rank%` | `%lotn_perk_experienced_angler_max_rank%` |
| Strong Line | `%lotn_perk_strong_line_rank%` | `%lotn_perk_strong_line_max_rank%` |
| Treasure Hunter | `%lotn_perk_treasure_hunter_rank%` | `%lotn_perk_treasure_hunter_max_rank%` |
| Northern Fisherman | `%lotn_perk_northern_fisherman_rank%` | `%lotn_perk_northern_fisherman_max_rank%` |

---

## Smithing Perks

| Perk | Current Rank | Maximum Rank |
|------|--------------|--------------|
| Eye Glass | `%lotn_perk_eye_glass_rank%` | `%lotn_perk_eye_glass_max_rank%` |
| Enchanter | `%lotn_perk_enchanter_rank%` | `%lotn_perk_enchanter_max_rank%` |
| Temper | `%lotn_perk_temper_rank%` | `%lotn_perk_temper_max_rank%` |
| Leatherworking | `%lotn_perk_leatherworking_rank%` | `%lotn_perk_leatherworking_max_rank%` |
| Chain Smithing | `%lotn_perk_chain_smithing_rank%` | `%lotn_perk_chain_smithing_max_rank%` |
| Golden Smithing | `%lotn_perk_golden_smithing_rank%` | `%lotn_perk_golden_smithing_max_rank%` |
| Iron Smithing | `%lotn_perk_iron_smithing_rank%` | `%lotn_perk_iron_smithing_max_rank%` |
| Toolsmith | `%lotn_perk_toolsmith_rank%` | `%lotn_perk_toolsmith_max_rank%` |
| Advanced Smithing | `%lotn_perk_advanced_smithing_rank%` | `%lotn_perk_advanced_smithing_max_rank%` |
| Arcane Blacksmith | `%lotn_perk_arcane_blacksmith_rank%` | `%lotn_perk_arcane_blacksmith_max_rank%` |
| Diamond Smithing | `%lotn_perk_diamond_smithing_rank%` | `%lotn_perk_diamond_smithing_max_rank%` |
| Netherite Smithing | `%lotn_perk_netherite_smithing_rank%` | `%lotn_perk_netherite_smithing_max_rank%` |
| Master Smithing | `%lotn_perk_master_smithing_rank%` | `%lotn_perk_master_smithing_max_rank%` |

> Smithing perks from `leatherworking` through `master_smithing` are currently disabled in the default configuration. Their IDs are still recognised by the placeholder system.

---

## Reputation Placeholders

Replace `(faction)` with a configured faction ID.

| Placeholder | Description |
|-------------|-------------|
| `%lotn_reputation_(faction)%` | Numeric reputation value for the specified faction |
| `%lotn_reputation_rank_(faction)%` | Formatted reputation rank for the specified faction |

### Configured Factions

| Faction | ID |
|---------|----|
| Northfolk | `northfolk` |
| Wardens | `wardens` |
| Anglers | `anglers` |
| Scholars | `scholars` |

### Examples

```text
%lotn_reputation_northfolk%
%lotn_reputation_rank_northfolk%

%lotn_reputation_wardens%
%lotn_reputation_rank_wardens%

%lotn_reputation_anglers%
%lotn_reputation_rank_anglers%

%lotn_reputation_scholars%
%lotn_reputation_rank_scholars%
```