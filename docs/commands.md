---
sidebar_position: 2
---

# Commands

Scriptura currently provides these core slash commands.

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

## `/preferences`

Manage your personal display preferences for verse output.

### Subcommands

#### `/preferences view`
View your current preferences.

#### `/preferences reset`
Reset your preferences to defaults.

#### `/preferences set`
Set one or more preference options.

### Options

Defaults are shown in parentheses.

- `footnotes` (default: off)
- `headings` (default: auto)
- `verse_nums` (default: on)
- `line_by_line` (default: auto)
- `translation` (default: esv)

### Examples
- `/preferences view`
- `/preferences reset`
- `/preferences set footnotes on`
- `/preferences set headings off`
- `/preferences set verse_nums off`
- `/preferences set line_by_line on`
- `/preferences set translation nkjv`

---

## Command Notes

- Commands are case-insensitive
- Extra whitespace is ignored
- Translation abbreviations must be valid

If a verse or translation is not recognized, Scriptura will return a helpful error message.
