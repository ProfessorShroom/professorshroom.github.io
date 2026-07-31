# PlutoPoint ASE Server Manager

**PlutoPoint ASE Server Manager** is a modern, web-based control panel and management suite designed for hosting and managing **ARK: Survival Evolved (ASE)** dedicated servers. Built with a responsive frontend and a robust Node.js & Express backend, it simplifies server installation via SteamCMD, live terminal monitoring, process management, deep in-game configuration editing, and mod Steam Workshop mod management.

---

## Features

- **Multi-Server Management:** Easily host and switch between multiple ARK server instances from a single dashboard.
- **Automated SteamCMD Integration:** Install, validate, and update server files directly from the UI with real-time logs.
- **Process Control:** Start, stop, restart, and configure automatic startup on container boot.
- **Live Terminal Console:** Stream live server logs directly to your browser for real-time information.
- **Advanced Configuration Editor:** Customize server settings, game rules, rates multipliers (XP, taming, harvesting, breeding), Message of the Day (MOTD), and Steam Workshop mods (`GameUserSettings.ini` & `Game.ini`).
- **Dino & Engram Overrides:** Configure NPC replacements (dino spawn swapping/removal), custom engram level requirements, point costs, visibility, and crafting cost overrides.
- **Secure User Authentication:** Secure access with built-in user login, password hashing, role-based administration, and multi-user management.
- **Scheduled Backup & Restore System:** Backup & restore system with scheduling options and custom retention options.

---

## Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your host machine.
- Adequate system resources (ARK dedicated servers typically require at least 8GB of RAM and multiple CPU cores per instance).

---

## Quick Start with Docker Compose

1. **Create the project directory**, this will contain your `docker-compose.yml`and ARK server/save files:

```bash
mkdir -p ./ARKServerManager/ark_data
mkdir -p ./ARKServerManager/backup
```

2. **Create the `docker-compose.yml` file:**

   ```yaml
   services:
     plutopoint-ase-manager:
       image: professorshroom/plutopoint-ase-server-manager:latest
       container_name: plutopoint-ase-server-manager
       restart: unless-stopped
       ports:
         - "3000:3000" # WebUI Port
         - "7777:7777/udp" # ARK Game Port
         - "27015:27015/udp" # Steam Query Port
         - "27020:27020/udp" # RCON Port
       volumes:
         - ./ark_data:/data # Change this to your desired data directory
         - ./backup:/backup # Change this to your desired backup location
       environment:
         - PORT=3000
         - PUID=1000
         - PGID=1000
         - TZ=Europe/London # Change this to your timezone
   ```

3. **Start the container:**

   ```bash
   docker compose up -d
   ```

4. **Access the Web Dashboard:**
   Open your browser and navigate to `http://<your-server-ip>:3000`.

---

## Default Login Credentials

On first launch, the application automatically initializes a default administrator account:

- **Username:** `ark`
- **Password:** `survival`

> ⚠️ **Security Note:** Upon first log in please go to the **User Management** tab and change your username/password for secuity reasons.

---

## Usage Guide

1. **Add a Server:** Click the **`+`** button in the sidebar under _Servers_, give your server a name (e.g., `Main Server`), and set its directory path (e.g., `/data/mainserver`).
2. **Install Server Files:** Select your newly created server from the sidebar, navigate to the **Dashboard**, and click **Install Server via SteamCMD**. Watch the live progress output.
3. **Configure Settings:** Go to the **Configuration & Mods** tab to tweak rates, rules, workshop mod IDs, and spawn replacements, then click **Save Settings**.
4. **(Optional) Configure Backup Frequency:** Go to the **Backup & Restore** tab to set the frequency and retention of server backups.
5. **Start Playing:** Return to the **Dashboard** and click **Start Server**. Use the **Live Server Console** to monitor startup and connect via your game client.
