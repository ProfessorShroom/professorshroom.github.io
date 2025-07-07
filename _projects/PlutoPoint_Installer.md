---
layout: page
title: PlutoPoint Automatic Software Installer
description:
img: assets/img/installer/installer.png
importance: 1
category: IT
comments: true
---

Back in 2014 I wanted to streamline installing software on new installs of Windows, which at the time we did multiple times a day. The process at the time was having all of the installers (Firefox, Chrome, Office, etc.) on a USB stick and installing them one by one. Someone then had to update the stick weekly, or monthly to make sure we were installing a current version.

I then made a PowerShell based installer which you can see the story of [here](/projects/NorthPoint_Installer/).

But as I explained in that post, being based on PowerShell, it was clunky, slow and often just broke for no obvious reason. So I decided to rewrite the entire thing using a better language, I chose C# as it didn't look too difficult. But I had never written anything in C, aside from the 10 lines or so for the original exe on the PowerShell installer.

It only took about 2 days to get pretty much everything from the PowerShell installer running in C#, I did miss out a few features that just weren't needed anymore but did include some new features that PowerShell just was capable of.

We were amazed how fast the new installer was, about 4-5x faster than the old one. And for the most part much more stable, it did have a few bugs but they are mostly ironed out now.

The major plus of this over something like [Ninite](https://ninite.com/) is that if we want a new piece of software adding, I can just add it instantly.

For example, the installer will check if the system it's running on has an Nvidia GPU, and it does it will download and installer the latest version of the Nvidia app. Along with a few OS tweaks depending on if it's being run on Windows 10 vs 11 etc. I also added some easter eggs for employee's birthdays, holidays and stuff like that.

I will continue to update this post and repo as I add more features.

[C# Based PlutoPoint Installer Repository](https://github.com/ProfessorShroom/PlutoPoint-Installer)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/installer/installer.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This is what the current version of the C# installer looks like.
</div>
