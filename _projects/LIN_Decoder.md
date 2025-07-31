---
layout: page
title: BMW Rear View Mirror LIN Decoder (WIP) (On Hold)
description:
img: assets/img/bmw_lin/lin.png
importance: 10
category: Car
comments: true
---

This project is currently a WIP and on hold as I've run into a roadblock.

I was watching one of my favourite YouTubers, [M539 Restorations](https://www.youtube.com/channel/UCLLpxcworT8275nBXODXyqw), and noticed in one of his E92 M3 videos that the rear view mirror had a completely pointless yet very cool feature of a compass.

I thought to myself, thats cool I want one of those in my car, how hard can that be? It turns out quite hard.

There appeared to be two types of mirror with the feature I wanted, the current one which is still used in new BMW's today which is the one in the E92 M3, and an older one that was used from around 2000-2009. But this mirror is a bit uglier as it has an Apple like notch cutout around the compass which I didn't like, so the new mirror it was.

I also noticed the buttons on the bottom of the mirrors which is called HomeLink, 3 programmable buttons on the underside of the rear view that allow you program up to 3 automatic garage doors to. I don't have any automatic garage door but it seems silly to buy this mirror and get the one without it so I got a mirror from a F82 M4 which had all of the options I wanted (autodim, HomeLink, and the compass).

I did some research and found that loads of E39 (one of my favourite BMW's) owners put the old style mirror in their car and it's just a simple 12v supply to get it all working, so I assumed the newer mirror would be the same. I was wrong, really I should have just went for the E46 mirror.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bmw_lin/m539.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bmw_lin/old_mirror.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, Streten's E92 M3 and on the right the older style rear view mirror.
</div>

The mirror only has 4 pins, which threw me as the older E46 mirror has a lot more. I got the schematic from BMW and found there was a ground (obviously), a 12v input for power, a LIN bus line (at the time I'd never heard of LIN), and a 5v line.

I applied 12v and the compass lit up! If this is all you need then you actually don't need to do anything else, but my car has a autodim mirror and I didn't want to lose this. The autodim feature however, did not work, I initially thought the mirror was faulty. I did some more research on the new mirror and found that the LIN bus line is what controlls the autodim, basically the ECU will tell the autodim feature to activate and then it uses the 12v line to power it. This isn't just a case of applying 12v to that line too, which I tried, it needs a LIN signal pulsed at a specific interval.

I've found threads of other people trying to get this working and failing, mostly retrofitting it into BMW's that didn't come with the autodim feature from the factory.

So I started designing a PCB that will two 12v lines, one always live, one only live with the ignition/car is running, and a ground. The idea is this can be put in any car and work. The reason there's two 12v lines is that these BMW mirrors have a LED that flashes when the car is locked to deter theives.

When only the 12v permament live is on, but the ignition is off, the LED will flash every 20 seconds or so.

The 12v lines are both stepped down to 5v, as all of this is being done by an Arduino which can either run on 5v and 7v, but 5v is easier, and the LED itself needs 5v. The arduino will also take care of the LIN signals, creating a pulse at the perfect interval which then goes into a LIN IC and out to the mirror via a 12v gate. There's also just a 12v passthrough for the compass and autodim power.

Initally I was going to use a 555 timer for the mirror LED, but this turned out to be more complicated than just using the arduino I already needed for the LIN singal. So by using the digital pins the arduino can detect 5v logic and tell when the car is locked/not running.

Once all of this is working I will most likely do a 3.1 revision and add a switch to allow you to disable the LED feature incase it's unwanted.

This PCB will be in a 3D printed case with a plug on either side, 3 input wires as stated, the ground just going to the body of the car, and both 12v lines coming from the fuse box. In my Megane for whatever reason the rear wiper fuse is a permament live, so I'll use that. For the ignition live I'll probably just use the cigarette lighter. The output plug is 4 wires, 12v for the compass/power, ground, the LIN signal, and the 5v for the LED.

To mount it to the windscreen I cut both mounts in half, took the windscreen section from the Megane the ball from the BMW and got a local garage to weld them together which they did for a tenner.

The 3.0 boards came in but had some issues, when both 5v lines were powered the Arduino was getting about 6.8v for some reason. The LIN chip also got extremely hot almost instantly. I'm putting this project on hold for now to work on other things, but if anyone has any ideas or wants to help please email me at [info@professorshroom](mailto:info@professorshroom).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bmw_lin/lin.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bmw_lin/mirror_mount.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the current PCB design which has a few issues and on the right the mirror mount made from the original Renault and BMW mount welded together.
</div>
