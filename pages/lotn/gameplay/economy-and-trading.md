---
title: Economy and Trading
description: Vault integration, fish sales, rewards, and villager prices
updated: July 26, 2026
---
LotN integrates with Vault rather than providing its own economy account system.

## Required Plugins

- Vault
- A Vault-compatible economy provider

Without both, LotN continues running, but balances, coin rewards, fish selling, deposits, and withdrawals are unavailable.

## Currency

The built-in display symbol is `◈`, and the economy service describes the currency as coins.

## Sources and Uses

- Fish can be sold with `/sellfish`.
- Quests can award coins.
- The scoreboard and placeholders can display the Vault balance.
- Fishing skill, perks, Angler reputation, and race bonuses can modify sale prices.

## Villager Trading

Villager trading is enabled by default. LotN applies a price multiplier of **1.4×** to supported villager trades. Imperial characters receive better buying prices.