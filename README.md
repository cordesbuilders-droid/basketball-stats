# Game Stats

A phone-first basketball stat tracker for live games, season totals, shot charts, and highlight links. It is a single-page web app and works offline after the first visit.

**Live app:** https://cordesbuilders-droid.github.io/basketball-stats/

## Install on your phone

### iPhone
1. Open the live app link in **Safari** (not Chrome or an in-app browser).
2. Tap the Share button.
3. Tap **Add to Home Screen**, then **Add**.

### Android
1. Open the live app link in **Chrome**.
2. Tap the three-dot menu.
3. Tap **Add to Home screen** or **Install app**.

The icon will sit on the Home Screen and open like an app. A signal is only needed the first time (and later, to pick up updates). After that, you can keep entering stats offline; changes sync when you have signal again.

## What it tracks

- Live box scores for Juni and Ezra (you can add or remove players and edit jersey numbers)
- Plus and minus buttons for PTS, REB, AST, STL, BLK, TO, MIN, and shooting (FGM/FGA, 3PM/3PA, FTM/FTA)
- +2, +3, +1 and Miss shortcuts, with live FG%, 3P%, and FT%
- A half-court shot chart: tap a spot, then Make or Miss. The arc is a high-school 3-point line, and shots update the box score. Undo is available, plus a this-player or all-players filter
- Save / End Game stores the date, opponent, per-player stats, and shots
- A Games tab to reopen, edit, or delete a saved game
- Season totals, per-game averages, shooting percentages, and a combined season shot chart, with a season selector (default 2026-27)
- A highlights list of video links (title, player, date). YouTube, Google Drive, and Hudl links can be saved and opened later

## Sync and the team code

Saved games, the roster (names and jersey numbers), seasons, and highlight links are stored online (Firebase) and show up on every phone and computer that opens the link, usually within a few seconds.

- **Anyone with the link can view** games, season stats, and highlights. No sign-in needed.
- **Saving, editing, deleting, adding players, highlight links, and Import need the team code.** Tap **🔒 Team code** at the top, type the code, and tap **Unlock editing**. You only do this once per device; the button then reads **✓ Editing on**.
- Without the code you can still keep score during a game, but **Save / End Game** asks for the code first.
- The first time a device unlocks editing, any games that were saved only on that device are uploaded. Games already online (same game id, or same date, opponent, players and stat lines) are skipped, so there are no duplicates.

The team code is not stored in this repository. Ask the team admin for it.

## Export / Import

1. Tap **Export JSON** to download every game, the roster, seasons, and highlight links. **Export CSV** downloads a spreadsheet of the game log.
2. **Import** (editors only) uploads games from a JSON export. Duplicates are skipped.

## Privacy

The page is public and anyone with the link can read the stats. Default players are first names only (Juni and Ezra).
