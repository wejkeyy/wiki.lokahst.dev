---
title: Commands
description: Complete EA13 command reference
updated: July 26, 2026
---
## Player Commands

All player commands require `lotn.use`. Commands used before character creation reopen the setup flow unless they are part of character administration.

| Command | Aliases | Description | Additional permission |
|---|---|---|---|
| `/lotn` | `/legends`, `/legendsofthenorth`, `/lotn menu` | Opens the main LotN menu | - |
| `/lotn stats` | `/stats`, `/character`, `/lotn character` | Opens character statistics | - |
| `/lotn attributes` | `/attributes` | Opens the attribute menu | - |
| `/lotn skills` | `/skills`, `/lotn perks`, `/perks` | Opens skill categories and perk trees | - |
| `/lotn journal` | `/journal` | Opens active quests | - |
| `/lotn quests` | `/quests` | Opens available quests | - |
| `/lotn contracts` | `/contracts` | Opens repeatable contracts | - |
| `/lotn codex` | `/codex` | Opens the codex | - |
| `/lotn fishdex` | `/fishdex` | Opens the fish collection | - |
| `/lotn enchants` | `/enchants` | Opens custom enchantments | - |
| `/lotn alchemy` | `/alchemy` | Opens the alchemy workbench | `lotn.alchemy` |
| `/lotn fish` | `/fish` | Opens the Fish Exchange | - |
| `/lotn travel` | `/travel`, `/lotn fasttravel`, `/fasttravel` | Opens fast travel | - |
| `/lotn sellfish` | `/sellfish`, `/lotn sellall`, `/sellall` | Sells every LotN fish in the inventory | - |

## Administration Commands

The `/lotn` administration subcommands require both `lotn.use` and the listed additional permission.

| Command | Description | Additional permission |
|---|---|---|
| `/lotn reload` | Reloads LotN configuration | `lotn.admin` |
| `/lotn givexp <player> <amount>` | Gives overall character XP to an online player | `lotn.admin` |
| `/lotn givepoints <player> <amount>` | Gives perk points to an online player | `lotn.admin` |
| `/lotn unlockenchant <player> <enchant>` | Unlocks one custom enchantment for an online player | `lotn.admin` |
| `/lotna` | Displays administration help | `lotn.admin` |
| `/lotna help` | Displays administration help | `lotn.admin` |
| `/lotna reload` | Reloads all LotN configuration and content | `lotn.admin` |

## Character Administration

| Command | Aliases | Description | Additional permission |
|---|---|---|---|
| `/lotn character setname <player> <name>` | - | Changes an online character's name | `lotn.admin.character` |
| `/lotn character resetidentity <player>` | `/lotn character reset <player>` | Resets character identity while preserving progression | `lotn.admin.character` |
| `/lotn character info <player>` | - | Displays character identity and level information | `lotn.admin.character` |
| `/lotn character complete <player>` | - | Completes setup after a valid name and race exist | `lotn.admin.character` |

## Early Access Commands

| Command | Description | Permission |
|---|---|---|
| `/lotnea` | Opens the Shout administration menu; player-only | `lotn.admin` |
| `/lotnea help` | Displays Early Access command help | No permission check in EA13 |
| `/lotnea maxpoints` | Gives the sender 1,000 perk points | `lotn.admin` |
| `/lotnea maxupgrades` | Gives the sender 1,000 vitality upgrade points | `lotn.admin` |
| `/lotnea unlockall` | Unlocks every currently eligible perk rank | `lotn.admin` |
| `/lotnea unlockallforce` | Forces every configured perk to maximum rank | `lotn.admin` |
| `/lotnea resetnodes` | Clears perk ranks and legacy unlocked nodes | `lotn.admin` |
| `/lotnea maxlevel` | Sets every enabled skill to its configured maximum | `lotn.admin` |
| `/lotnea unlockallenchants` | Unlocks all custom enchantments | `lotn.admin` |
| `/lotnea menu` | Opens the skill category menu | `lotn.admin` |
| `/lotnea shouts` | Opens the normal Shout selection menu | `lotn.admin` |
| `/lotnea resetall` | Resets levels, skill XP, attributes, perks, enchantments, and progression points while preserving quests and collections | `lotn.admin` |
| `/lotnea chest [player]` | Gives a chest containing every enabled skill book | `lotn.admin.chest` |
| `/lotnea breakleg [player]` | Gives the specified player a broken leg; targets the sender when omitted | `lotn.admin.breakleg` |
| `/lotnea healleg [player]` | Heals the specified player's broken leg; targets the sender when omitted | `lotn.admin.healleg` |