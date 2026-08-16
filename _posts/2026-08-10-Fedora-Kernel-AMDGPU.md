---
layout: post
title: AMDGPU Issues on Kernel 7.1.6, 7.1.7, and 7.1.8
date: 2026-08-10
description: Recent 7.1.6, 7.1.7 and 7.1.8 kernel releases caused amdgpu driver issues. Here is how to roll back to 7.1.5 and pin it.
tags: [fedora, linux, amd, kernel, fix]
related_projects: [fedora, linux]
categories: IT
comments: true
---

In recent Fedora kernel updates, specifically 7.1.6 and 7.1.7, regressions in the amdgpu driver broke display output and caused crashes for a lot of AMD GPU users, along with weird graphical artifacts. The best thing to do for now is boot into kernel 7.1.5, remove the broken builds, and temporarily exclude them in DNF.

7.1.8 has fixed some of the issues but still isn't 100% there so I'd still suggest going to 7.1.5.

First, reboot your system, select 7.1.5 from the GRUB boot menu, and make sure you're running it:

```bash
uname -r
```

Once booted into .5, remove the broken kernel releases:

```bash
sudo dnf remove "kernel*7.1.6*" "kernel*7.1.7*" "kernel*7.1.8*"
```

To prevent Fedora from pulling 7.1.6, 7.1.7, or 7.1.8 back down during your next update, edit your DNF config:

```bash
sudo nano /etc/dnf/dnf.conf
```

Add this line under the [main] section:

```ini
excludepkgs=kernel*7.1.6* kernel*7.1.7* kernel*7.1.8*
```

Save and exit.

This will block 7.1.6, 7.1.7, and 7.1.8 from reinstalling while keeping you open to receive kernel 7.1.9 or newer as soon as a fix lands.
