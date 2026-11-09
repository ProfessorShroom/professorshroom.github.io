---
layout: post
title: Repairing the Gear Display on a Mercedes W211 / S211 Shifter
date: 2025-07-31
description: A guide on repairing the missing P/R/N/D gear display and stuck-in-first-gear fault on a Mercedes-Benz W211/S211 E-Class by replacing the optical switches in the automatic shifter.
tags: [mercedes, w211, s211, e-class, shifter, repair, soldering, car, guide]
related_projects: [car, mercedes]
categories: Car
comments: true
images:
  lightbox2: true
---

For daily driving and for my wife's business, [PlutosPantry](/projects/Plutos_Pantry), we have a 2006 Mercedes-Benz E-Class E220 CDI. It has what is apparently a fairly common issue with the automatic shifter, so I repaired it and made a guide in case anyone else needs to do the same.

## The symptoms

When you start the car, to the left of the mileage you should see P/R/N/D and to the right C/S. The fault starts with nothing being displayed where P/R/N/D should be. It can apparently also stop showing C/S, but mine never did this.

When the display is missing you can still shift to D, but it will be quite clunky, and the car will be stuck in first gear. You also won't be able to select reverse or park without turning the car off first.

## The cause and your options

This is caused by faulty optical switches in the shifter mechanism. They can be replaced with a [TCPT1300](https://uk.rs-online.com/web/p/slotted-optical-switches/7103816?gb=s) or a [TCPT1350](https://uk.rs-online.com/web/p/slotted-optical-switches/8187512?gb=s). The TCPT1300 is a like for like sensor, but the TCPT1350 also works.

You could just replace the whole shifter with a used one from eBay, which at the time of writing ranges from about £80-£150. But as these are used, the fault could just occur again tomorrow, next week, etc. so really the best option is repairing your own one.

**This repair requires quite advanced soldering knowledge and ability.** If that's not you, it may be worth getting someone who is comfortable with SMD rework to do it.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_2" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_3" %}
    </div>
</div>

## What you'll need

- Replacement optical switches, a TCPT1300 or TCPT1350 (links above), you'll need a few as there are multiple on the board
- A hot air rework station and soldering iron
- Kapton tape
- A Dremel (or similar) with a cutting disc, for 2004 and later models
- Self tapping screws, to hold the housing together afterwards
- Basic hand tools, including a driver for the T (Torx) screws

## Removing the shifter

First you have to remove the shifter itself from the car. There's plenty of videos on YouTube showing you how to do this, [like this one here](https://www.youtube.com/watch?v=ZiquZMIj74s).

## Opening the housing

Once the shifter is out the actual repair can begin.

To get the housing open you will most likely have to cut the four tabs holding it down, two either side. The exception is pre-2004 models, which are just held together with 4 screws. Mine is a 2006 so I had to cut it, but this is easy with a Dremel.

## Removing the sensor board

Once you have the housing open you will see a black box with a plug going into it, this is what we need to remove and repair.

1. Put the shifter into D.
2. Remove the two large T screws holding the box to the shifter.
3. Pull the box along the shaft as far as it will go.
4. Once it's as far as it can go, wiggle it very carefully up and away from the shifter.
5. Undo the 4 screws holding the plastic case together and remove the board.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_4" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_5" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_6" %}
    </div>
</div>

## Replacing the optical sensors

Above you can see what the board looks like before and after removing the optical sensors. I found hot air to be the best way to remove them, just be mindful of the small components around them and also the backside of the board.

The new sensors have anchoring pins in the middle, unlike the originals, so you need to apply a very small strip of Kapton tape to prevent shorting. I found this to be the most awkward part of the job.

## Putting it back together

Once the new sensors are in, just do the reverse and put it all back together. I used some self tapping screws to keep the shifter housing together, a bit like what they did for the pre-2004 models. The holes and threads are already there.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include images.liquid id="w211_7" %}
    </div>
</div>

## Optional: the other two sensors

There are actually 2 more of these sensors in the top part of the housing that handle the side to side movement, but I didn't feel the need to replace these. Even if they do stop working it will only affect manual mode, which I never use.

## Results

This has now been good for over 10 months, so I'd say this is the definitive fix.

_**Disclaimer:** This guide is provided for information only, and you follow it entirely at your own risk. This job involves removing part of your car's gear selector, cutting its plastic housing, and working with hot air and soldering equipment on a small circuit board. A faulty or badly repaired shifter can affect how your car selects gears, so make sure it works properly before driving, and take care when using hot air and a soldering iron. Check your car's service information before removing anything, and consider disconnecting the battery first. I can't be held responsible for any damage to your vehicle, injury, loss of warranty, or anything else that results. These steps worked for me on my own car, but that's no guarantee they'll work on yours. If you're not comfortable doing this yourself, speak to a professional._
