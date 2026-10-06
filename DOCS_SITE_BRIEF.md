# Scriptura — Documentation Site Brief

> **Who this is for:** an AI (or person) building the documentation website for Scriptura at **https://scriptura.prinke.dev**.
> This file is the complete source of truth. Everything in it reflects how the bot actually behaves.
>
> **Focus:** the site is mainly for **people using the public, hosted Scriptura bot** in Discord. Self-hosting and development material goes in a **single separate tab** (§10). Don't feature it on the landing page or in the main navigation flow.

---

## 1. Product summary

| Field | Value |
|---|---|
| Name | **Scriptura** |
| One-liner | A Discord bot for looking up and searching Bible scripture with slash commands. |
| Website / docs | https://scriptura.prinke.dev |
| Add to Discord | https://discord.com/oauth2/authorize?client_id=1291760421115527251 |
| Source code | https://github.com/prinketaru/scriptura |
| Issues / feedback | https://github.com/prinketaru/scriptura/issues |
| Maintainer | prinke (GitHub: `prinketaru`) |
| License | GNU GPL-3.0 (open source) |
| Brand / embed color | `#2F5233` (dark forest green) |

**Key features:**
- Look up verses by reference (`John 3:16`, `Romans 8:1-11`, `Psalm 23`) **or** search by phrase (`love is patient`).
- 6 English translations, with ESV as the default.
- Save your preferred translation and how you like verses displayed.
- A daily verse that everyone sees on the same day. The bot's Discord status shows today's reference.
- Works in servers **and** anywhere else in Discord: add it to a server, or add it to your own account and use it in DMs, group DMs and servers where it isn't installed.
- Privacy-focused: the only thing it stores is your own preferences.
- Free and open source.

---

## 2. Site structure

**Main navigation (user-facing, the primary focus):**
```
/                    Home: hero, "Add to Discord" button, feature highlights, mock verse embed
/getting-started     Adding the bot (server vs. personal), running your first command
/commands            Overview of all commands, with one section per command
/translations        Supported translations
/references          How to type references and phrase searches, plus accepted book abbreviations
/daily-verse         How the daily verse works
/preferences         Customizing translation and display (can live under /commands)
/faq                 FAQ & troubleshooting
/privacy             Privacy policy
```

**Separate tab, secondary:**
```
/self-hosting        One page (or a small sub-section) covering running your own instance and contributing
```

The footer should include: GitHub link, GPL-3.0 license, Add to Discord link, and scripture attribution (§5).

---

## 3. Getting started

### Adding Scriptura
Open the invite link: `https://discord.com/oauth2/authorize?client_id=1291760421115527251`. Discord offers two options:

- **Add to Server.** The bot joins a server and everyone there can use its commands. This requires the Manage Server permission.
- **Add to My Apps** (user install). The commands follow *you* around Discord, so you can use them in DMs, group DMs and servers where Scriptura isn't installed. Servers can restrict user apps, so it may not work everywhere.

All commands work in servers, DMs with the bot, and private/group DMs.

### First command
Type `/verse search` and enter `John 3:16` in the `query` field. You'll get an embed with the verse in ESV. Next steps:
- Try a phrase: `/verse search query:love is patient`
- Pick a translation: `/verse search query:Psalm 23 translation:KJV`
- Save your favorite translation: `/preferences set translation:NKJV`

Scriptura only responds to slash commands. It doesn't read the messages in your channels.

---

## 4. Commands

There are three commands: `/verse`, `/preferences`, `/ping`.

### Summary

| Command | What it does | Who sees the reply |
|---|---|---|
| `/verse search query:<text> [translation]` | Get a passage or search for a phrase | Everyone in the channel |
| `/verse daily` | Today's daily verse | Everyone in the channel |
| `/preferences set [options…]` | Save your translation and display settings | Only you |
| `/preferences view` | See your current settings | Only you |
| `/preferences reset` | Reset display settings to defaults | Only you |
| `/ping` | Check the bot's response time | Only you |

Error messages are always visible only to you.

### 4.1 `/verse search`

Get a Bible passage by reference, or search the Bible for a word or phrase.

| Option | Required | Description |
|---|---|---|
| `query` | Yes | A Bible reference (e.g. `John 3:16`) or a phrase (e.g. `in love`) |
| `translation` | No | Pick from ESV, NKJV, KJV, NASB, NLT, ASV |

