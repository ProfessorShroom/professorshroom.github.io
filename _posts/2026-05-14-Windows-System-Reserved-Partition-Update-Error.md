---
layout: post
title: Windows System Reserved Partition Update Error
date: 2026-05-14
description: Fix the Windows 10/11 system reserved partition update error, causing Windows to not update
tags: [windows, microsoft, it, bypass, local]
related_projects: [windows]
categories: IT
comments: true
---

Windows 10 and 11 have a fault with Windows update, causing the following error - Windows couldn’t be installed, we couldn’t update the System Reserved Partition with the error code 0xc1900104, 0x800f0922, 0x800f0922 or 0xc1900201.

The issue is caused by the System Reserved Partition running out of space, as this partition is very small by design and can be filled up by updates, or some anti-virus apps also write to it. There are two fixes, the first is expanding that partition which is a lot of work, so option two is the better option.

You need to free up about 10-15MB of space on that partition, so not much at all.

Open command prompt or terminal as an adminstrator and run the following commands:

Mount the System Reserved Partition as Y:

```
mountvol y: /s
```

Change to the Y: partition

```
Y:
```

Change the current directory to the fonts directory

```
cd EFI\Microsoft\Boot\Fonts
```

Then delete all of the files in that directory

```
del *.*
```

This will delete all of the fonts with that folder and free up enough space to complete Windows updates.
