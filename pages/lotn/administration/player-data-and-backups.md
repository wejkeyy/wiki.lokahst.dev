---
title: Player Data and Backups
description: Player files, saves, backups, and migration
updated: August 1, 2026
---


## Primary Profiles

Primary player profiles are stored as:

```text
plugins/LotN/players/<uuid>.yml
```

LotN reads character names from these files during startup so duplicate names can be blocked before a profile is loaded.

## Secondary Recovery Copies

Secondary copies are stored as:

```text
plugins/LotN/playerdata/<uuid>.yml
```

Online profiles are copied every `10` minutes. A full backup of stored profiles runs every `180` minutes.

## Normal Saves

- Dirty profile flush: every `100` ticks
- General autosave task: every `6000` ticks
- Important changes are saved immediately, as well as when a player unloads.
- On shutdown, the save thread gets up to 10 seconds to finish queued saves.

## Migration Archives

Old profiles may be copied to `players/backups`. Skill data from before automatic progression can be moved to `players/skill-archives` before it is reset or converted.

## Cleanup

Automatic cleanup is disabled by default. When enabled, it runs once a day and removes secondary backups older than `12` months, based on the saved activity date.

Back up the entire LotN folder before changing schema versions or making large config edits.
