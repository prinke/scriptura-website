---
sidebar_position: 2
---

# Commands

Scriptura currently provides two core slash commands.

---

## `/verse`

Retrieve a specific Bible verse or passage.

### Syntax
`/verse <reference> <translation?>`

- `reference` (required): The Bible verse or passage
- `translation` (optional): Bible translation abbreviation (default: ESV)

### Examples
- `/verse Genesis 1:1`
- `/verse Psalm 23`
- `/verse Romans 8:1 NIV`
- `/verse 1 Corinthians 13:4–7 NKJV`

### Output
Scriptura returns:
- The verse text
- The reference
- The translation used

---

## `/daily-verse`

Get the daily verse provided by Scriptura.

### Syntax
`/daily-verse <translation?>`

- `translation` (optional): Bible translation abbreviation (default: ESV)

### Examples
- `/daily-verse`
- `/daily-verse KJV`

The daily verse is the same for all users on a given day, but the translation may vary.

---

## Command Notes

- Commands are case-insensitive
- Extra whitespace is ignored
- Translation abbreviations must be valid

If a verse or translation is not recognized, Scriptura will return a helpful error message.