**Which translation is used:**
1. The `translation` you picked in the command, if any
2. Otherwise, your saved preferred translation (`/preferences set translation:`)
3. Otherwise, **ESV**

**References vs. phrases:** if your query looks like a reference, you get that passage. If it doesn't, Scriptura searches for it as a phrase. See §6 for reference formats.

**Passage result:** a green embed.
- Title: the reference and translation, e.g. **John 3:16 (ESV)**. Clicking the title opens the passage on BibleGateway in the same translation.
- Body: the passage text. Very long passages, such as some full chapters, are cut off at Discord's 4,096-character limit.

**Search result:** an embed titled `Search results: "<your phrase>"` that shows the translation.
- Up to **10 matching verses per page**, each showing its reference and text.
- With more results, **Previous** and **Next** buttons appear. The footer reads like `Page 1/5 · Showing 1-10 of 47 results`.
- Only the person who ran the command can use the buttons. They stop working after **2 minutes**.

**Examples:**
```
/verse search query:John 3:16
/verse search query:Psalm 23 translation:KJV
/verse search query:Romans 8:1-11 translation:NLT
/verse search query:1 Cor 13:4-7
/verse search query:love is patient
/verse search query:armor of God translation:NASB
```

**Possible errors** (shown only to you, with your query and translation in small text underneath):
- `No results found.`: the reference doesn't exist in that translation, or the phrase had no matches.
- `There was an error while executing this command!`: the scripture service didn't respond. Try again shortly.
- `Verse found, but could not parse passage content.`: try a different translation.

Example error:
```
No results found.
Query: Hezekiah 3:1 • Translation: ESV
```

### 4.2 `/verse daily`

Shows today's daily verse. It has no options. It uses your saved translation (ESV if you haven't set one) and your display settings, and the reply looks like a normal passage embed. See §7.

### 4.3 `/preferences`

Save how Scriptura shows verses to you. Your settings follow you to every server and DM. All replies are visible only to you.

#### `/preferences set`
Every option is optional, but you have to choose at least one.

| Option | Values | What it does |
|---|---|---|
| `translation` | ESV, NKJV, KJV, NASB, NLT, ASV | Your default translation |
| `footnotes` | True / False | Show footnotes and study notes |
| `headings` | Auto / On / Off | Show section headings |
| `verse_numbers` | True / False | Show verse numbers |
| `line_by_line` | Auto / On / Off | Put each verse on its own line, useful for poetry and Psalms |

After saving, Scriptura shows your full settings:
```
Your preferences have been updated:
Translation: KJV
Footnotes: Off
Headings: Auto
Verse numbers: On
Line by line: Auto
```

#### `/preferences view`
Shows your current translation and display settings.

#### `/preferences reset`
Resets your **display** settings (footnotes, headings, verse numbers, line by line) to the defaults. **Your saved translation is kept.** To change it, use `/preferences set translation:`.

#### Defaults
| Setting | Default |
|---|---|
| Translation | ESV |
| Footnotes | Off |
| Headings | Auto |
| Verse numbers | On |
| Line by line | Auto |

#### Which settings apply to which translations
Each translation comes from a different scripture source, and not every source supports every setting:

| Setting | ESV | NKJV, KJV, NASB, NLT, ASV |
|---|---|---|
| Footnotes | ✅ | — |
| Headings | ✅ (Auto = off) | — |
| Verse numbers | Always shown | ✅ |
| Line by line | Uses ESV's own formatting | ✅ (Auto = on for Psalms only) |

Present this as a small table on the preferences page, using wording like "Some settings only apply to certain translations."

### 4.4 `/ping`

Replies with `Pong!` and the bot's current latency in milliseconds. Use it to check that the bot is online and responding.

---

## 5. Translations

| Code | Name |
|---|---|
| **ESV** (default) | English Standard Version |
| NKJV | New King James Version |
| KJV | King James (Authorized) Version |
| NASB | New American Standard Bible |
| NLT | New Living Translation |
| ASV | American Standard Version |

They appear in Discord's dropdown in this order: ESV, NKJV, KJV, NASB, NLT, ASV.

