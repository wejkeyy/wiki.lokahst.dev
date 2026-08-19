---
title: Commands and Permissions
description: Commands and permission nodes
updated: August 1, 2026
---


## Commands

| Command | Purpose | Permission | Console |
|---|---|---|---|
| /lotn | Opens the player GUI | lotn.use | Player only |
| /lotnea | Opens Extended Administration | lotn.admin | Player only |

Both commands only open GUIs. They do not have subcommands or tab completion. Extra arguments are ignored by `/lotn`; `/lotnea` shows a warning and then opens normally.

## Permissions

| Permission | Purpose | Default |
|---|---|---|
| `lotn.admin` | Allows access to Extended Administration | op |
| `lotn.use` | Basic LotN commands access | True |
| `lotn.progress.skills` | Allows use-based skill progression | True |
| `lotn.progress.quests` | Allows quest progress and rewards | True |
| `lotn.progress.discovery` | Allows discovery progress and rewards | True |
| `lotn.bypass.survival` | Bypasses LotN survival penalties | False |
| `lotn.alchemy` | Allows use of the custom alchemy workbench | True |
| `lotn.admin.character` | Allows character identity administration | op |
| `lotn.admin.breakleg` | Allows broken-leg administration in the /lotnea GUI | op |
| `lotn.admin.healleg` | Allows healing administration in the /lotnea GUI | op |
| `lotn.admin.skills` | Allows automatic skill administration | op |
| `lotn.admin.enchants` | Allows enchantment administration in the /lotnea GUI | op |

`lotn.admin` includes the listed admin permissions and `lotn.use`. The smaller `lotn.admin.*` permissions are registered, but this build does not check them in Java. Access to `/lotnea` is controlled by `lotn.admin`.
