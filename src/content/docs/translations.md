---
title: Translations
description: The six English Bible translations Scriptura supports.
---

Scriptura supports six English translations. **ESV** is the default.

| Code | Name |
| --- | --- |
| **ESV** (default) | English Standard Version |
| NKJV | New King James Version |
| KJV | King James (Authorized) Version |
| NASB | New American Standard Bible |
| NLT | New Living Translation |
| ASV | American Standard Version |

They appear in Discord's dropdown in this order.

## Choosing a translation

Pick one for a single lookup with the `translation` option:

```
/verse search query:Psalm 23 translation:KJV
```

Or save a favorite so you don't have to pick it every time:

```
/preferences set translation:NKJV
```

A translation you pick in the command always wins. Otherwise Scriptura uses your saved translation, or ESV if you haven't saved one.

Some display settings, like footnotes and verse numbers, only work with certain translations. See [Preferences](/preferences/#which-settings-apply-to-which-translations).

## Want another translation?

Only these six are available right now. You can request others on [GitHub Issues](https://github.com/prinketaru/scriptura/issues).

## Attribution

- ESV text: ESV® Bible (The Holy Bible, English Standard Version®), © Crossway, via the [ESV API](https://api.esv.org).
- All other translations are provided through [Bible Brain by Faith Comes By Hearing](https://www.faithcomesbyhearing.com/bible-brain).
