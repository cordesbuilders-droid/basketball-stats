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

The icon will sit on the Home Screen and open like an app. A signal is only needed the first time (and later, to pick up updates). After that, you can keep entering stats offline. Games are stored on that phone, not on this website.

## What it tracks

- Live box scores for Juni and Ezra (you can add or remove players and edit jersey numbers)
- Plus and minus buttons for PTS, REB, AST, STL, BLK, TO, MIN, and shooting (FGM/FGA, 3PM/3PA, FTM/FTA)
- +2, +3, +1 and Miss shortcuts, with live FG%, 3P%, and FT%
- A half-court shot chart: tap a spot, then Make or Miss. The arc is a high-school 3-point line, and shots update the box score. Undo is available, plus a this-player or all-players filter
- Save / End Game stores the date, opponent, per-player stats, and shots
- A Games tab to reopen, edit, or delete a saved game
- Season totals, per-game averages, shooting percentages, and a combined season shot chart, with a season selector (default 2026-27)
- A highlights list of video links (title, player, date). YouTube, Google Drive, and Hudl links can be saved and opened later

## Sharing stats (Export / Import)

Stats live on each phone. To combine them:

1. Tap **Export JSON** to download every game, the roster, seasons, and highlight links. **Export CSV** downloads a spreadsheet of the game log.
2. Send the JSON file to whoever should have a copy (text, email, AirDrop, and so on).
3. On the other phone, open the app, tap **Import**, and choose that JSON file.

Import **merges**. Games already present (matched by id) are skipped, so you will not get duplicates. New games and highlight links are added.

## Privacy

The page is public, but game data is not uploaded to GitHub or any server. Nothing is stored here except the app itself. Default players are first names only (Juni and Ezra).
