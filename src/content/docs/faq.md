---
title: FAQ & troubleshooting
description: Answers to common questions and fixes for common problems.
---

## Troubleshooting

### The commands don't show up

Make sure Scriptura is added to the server, or to your account through **Add to My Apps** (see [Getting started](/getting-started/)). Some servers disable user apps or restrict bot commands to certain channels.

### "No results found"

Check the spelling of the book (see [book names and abbreviations](/references/#book-names-and-abbreviations)) and make sure the chapter and verse exist. You can also try ESV, which is the most flexible with references.

### A range like `John 3:16-4:2` doesn't work

Ranges across chapters only work in ESV. In other translations, request each chapter separately.

### Changing footnotes or headings did nothing

Those settings only apply to ESV. See [which settings apply to which translations](/preferences/#which-settings-apply-to-which-translations).

### Changing line by line did nothing

That setting only applies to NKJV, KJV, NASB, NLT and ASV. (Verse numbers work in every translation.)

### The ◀️ / ▶️ buttons stopped working

They expire after 2 minutes and only respond to the person who ran the search. Run the search again.

### The preferences buttons stopped working

The panel expires after 5 minutes without a click. Run `/preferences` again.

### The passage is cut off

Discord limits how long an embed can be. Request a smaller range.

### The daily verse didn't change at my midnight

`/verse daily` changes at midnight UTC. See [Daily verse](/daily-verse/).

## Audio

### `/audio` doesn't show up

Audio only works in servers where Scriptura was added with **Add to Server**. It doesn't work in DMs or through **Add to My Apps**.

### Scriptura won't join my voice channel

Make sure you're in a regular voice channel (not a stage), and that Scriptura has **Connect** and **Speak** there.

### "Already playing elsewhere"

Scriptura can only be in one voice channel per server. Join that channel, or have someone there stop playback.

### Can I listen in KJV or another translation?

Not yet. Audio is ESV only.

### The Pause/Stop buttons say I need to join the voice channel

Only people in the same voice channel as Scriptura can control playback.

### Scriptura left the voice channel

It leaves when the passage ends or when everyone else has left.

## Daily verse posts

### I can't see `/daily-channel`

It needs the **Manage Server** permission by default. Ask a server admin, or have the owner allow it under **Server Settings → Integrations**.

### The daily verse posted at the wrong time

Check the time zone with `/daily-channel view`. Without one, times are in UTC.

### The daily verse didn't post

Make sure Scriptura can still view the channel, send messages and embed links there. If the channel was deleted, set it up again.

### Why is the server's daily verse different from `/verse daily`?

Server posts use the server's local date. `/verse daily` changes at midnight UTC. Near midnight UTC they can differ.

### Can I post in more than one channel?

Not yet. It's one daily channel per server.

## Questions

### Can I get NIV, CSB or another translation?

Only the [six listed translations](/translations/) are available right now. You can request others on [GitHub Issues](https://github.com/prinketaru/scriptura/issues).

### Does "Reset display settings" remove my translation?

No. It only resets your display settings. Change your translation with the dropdown in `/preferences`.

### Can other people see my preferences?

No. The `/preferences` panel is only visible to you.

### Is it free?

Yes. Scriptura is completely free and [open source](https://github.com/prinketaru/scriptura).

### How do I report a bug or suggest a feature?

Open an issue at [github.com/prinketaru/scriptura/issues](https://github.com/prinketaru/scriptura/issues).
