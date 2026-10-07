---
title: Privacy policy
description: What Scriptura stores, what it doesn't, and how to remove your data.
---

Scriptura is built to store as little as possible. The only things it keeps are the preferences you choose to save and, for servers that set one up, the daily-post schedule.

## What Scriptura stores

Only after you change a setting in `/preferences`, Scriptura stores:

- Your Discord user ID
- Your preferred translation
- Your display settings (footnotes, headings, verse numbers and line by line)
- When you last changed them

If you never change your preferences, nothing about you is stored.

### What Scriptura stores for servers

Only when a server admin uses `/daily-channel set`, Scriptura stores:

- The server ID
- The channel ID for daily posts
- The posting time, time zone and translation
- The next scheduled post time and the last time it posted
- The user ID of the admin who last changed the schedule

This is deleted when an admin runs `/daily-channel disable`, or automatically if the channel is deleted.

## What Scriptura doesn't store

- **Messages.** The bot can't read message content.
- **Your searches, lookups or command history.**
- **Server information**, except the daily-post schedule above for servers that set one up.
- **Voice.** Scriptura only *plays* audio in voice channels. It joins **self-deafened** and never listens to, records or stores anything said in voice.
- **Analytics, tracking or advertising data.**

## Third parties

To get verse text, your search text or reference is sent to the scripture providers:

- [ESV API](https://api.esv.org) by Crossway
- [Bible Brain](https://www.faithcomesbyhearing.com/bible-brain) by Faith Comes By Hearing

When you use `/audio`, the passage reference is sent to the ESV API, and the audio file is streamed from Crossway's audio server (audio.esv.org).

Nothing that identifies you is sent with any of these.

## Removing your data

- In `/preferences`, **Reset display settings** resets your display settings.
- Server admins can remove their server's schedule with `/daily-channel disable`.
- To have your stored preferences removed completely, [open an issue on GitHub](https://github.com/prinketaru/scriptura/issues) or email the maintainer at [prince@prinke.dev](mailto:prince@prinke.dev).

## Open source

Anyone can review exactly what the bot does at [github.com/prinketaru/scriptura](https://github.com/prinketaru/scriptura).
