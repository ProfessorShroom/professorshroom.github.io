<h3> ProfessorShroom 🍄 Scripts </h3>

Just a useful collection of scripts for Linux and Windows.

<h3>Docker</h3>

- [dockerInstallPi.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Docker/dockerInstallPi.sh) - Install Docker on a Raspberry Pi.
- [dockerInstallUbuntu.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Docker/dockerInstallUbuntu.sh) - Install Docker on Ubuntu.
- [updateDockerContainers.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Docker/updateDockerContainers.sh) - Updates all Docker containers, assuming all are held within the same directory. <br>
  For example, if all containers are held within `/mnt/docker/` you just add the name of the subfolder. <br>
  Change the following line to your Docker directory:

```yaml
dockerDir="/path/to/docker/containers"
```

and then input your containers like below:

```yaml
containers="
Jellyfin
Radarr
SABnzbd
Sonarr
"
```

<h3>MergerFS</h3>

- [mergerFSBalance.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/MergerFS/mergerFSBalance.sh) - Balances my MergerFS volume, but excludes a directory on one of the drives I do not want balanced:

```bash
-e /mnt/drive1/Docker/
```

means that the Docker folder within drive 1 is excluded from the balance process.

<h3>Metadata</h3>

- [removeImgMetadata.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Metadata/removeImgMetadata.sh) - Removes metadata from all images. <br>
  You set the directory by changing:

```ini
TARGET_DIR="$BASE_DIR/location/of/images"
```

Leave `$BASE_DIR` to run a relative path from the location of the script, removing it will allow you to input an absolute path. <br>
_Will install exiftool if not already installed_

- [removeImgMetadata.ps1](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Metadata/removeImgMetadata.ps1) - Exactly the same as above, but for Windows.

<h3>Nextcloud</h3>

- [nextcloudSync.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Nextcloud/nextcloudSync.sh) - Runs a two-way Nextcloud sync to a specified location.<br>
  Change:

```ini
WATCH_DIR="/path/to/Nextcloud"
```

to change the location of Nextcloud on the local drive.<br>

- [nextcloudService.service](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Nextcloud/nextcloudService.service) - SystemD service file for the above script.
  Only errors are logged to avoid clogging up the log file. <br>
  Change:

```ini
RequiresMountsFor=/path/to/nextcloud
```

to the drive that the Nextcloud folder is located in.<br>
Change

```ini
/path/to/nextcloudSync.sh
```

under `ExecStart=` to wherever the script is located.<br>
Change `User=user` to your username.<br>
Change

```ini
EnvironmentFile=/home/user/nextcloud.env
```

to the location of your env file.<br>

- [nextcloudService.timer](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Nextcloud/nextcloudService.timer) - SystemD service timer file for the above script, this is delayed for 2 minutes after booting and will run every 5 minutes unless an instance is already running.

- [nextcloud.env](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Nextcloud/nextcloud.env) - Environment file containing your credentials. <br>
  Change:

```env
REMOTE="https://username:password@nextcloud.domain.com"
```

to suit your username, password (app password if using MFA), and Nextcloud domain.<br>
I'd suggest locking it by running

```bash
sudo chmod 600
```

and

```bash
sudo chown root:root
```

on the file after entering your credentials.<br>

<h3>Windows</h3>

- [ClearFileExplorer.vbs](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Windows/ClearFileExplorer.vbs) - Clears the file explorer history.
- [EmptyRecycleBin.vbs](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Windows/EmptyRecycleBin.vbs) - Empties the recycle bin.
