
#### Latest Update

**Version 2.0.3.2 / 2.0.3.1 / 2.0.3.0**

- **_2.0.3.2_** Fixed Flatpak crash due to missing argument in dotnot build command.
- **_2.0.3.1_** Fixed the Linux CLI release workflow failing with a 403 - it was missing the `contents: write` permission the other two release workflows already had, so it couldn't create/attach to the release.
- **_2.0.3.1_** Moved `update.xml` back to the repo root (pre-2.0 installs expect it there) and updated the update-checker URL, docs, and project layout references to match.
- **_2.0.3.1_** Fixed a few leftover references to the old hyphenated repo name (`Cardmarket-Price-Updater`) in the README and update-checker URL, pointing them at the current `CardmarketPriceUpdater`.
- **_2.0.3.0_** Added a self-contained Linux `linux-x64` CLI build, published alongside the exe and Flatpak on every release - lets headless/server users run the CLI directly with no Flatpak, GUI runtime, or display required.
- **_2.0.3.0_** Releases are now fully automated: pushing a version tag (`vx.x.x.x`) builds and attaches the Windows exe, the Flatpak bundle, and the Linux CLI tarball to the release, no manual upload needed.
- **_2.0.3.0_** Fixed `packaging/flatpak/io.github.professorshroom.CardmarketPriceUpdater.yml` - it was still cloning an old hyphenated repo name pinned to `v2.0.2.0` instead of building from your local checkout. It now builds from a local publish output, matching what the packaging docs always said it did.

#### Older Updates

<details markdown="1">
<summary><strong>Version 2.x - The .NET 8 / Avalonia Update</strong></summary>

**Version 2.0.2.0**

- Removed Flathub compliance, it's too strict and not worth the hassle.

**Version 2.0.1.0**

- Flathub compliance fixes for the Flatpak packaging (metadata/manifest cleanup) - no functional changes to the app itself.

**Version 2.0.0.0 - The .NET 8 / Avalonia Update**

- Rewrote the GUI in Avalonia instead of WinForms, so it now runs on Linux (Ubuntu/Fedora, packaged as a Flatpak) as well as Windows, from one shared codebase.
- Added USD ($) as a third currency alongside GBP and EUR.
- Downloads now retry automatically with backoff instead of failing the run on one bad request.
- Backups are now timestamped and kept in a `Backups` folder with automatic pruning, instead of a single overwritten `.bak` file.
- Added a small JSON config file for default currency/price type and retry/backup settings, created automatically on first run.
- Replaced AutoUpdater.NET.Official (which required WinForms and blocked a Linux build entirely) with a small built-in update checker on Windows - it now shows a "new version available" link instead of silently self-updating.

</details>

<details markdown="1">
<summary><strong>Version 1.x - The Initial Release</strong></summary>

**Version 1.4.0.0**

- Changed quiet mode to actually hide the CLI completely.
- Added auto update feature.

**Version 1.3.0.0**

- Updated GUI to a more modern look.
- Added support to select pricing model; Trending Price, 7-Day Average Price and 30-Day Average Price. By default, it is set to 30-Day Average Price, but you can change it to Trending or 7-Day Average Price if you want a more stable price.

**Version 1.2.0.0**

- Added cmd/terminal support.
- /f lets you specify a file.
- /d lets you specify a directory.
- /c lets you specify a currency.
- /log lets you log to a file.
- /q, /quiet, /s, /silent runs the exe silently.

**Version 1.1.2.0**

- Updated EUR to GBP conversion link.

**Version 1.1.1.0**

- Moved Version/Readme link to [professorshroom.com](https://professorshroom.com)

**Version 1.1.0.0**

- Added Game to spreadsheet to specify the card game.
- Will now check prices against the correct game instead of checking all.

</details>
