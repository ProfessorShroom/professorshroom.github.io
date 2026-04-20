<h3> ProfessorShroom 🍄 Scripts </h3>

Just a useful collection of scripts for Linux and Windows.

<h3>Docker</h3>

- [dockerInstallPi.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Docker/dockerInstallPi.sh) - Install Docker on a Raspberry Pi
- [dockerInstallUbuntu.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Docker/dockerInstallUbuntu.sh) - Install Docker on Ubuntu
- [updateDockerContainers.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Docker/updateDockerContainers.sh) - Updates all Docker containers, assuming all are held within the same directory <br>
For example, if all containers are held within /mnt/docker/ you just add the name of the subfolder <br>
Change the following line to your Docker directory ```dockerDir="/path/to/docker/containers"``` and then input your containers like below
```
containers="
Jellyfin
Radarr
SABnzbd
Sonarr
"
```

<h3>MergerFS</h3>

- [mergerFSBalance.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/MergerFS/mergerFSBalance.sh) - Balances my MergerFS volume, but excludes a directory on one of the drives I do not want balanced <br>
```-e /mnt/drive1/Docker/``` means that the Docker folder within drive 1 is excluded from the balance process

<h3>Metadata</h3>

- [removeImgMetadata.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Metadata/removeImgMetadata.sh) - Removes metadata from all images <br>
You set the directory by changing ```TARGET_DIR="$BASE_DIR/location/of/images"``` <br>
Leave ```$BASE_DIR``` will run a relative path from the location of the script, removing it will allow you to input an absolute path <br>
*Will install exiftool if not already installed*
- [removeImgMetadata.ps1](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Metadata/removeImgMetadata.ps1) - Exactly the same as above, but for Windows

<h3>Nextcloud</h3>

- [nextcloudSync.sh](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Nextcloud/nextcloudSync.sh) - Runs a two-way Nextcloud sync to a specified location. This runs every 10 minutes, or when it detects a change to a local file, but will not run if it's already running to avoid file conflicts <br>
Change ```WATCH_DIR="/path/to/Nextcloud"``` to change the location of Nextcloud on the local drive<br>
Change ```REMOTE="https://username:password@nextclouddomain.com"``` to suit your username, password (app password if using MFA), and Nextcloud domain<br>
Change ```LOCKFILE="/tmp/nextcloudsync.lock"``` to change the location of the lockfile, but /tmp/ is good as this is cleared on a reboot automatically, this prevents the script from running multiple instances as once a sync is complete, this file is deleted<br>
As above, change ```BACKUPLOCKFILE="/tmp/backupnextcloudsync.lock"``` to change the location of an additional lockfile. I use this during a backup so nothing changes during that process, but it is optional; if you don't want to use it, then just leave it as is<br>

- [nextcloudService.service](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Nextcloud/nextcloudService.service) - SystemD service file for the above script, this will wait 60 seconds after booting to start the service <br>
Change ```RequiresMountsFor=/path/to/nextcloud``` to the drive that the Nextcloud folder is located in <br>
Change ```ExecStart=/path/to/nextcloudSync.sh``` to wherever the script is located <br>
Change ```User=user``` to your username

<h3>Windows</h3>

- [ClearFileExplorer.vbs](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Windows/ClearFileExplorer.vbs) - Clears the file explorer history
- [EmptyRecycleBin.vbs](https://github.com/ProfessorShroom/ProfessorShroom-Scripts/blob/main/Windows/EmptyRecycleBin.vbs) - Empties the recycle bin
