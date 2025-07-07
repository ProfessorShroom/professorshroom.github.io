---
layout: post
title: Bypass Windows 11 Microsoft Account Requirement
date: 2025-07-07
description: Bypass the need for a Microsoft account during Windows 11 installation
tags: [windows, microsoft, it, bypass, local]
categories: IT
comments: true
---

# Bypass Windows 11 Microsoft Account Requirement

Since the introduction of Windows 11, Microsoft haave forced users to create or login to a Microsoft account during a new installation. This can be very annoying if you don't want a Microsoft account, or are setting up the computer for someone else, like we do everyday.

You used to be able open command prompt by using Shift+F10 (Shift+Fn+F10 on some laptops) and type the following command.

```
taskkill /F /IM oobenetworkconnectionflow.exe
```

Since 24H2 this no longer works, strangely I've found it works very occasionally, not sure what the logic is there.

The new method is as follows, don't connect to any wireless network, if you have ethernet then just plug the cable. When you get to the stage of being asked for a Microsoft account, open command, press Shift+F10 (Shift+Fn+F10 on some laptops) and type the following

```
start ms-cxh:localonly
```

this will bypass the online account and allow you to create a local user with or without a password.