You can choose a translation per command with the `translation` option, or save a default with `/preferences set translation:`.

**Attribution (show on this page and in the footer):**
- ESV text: **ESV® Bible (The Holy Bible, English Standard Version®), © Crossway**, via the ESV API (api.esv.org).
- All other translations are provided through **Bible Brain by Faith Comes By Hearing** (faithcomesbyhearing.com/bible-brain).

---

## 6. Writing references

**Supported formats:**
| Format | Example |
|---|---|
| Whole chapter | `Psalm 23` |
| Single verse | `John 3:16` |
| Verse range | `Romans 8:1-11` |
| Abbreviated book | `1 Cor 13:4-7`, `Gen 1:1`, `Ps 46:1` |

**Tips:**
- Capitalization and periods don't matter: `jn 3:16`, `Gen. 1:1`.
- Use a normal hyphen `-` for ranges.
- **Ranges across chapters** (e.g. `John 3:16-4:2`) work in **ESV only**. In other translations, request each chapter separately.
- If Scriptura doesn't recognize the query as a reference, it searches for it as a phrase instead.
- ESV is the most flexible about how references are written.
- All 66 books of the Protestant Bible are supported.

**Accepted book names and abbreviations** (all translations):

| Book | You can type |
|---|---|
| Genesis | genesis, gen |
| Exodus | exodus, exod, exo, ex |
| Leviticus | leviticus, lev |
| Numbers | numbers, number, num, nu, nm |
| Deuteronomy | deuteronomy, deut, deu, dt |
| Joshua | joshua, josh, jos |
| Judges | judges, judg, jdg, jg |
| Ruth | ruth, rut |
| 1 Samuel | 1 samuel, 1samuel, first samuel, i samuel, 1 sam, 1sam, 1 sa |
| 2 Samuel | 2 samuel, 2samuel, second samuel, ii samuel, 2 sam, 2sam, 2 sa |
| 1 Kings | 1 kings, 1kings, first kings, i kings, 1 kgs, 1kgs, 1 ki |
| 2 Kings | 2 kings, 2kings, second kings, ii kings, 2 kgs, 2kgs, 2 ki |
| 1 Chronicles | 1 chronicles, 1chronicles, first chronicles, i chronicles, 1 chron, 1chron, 1 chr, 1chr |
| 2 Chronicles | 2 chronicles, 2chronicles, second chronicles, ii chronicles, 2 chron, 2chron, 2 chr, 2chr |
| Ezra | ezra, ezr |
| Nehemiah | nehemiah, neh |
| Esther | esther, est |
| Job | job |
| Psalms | psalms, psalm, ps, psa |
| Proverbs | proverbs, prov, pro, prv |
| Ecclesiastes | ecclesiastes, eccles, ecc |
| Song of Songs | song of songs, song of solomon, song, songs, sng, sos |
| Isaiah | isaiah, isa |
| Jeremiah | jeremiah, jer |
| Lamentations | lamentations, lam |
| Ezekiel | ezekiel, ezek, ezk |
| Daniel | daniel, dan |
| Hosea | hosea, hos |
| Joel | joel, jol |
| Amos | amos, amo |
| Obadiah | obadiah, obad, oba |
| Jonah | jonah, jon |
| Micah | micah, mic |
| Nahum | nahum, nah, nam |
| Habakkuk | habakkuk, hab |
| Zephaniah | zephaniah, zeph, zep |
| Haggai | haggai, hag |
| Zechariah | zechariah, zech, zec |
| Malachi | malachi, mal |
| Matthew | matthew, matt, mat, mt |
| Mark | mark, mrk, mk |
| Luke | luke, luk, lk |
| John | john, jhn, jn |
| Acts | acts, act |
| Romans | romans, rom |
| 1 Corinthians | 1 corinthians, 1corinthians, first corinthians, i corinthians, 1 cor, 1cor, 1 co |
| 2 Corinthians | 2 corinthians, 2corinthians, second corinthians, ii corinthians, 2 cor, 2cor, 2 co |
| Galatians | galatians, gal |
| Ephesians | ephesians, eph |
| Philippians | philippians, phil, php |
| Colossians | colossians, col |
| 1 Thessalonians | 1 thessalonians, 1thessalonians, first thessalonians, i thessalonians, 1 thess, 1thess, 1 th |
| 2 Thessalonians | 2 thessalonians, 2thessalonians, second thessalonians, ii thessalonians, 2 thess, 2thess, 2 th |
| 1 Timothy | 1 timothy, 1timothy, first timothy, i timothy, 1 tim, 1tim, 1 ti |
| 2 Timothy | 2 timothy, 2timothy, second timothy, ii timothy, 2 tim, 2tim, 2 ti |
| Titus | titus, tit |
| Philemon | philemon, phlm, phm |
| Hebrews | hebrews, heb |
| James | james, jas, jam |
| 1 Peter | 1 peter, 1peter, first peter, i peter, 1 pet, 1pet, 1 pe |
| 2 Peter | 2 peter, 2peter, second peter, ii peter, 2 pet, 2pet, 2 pe |
| 1 John | 1 john, 1john, first john, i john, 1 jn, 1jn |
| 2 John | 2 john, 2john, second john, ii john, 2 jn, 2jn |
| 3 John | 3 john, 3john, third john, iii john, 3 jn, 3jn |
| Jude | jude, jud |
| Revelation | revelation, revelations, rev |

