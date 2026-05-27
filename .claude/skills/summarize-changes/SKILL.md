<!-- Purpose: Skill that summarizes the current git diff and calls out risks plus a suggested commit message. -->
---
name: summarize-changes
description: Summarizes uncommitted changes and flags risks. Use when the user asks what changed, wants a commit message, or asks to review their diff.
---

## Current changes

!`git diff HEAD`

## Instructions

Summarize the changes in two or three bullet points, then list any risks: broken nav/sitemap entries, duplicated contact info, missing tests, hardcoded secrets, or marketing copy that overpromises.

Suggest a conventional commit subject line (≤72 chars).
