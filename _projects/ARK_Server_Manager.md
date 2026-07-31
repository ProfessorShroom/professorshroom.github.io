---
layout: project
title: PlutoPoint ARK Survival Evolved Server Manager
display_title: PlutoPoint ARK Survival Evolved Server Manager
description: Web Based Server Manager for ARK Survival Evolved
img: assets/img/ark/plutopoint-ark-server-manager.png
importance: 2
category: Software
related_projects: [software, manager, linux, docker, gaming, ark]
related_posts: [software, manager, linux, docker, gaming, ark]
comments: true
images:
  lightbox2: true
---

Every few years we like to play ARK: Survival Evolved so I host a sever for my friends. Last time we all played was a good 5+ years and I was running Windows Server back then, ew, so I could use [ARK Server Manager by bletch](https://arkservermanager.freeforums.net/thread/5193/downloads) which is great, but it doesn't work on a headless Ubuntu Server.

I couldn't find anything decent for a headless Linux server with a nice web interface and all the features I wanted like game modifier control, mods, backups etc.
So I decided to make my own which turned out to be pretty simple and I'm suprised there isn't that much else out there, given the server part just runs on SteamCMD, it's basically just the frontend that needs designing.

Below is the repo and information on how to set it up.

[PlutoPoint ASE Server Manager Repository](https://github.com/ProfessorShroom/PlutoPoint-ASE-Server-Manager)

{% include PlutoPoint_ASE_Server_Manager.md %}