Consider making this table collapsible or searchable on the site.

**Phrase search tips:** use distinctive words (`armor of God` rather than `God`). Results come from the selected translation, so wording differs between translations. If a phrase finds nothing, try another translation or fewer words.

---

## 7. Daily verse

- Use `/verse daily` to get today's verse.
- Everyone gets the same **reference** on the same day, but the **text** is in each person's own saved translation, with their display settings.
- The verse changes at **midnight UTC**, not at your local midnight.
- The verses come from a hand-picked list of 31 well-known passages that the bot cycles through, such as Genesis 1:1, Psalm 23:1, John 3:16, Romans 8:28, Proverbs 3:5, Isaiah 41:10, Philippians 4:13 and Jeremiah 29:11.
- The bot's Discord status always shows today's verse as **"Listening to <reference>"**. Check its profile to see the daily verse at a glance.

---

## 8. Privacy policy content

**What Scriptura stores** (only after you use `/preferences set`):
- Your Discord user ID
- Your preferred translation
- Your display settings (footnotes, headings, verse numbers, line by line)
- When you last changed them

**What Scriptura does not store:**
- Messages: the bot can't read message content
- Your searches, lookups or command history
- Server information
- Analytics, tracking or advertising data

**Third parties:** your search text or reference is sent to the scripture providers (ESV API by Crossway; Bible Brain by Faith Comes By Hearing) to get the verse text. Nothing that identifies you is sent with it.

**Removing your data:** `/preferences reset` resets display settings. To have your stored preferences removed completely, open an issue at https://github.com/prinketaru/scriptura/issues or contact the maintainer.

**Open source:** anyone can review exactly what the bot does at https://github.com/prinketaru/scriptura.

---

## 9. FAQ & troubleshooting

- **The commands don't show up.** Make sure Scriptura is added to the server, or to your account through "Add to My Apps". Some servers disable user apps or restrict bot commands to certain channels.
- **"No results found."** Check the spelling of the book (see §6), make sure the chapter and verse exist, or try ESV, which is the most flexible with references.
- **A range like `John 3:16-4:2` doesn't work.** Ranges across chapters only work in ESV.
- **Changing footnotes or headings did nothing.** Those settings only apply to ESV.
- **Changing verse numbers or line-by-line did nothing.** Those settings only apply to NKJV, KJV, NASB, NLT and ASV.
- **The Next/Previous buttons stopped working.** They expire after 2 minutes and only respond to the person who ran the search. Run the search again.
- **The passage is cut off.** Discord limits embed length. Request a smaller range.
- **The daily verse didn't change at my midnight.** It changes at midnight UTC.
- **Can I get NIV, CSB or another translation?** Only the six listed translations are available right now. You can request others on GitHub Issues.
- **Does `/preferences reset` remove my translation?** No. It only resets display settings.
- **Can other people see my preferences?** No. Preference commands reply only to you.
- **Is it free?** Yes. It's completely free and open source.
- **How do I report a bug or suggest a feature?** Open an issue at https://github.com/prinketaru/scriptura/issues.

---

## 10. Self-Hosting & Development (one separate tab, secondary)

