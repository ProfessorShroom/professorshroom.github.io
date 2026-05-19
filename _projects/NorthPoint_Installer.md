---
layout: project
title: NorthPoint Installer
display_title: NorthPoint Installer
description: Computer Repair Centre Automatic Software Installer depreciated by PlutoPoint Installer
img: assets/img/installer/computer_repair_centre_installer_logo_old.png
importance: 10
category: Software
related_projects: [installer, software, windows]
related_posts: [installer, software, windows]
comments: true
images:
  lightbox2: true
---

Back in 2014 I wanted to streamline installing software on new installs of Windows, which at the time we did multiple times a day. The process at the time was having all of the installers (Firefox, Chrome, Office, etc.) on a USB stick and installing them one by one. Someone then had to update the stick weekly, or monthly to make sure we were installing a current version.

We did briefly use [Ninite](https://ninite.com/) but we quickly moved on from this as we found it didn't have all of the software we needed, and we couldn't add our own.

I got bored of this so decided I could make an installer that would download the latest version of the file and then install it automatically. The very first itteration was a batch file but that didn't last too long.

I then started work on this version which was all based on PowerShell, I'd never coded anything before aside from the basic "Hello World" you all do in college. So PowerShell seemed like the best thing to use, I probably should of just used C but oh well.

I used PowerShell forms to give the installer a nice GUI and also give feedback to the user on any errors, this all worked quite well and we used it for a number of years but it was slow, clunky, and sometimes just broke.

The installer still works in its current form and I will likely continue to keep it working just incase anyone actually uses it but it has now been replaced by the PlutoPoint Installer.

[PowerShell based NorthPoint Installer Repository](https://github.com/ProfessorShroom/NorthPoint-Installer)

[C# Based PlutoPoint Installer Repository](https://github.com/ProfessorShroom/PlutoPoint-Installer)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="northpoint_1" %}
    </div>
</div>

### Changelog

{% include northpoint-readme.md %}
