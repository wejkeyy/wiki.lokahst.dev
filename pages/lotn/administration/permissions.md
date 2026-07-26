---
title: Permissions
updated: July 19, 2026
---

| Permission | Default | Description |
|------------|---------|-------------|
| `lotn.use` | `true` | Allows access to basic LOTN commands |
| `lotn.alchemy` | `true` | Allows use of the custom alchemy workbench |
| `lotn.progress.skills` | `true` | Allows use-based skill progression |
| `lotn.progress.quests` | `true` | Allows quest progress and rewards |
| `lotn.progress.discovery` | `true` | Allows discovery progress and rewards |
| `lotn.combat.dodge` | `true` | Allows Agility dodge effects |
| `lotn.bypass.survival` | `op` | Bypasses LOTN survival penalties |
| `lotn.admin` | `op` | Allows configuration reloads and administration commands |
| `lotn.admin.character` | `op` | Allows character identity administration |
| `lotn.admin.character.bypass` | `op` | Bypasses the gameplay lock before character creation is completed |
| `lotn.admin.breakleg` | `op` | Allows use of `/lotnea breakleg [player]` |
| `lotn.admin.healleg` | `op` | Allows use of `/lotnea healleg [player]` |

## Administrative Permission Children

The `lotn.admin` permission automatically grants:

- `lotn.use`
- `lotn.admin.character`
- `lotn.admin.breakleg`
- `lotn.admin.healleg`

`lotn.admin.character.bypass` is not included as a child of `lotn.admin`.