---
layout: post
title: Enabling RS Monitor on a Megane MK3 with R-Link 1
date: 2099-01-01
description: A guide on enabling RS Monitor on a Renault Megane MK3 with an R-Link 1 infotainment system by editing the screen's EEPROM.
tags: [renault, megane, rs monitor, r-link, retrofit, renaultsport, car, guide]
related_projects: [megane]
categories: Car
comments: true
images:
  lightbox2: true
---

Unlike RS Drive 2, which can be switched on over OBD with DDT4ALL, [see my RS Drive guide](https://professorshroom.com/guides/rs-drive/), RS Monitor on R-Link 1 can't be enabled from the diagnostic port. The setting lives in a small EEPROM on the screen's board, so we need to read it, change it and write it back.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="rs_monitor_1" %}
    </div>
</div>

There aren't any guides on this so I thought I'd make one. It isn't hard, but it does involve taking the unit apart and getting at a chip, so take your time.

The chip we're after is a 24C64F (an 8KB I2C EEPROM) on the R-Link board. To talk to it you'll need a programmer, I'm using [the EZP2023+](https://www.amazon.co.uk/dp/B0C7G81DG7?ref=fed_asin_title). For the software I'm using [ezp2019+ by bokic on GitHub](https://github.com/bokic/ezp2019) as I run Fedora, but if you run Windows the disc provided with the programmer works fine.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="ezp2023+" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="r-link_board" %}
    </div>
</div>

There are 3 ways you can do this, and the difference is how the chip gets power.

The first is to leave everything connected in the car and clip onto the chip. The board needs to be powered for this to work, and the programmer can't provide enough power through the clip while the chip is still soldered to the board, so the car has to be the one powering it.

The second is to remove the unit from the car and still use the clip. This needs the unit to stay powered and awake, so you'd need a bench PSU and a CAN emulator to keep it active. If you already have those you probably don't need a tutorial on how to do this, so I'm not going to cover it.

The third is the one I'll be using. Disconnect the battery first before doing anything. Remove the unit, desolder the chip and put it directly into the programmer. It means you need to be able to desolder and resolder an 8 pin SOIC chip, but you don't have to worry about powering the unit or the clip losing contact.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="24c64_in_ezp" %}
    </div>
</div>

Whichever way you go, the next steps are the same. Read the chip and save the dump. Then read it a second time to a different file and compare the two (`sha256sum` or `cmp` will do), if they don't match then you don't have a good connection so re-seat it and try again until two reads are identical.

Below is the command I used to get the dump.

```bash
# example only, replace with the commands you used
ch341eeprom -s 24c64 -r rlink_original.bin
```

**Before we go any further I highly suggest you copy and save your original dump somewhere safe just in case the edit goes wrong so you have your original data to go back to.**

Now open the dump in a hex editor. [ADD: what you're looking for, which offset(s) hold the RS Monitor setting, what the original bytes were, what they need to be changed to, and whether there's a checksum that needs updating afterwards.]

Original bytes: **[PASTE ORIGINAL BYTES AND OFFSET]**
{: .hexCode}

Modified bytes: **[PASTE MODIFIED BYTES AND OFFSET]**
{: .hexCode}

Save the edited file under a new name so you don't overwrite your original, then write it to the chip. Once it's written, read it back and compare it to the file you wrote to make sure the write was good.

At this point it should be done, put everything back together and refit it in the car and reconnect the battery.

If it worked, RS Monitor will now be in the menu. Below ...

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="rs_monitor_2" %}
    </div>
</div>

Now that you have RS Monitor you can also enable RS Drive 2 inside it, which I've covered in [this guide](https://professorshroom.com/guides/rs-drive/),

_**Disclaimer:** This guide is provided for information only, and you follow it entirely at your own risk. Opening your car's infotainment unit, desoldering components and writing to its memory can cause unexpected behaviour or leave the unit unusable, and I can't be held responsible for any damage to your vehicle, loss of data or warranty, or anything else that results. These steps worked for me on my own car, but that's no guarantee they'll work on yours. Always keep a verified copy of your original EEPROM dump before changing anything, and if you're not comfortable doing this yourself, speak to a professional._
