---
layout: post
title: Retrofit Electric Folding Mirrors Renault Megane MK3
date: 2019-12-19
description: Guide on retrofitting electric folding mirrors to Renault Megane MK3
tags: [renault, megane, mirrors, folding, retrofit, renaultsport, car]
categories: Car
comments: true
---

First of all, you need to check if you have the correct looms. Mine did but I'm not sure if all models do or only RS models.
Take this panel off on both sides.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_1.jpg" title="Renault Megane MK3 Inner Mirror Cover" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_2.jpg" title="Renault Megane MK3 Inner Mirror Cover Removed" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Now you can check the loom for the correct wire.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_3.jpg" title="Renault Megane MK3 Drivers Side Mirror Loom" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_4.jpg" title="Renault Megane MK3 Passenger Side Mirror Loom" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, drivers side loom with the needed wire circled, and passenger side on the right.
</div>

If you have the correct loom then you just need to get new mirrors and the driver's window switch controls.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_5.jpg" title="Renault Megane MK3 Folding Mirror Controls" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Part number is 809610009R.
</div>

I've circled the pin you need to look for on each mirror to make sure they're electric folding compared to a non-folding version.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_6.jpg" title="Renault Megane MK3 Drivers Side Mirror Plug" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_7.jpg" title="Renault Megane MK3 Passenger Side Mirror Plug" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, drivers side mirror plug with the needed pin circled, and passenger side on the right.
</div>

Once you've swapped the mirrors it will require coding with either CLIP or DDT4ALL, I've not used CLIP so the tutorial will be with DDT.

You need to get a special adapter used on Fords as Renault and Ford share a OBD2 pinout. You can get them on eBay for around a tenner. Search Ford ELM327 on eBay and you should find a USB to OBD2 adapter.

Install DDT4ALL, [link to the software and some databases](https://cloud.howardgb.com/s/RkbA9wctTQRgBcG).

I'm not going to go through a complete tutorial on how to use the software, if you need to learn then use [this guy on YouTube](https://www.youtube.com/watch?v=edQApYg84Ao&list=PLl95s7S23YMK1VCsYd7zjEWvo_nfEtBUt), he's not English but you can still follow along pretty easily.

You need to go to DDCM > Driver DCM X95 SLOT v4.0 > DCM Configuration > Write Configuration
Select the correct options for your car and then press send

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car/250_folding_mirror_8.jpg" title="DDT4ALL Folding Mirror Coding" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

If you get an error that you need expert mode it's the second option along the top, the weird black and white face and make sure your ignition is on but the engine is not.

I'm happy to help anyone if you can't get it working, just send me an email at [info@professorshroom.com](mailto:info@professorshroom).
