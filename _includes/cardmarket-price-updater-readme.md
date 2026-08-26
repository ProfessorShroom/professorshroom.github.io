
#### Latest Update

**Update 2.0.1.0**

- Flathub compliance fixes for the Flatpak packaging (metadata/manifest cleanup) - no functional changes to the app itself.

#### Older Updates

**Update 2.0.0.0**

- Rewrote the GUI in Avalonia instead of WinForms, so it now runs on Linux (Ubuntu/Fedora, packaged as a Flatpak) as well as Windows, from one shared codebase.
- Added USD ($) as a third currency alongside GBP and EUR.
- Downloads now retry automatically with backoff instead of failing the run on one bad request.
- Backups are now timestamped and kept in a `Backups` folder with automatic pruning, instead of a single overwritten `.bak` file.
- Added a small JSON config file for default currency/price type and retry/backup settings, created automatically on first run.
- Replaced AutoUpdater.NET.Official (which required WinForms and blocked a Linux build entirely) with a small built-in update checker on Windows - it now shows a "new version available" link instead of silently self-updating. Linux gets updates via `flatpak update` instead.

**Update 1.4.0.0**

- Changed quiet mode to actually hide the CLI completely.
- Added auto update feature.

**Update 1.3.0.0**

- Updated GUI to a more modern look.
- Added support to select pricing model; Trending Price, 7-Day Average Price and 30-Day Average Price. By default, it is set to 30-Day Average Price, but you can change it to Trending or 7-Day Average Price if you want a more stable price.

**Update 1.2.0.0**

- Added cmd/terminal support.
- /f lets you specify a file.
- /d lets you specify a directory.
- /c lets you specify a currency.
- /log lets you log to a file.
- /q, /quiet, /s, /silent runs the exe silently.

**Update 1.1.2.0**

- Updated EUR to GBP conversion link.

**Update 1.1.1.0**

- Moved Version/Readme link to [professorshroom.com](https://professorshroom.com)

**Update 1.1.0.0**

- Added Game to spreadsheet to specify the card game.
- Will now check prices against the correct game instead of checking all.
