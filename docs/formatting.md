---
sidebar_position: 3
---

# Reference Formatting

Scriptura supports flexible Bible reference formatting to make verse lookup easy and forgiving.

---

## Supported Formats

You can reference verses in several common ways:

- Book Chapter:Verse  
  - `John 3:16`
- Book Chapter  
  - `Psalm 23`
- Verse ranges  
  - `Romans 8:1-11`
- Multiple verses  
  - `Matthew 5:3,5,7`
- Books with numbers  
  - `1 Corinthians 13`
  - `2 Timothy 3:16`

Dashes and en-dashes are both accepted.

---

## Book Name Variations

Scriptura recognizes:
- Full book names (`Genesis`)
- Common abbreviations (`Gen`)
- Numbered books (`1 John`, `First John`)

If a reference is ambiguous or invalid, Scriptura will let you know.

---

## Error Handling

If Scriptura cannot parse a reference:
- You’ll receive a clear error message
- The command will not silently fail

This helps ensure accuracy when sharing scripture.
