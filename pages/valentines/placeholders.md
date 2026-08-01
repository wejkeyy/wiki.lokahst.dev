---
title: Placeholders
updated: July 19, 2026
---

PlaceholderAPI is optional. These values become available when both plugins are installed and the Valentines expansion registers successfully.

## Player and relationship values

| Placeholder | Description |
|-------------|-------------|
| `%valentines_name%` | Player name |
| `%valentines_mood%` | Formatted player mood |
| `%valentines_mood_raw%` | Raw mood value |
| `%valentines_hugs%` or `%valentines_hugs_received%` | Hugs received |
| `%valentines_hugs_given%` | Hugs given |
| `%valentines_kisses%` or `%valentines_kisses_received%` | Kisses received |
| `%valentines_kisses_given%` | Kisses given |
| `%valentines_likes%` or `%valentines_likes_received%` | Likes received |
| `%valentines_likes_given%` | Likes given |
| `%valentines_total_given%` | Total interactions given |
| `%valentines_total_received%` | Total interactions received |
| `%valentines_total_score%` | Total social score |
| `%valentines_is_married%` | Returns `true` or `false` |
| `%valentines_partner%` | Partner's name |
| `%valentines_days_married%` | Days married |
| `%valentines_relationship_status%` | Current relationship status |
| `%valentines_is_engaged%` | Returns `true` or `false` |
| `%valentines_engaged_with%` | Name of the engaged player |
| `%valentines_engagement_days%` | Days since engagement |
| `%valentines_engagement_hours%` | Hours since engagement |

## Achievement values

| Placeholder | Description |
|-------------|-------------|
| `%valentines_achievements_unlocked%` | Number of unlocked achievements |
| `%valentines_achievements_total%` | Total available achievements |
| `%valentines_achievements_remaining%` | Remaining achievements |
| `%valentines_achievements_progress%` | Completion percentage |
| `%valentines_has_achievement_<key>%` | Return whether the named achievement is unlocked |

For example, `%valentines_has_achievement_first_hug%` returns `true` or `false`.

## Leaderboard values

Replace `<position>` with a number from 1 through 100.

| Placeholder | Description |
|-------------|-------------|
| `%valentines_top_name_<position>%` | Player at the requested position |
| `%valentines_top_score_<position>%` | Total score at the requested position |
| `%valentines_top_hugs_<position>%` | Hugs received at the requested position |
| `%valentines_top_kisses_<position>%` | Kisses received at the requested position |
| `%valentines_top_likes_<position>%` | Likes received at the requested position |