Keep this compact and clearly marked as optional. Most users never need it.

### Run your own instance

**Requirements**
- Node.js 18 or newer (the current LTS is recommended)
- A Discord application and bot token: https://discord.com/developers/applications
- An ESV API key: https://api.esv.org/ (required)
- A Bible Brain API key: https://www.faithcomesbyhearing.com/bible-brain/developer-documentation (needed for every translation except ESV)
- A MongoDB database. Include the database name in the connection string.

**Environment variables (`.env`)**
| Variable | Required | Purpose |
|---|---|---|
| `TOKEN` | Yes | Discord bot token |
| `CLIENT_ID` | Yes | Discord application ID, used to register commands |
| `ESV_API_KEY` | Yes | ESV API key |
| `BIBLE_BRAIN_KEY` | Yes, for non-ESV translations | Bible Brain API key |
| `MONGO_URI` | Yes | MongoDB connection string |
| `GUILD_ID` | No | Clears leftover server-only commands in this server after registering global commands |

```env
TOKEN=your_bot_token
CLIENT_ID=your_client_id
ESV_API_KEY=your_esv_api_key
BIBLE_BRAIN_KEY=your_bible_brain_key
MONGO_URI=mongodb+srv://user:pass@host/scriptura
```

**Setup**
```bash
git clone https://github.com/prinketaru/scriptura.git
cd scriptura
npm install
cp .env.example .env    # fill in your values
npm run deploy          # register slash commands with Discord
npm start               # or: npm run dev for auto-reload
```

**Scripts:** `npm start` (run), `npm run dev` (run with auto-reload), `npm run deploy` (register commands), `npm run lint` / `npm run lint:fix`.

**Hosting:** Scriptura runs as a background worker and doesn't need a web port. The included `Procfile` (`worker: node deploy-commands.js && npm start`) works on Heroku-style hosts and Dokku. The repo also includes a GitHub Actions workflow that deploys to Dokku on every push to `master`. It needs the secrets `DOKKU_HOST`, `DOKKU_APP` and `SSH_PRIVATE_KEY`.

### Contributing

- Fork → create a feature branch → make changes → `npm run lint` → open a pull request with a clear description.
- Code style: tabs, single quotes, semicolons, JSDoc comments, ESLint.
- Test changes in Discord, including multiple translations and pagination.
- Contributions are licensed under GPL-3.0.

**Project layout**
```
index.js               Bot entry point (loads commands, handles interactions, daily status)
deploy-commands.js     Registers slash commands with Discord
daily_verses.json      Daily verse list
commands/verses/       /verse
commands/utility/      /preferences, /ping
helpers/               Scripture API clients, translations, preferences storage, embeds
```

**Adding a command:** create `commands/<category>/<name>.js` that exports `data` (a `SlashCommandBuilder`) and `execute(interaction)`, then run `npm run deploy`. Commands load automatically.

**Adding a translation:** in `helpers/translations.js`, add the Bible Brain text fileset IDs to `BIBLE_BRAIN_BIBLES` and add a matching entry to `translationChoices`, then run `npm run deploy`. For reference, the existing fileset IDs are:

| Code | Fileset IDs |
|---|---|
| NKJV | OT `ENGNKJO_ET`, NT `ENGNKJN_ET` |
| KJV | OT `ENGKJVO_ET`, NT `ENGKJVN_ET` |
| NASB | OT `ENGNASO_ET`, NT `ENGNASN_ET` |
| NLT | OT `ENGNLTO_ET`, NT `ENGNLTN_ET` |
| ASV | complete `ENGASV` |

---

## 11. Tone & design notes

- Primary audience: everyday Discord users, such as church communities, Bible study groups and Christian servers. Many aren't technical, so keep the user pages short and friendly, and lead with examples.
- Tone: warm, clear, welcoming. Reverent but not preachy.
- Make the "Add to Discord" button prominent on the home page and in the header.
- Show Discord-style mock embeds (dark background, green `#2F5233` left border, linked title like **John 3:16 (ESV)**) on the home page and the commands page.
- Write commands the way Discord displays them: `/verse search query:John 3:16 translation:KJV`.
- Footer: GitHub link, GPL-3.0, Add to Discord link, and scripture attribution.
