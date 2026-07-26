---
title: Skill Books
description: Random loot books that grant skill XP
updated: July 26, 2026
---
Skill books are special enchanted or written books found in generated loot. A character can read each configured title once.

## Books

| Book | Skill | Reward | Loot categories |
|---|---|---|---|
| Forging Techniques | Smithing | 70 to 140 XP | Village, Adventure, Valuable |
| The One-Handed Warrior | One Handed | 70 to 140 XP | Village, Adventure, Valuable |
| The Archer's Discipline | Archery | 70 to 140 XP | Village, Adventure, Valuable |
| Shield and Steel | Block | 70 to 140 XP | Village, Adventure, Valuable |
| The Weight of Iron | Heavy Armor | 70 to 140 XP | Village, Adventure, Valuable |
| Light on Your Feet | Light Armor | 70 to 140 XP | Village, Adventure, Valuable |

## Loot Chances

| Category | Chance per eligible chest | Loot-table patterns |
|---|---|---|
| Village | 25% | `chests/village/` |
| Adventure | 20% | `chests/simple_dungeon`<br>`chests/abandoned_mineshaft`<br>`chests/stronghold_`<br>`chests/pillager_outpost`<br>`chests/desert_pyramid`<br>`chests/jungle_temple`<br>`chests/igloo_chest`<br>`chests/underwater_ruin_`<br>`chests/shipwreck_` |
| Valuable | 30% | `chests/ruined_portal`<br>`chests/bastion_`<br>`chests/ancient_city`<br>`chests/woodland_mansion`<br>`chests/buried_treasure`<br>`chests/end_city_treasure`<br>`chests/trial_chambers/` |

The chance is checked when an eligible loot table generates. One enabled book is selected by its configured loot weight.

## Reading a Book

Right-click the book in either hand. The book is consumed after a successful read and grants a random amount of XP in its configured range. It cannot be read again by the same character, and it cannot increase an already mastered skill.

Administrators can create a test chest containing every enabled book with `/lotnea chest [player]`.