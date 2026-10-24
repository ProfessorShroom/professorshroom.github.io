---
layout: project
title: VentPuck
display_title: VentPuck
description: A round touch-screen OBD2 gauge that sits in the air vent of my Megane RS
img: assets/img/ventpuck/ventpuck_logo.png
importance: 2
category: Car Projects
related_projects: [renault, megane, car, obd2, esp32, hardware, software]
related_posts: [renault, megane, car, obd2, esp32, hardware, software]
comments: true
images:
  lightbox2: true
---

<div style="display: flex; justify-content: center; width: 100%;">
  <div class="ventpuck_logo" style="max-width: 250px; margin: 0 auto 2rem auto;">
    <a href="https://github.com/ProfessorShroom/VentPuck" target="_blank" rel="noopener">
      <span class="no-shadow">
        {% include images.liquid id="ventpuck_logo" class="ventpuck_logo" show_caption=false %}
      </span>
    </a>
  </div>
</div>

I drive a Renault Megane RS and I wanted to see things like boost and oil temperature while I'm driving, without bolting a gauge pod to the dash or having a phone propped up on the vent.

So I'm building [VentPuck](https://github.com/ProfessorShroom/VentPuck), a small round gauge that sits in one of the air vents and reads live data from the car.

It's built around an ESP32-S3 with a 1.85" round touch display. The car's data comes over any Bluetooth OBD2 adapter that supports BLE, so the only wires to the gauge itself are for power. The screen shows one big reading in the middle, with oil and coolant temperature always visible at the bottom, and you swipe to change the main reading. At the moment that's coolant temp, oil temp, boost, RPM, speed and battery voltage, and I'm planning a few more like intake air temp, lambda, error codes/scanning and 0-60 times.

The interface is written with LVGL. Everything that's specific to a car (the custom PIDs, the gauge ranges and the warning colours) lives in a small profile file, so it should be easy to adapt to other cars. The first profile is for the Megane RS (250/265/275).

It's still a work in progress. The standard readings like coolant, boost, RPM and voltage work on any OBD2 car, but oil temperature isn't a standard PID on Renaults, so I'm still working out the right request for my ECU.

All the code is on the repo page.

Here's the repo below.

[VentPuck](https://github.com/ProfessorShroom/VentPuck)

### Changelog

{% capture changelog_ventpuck_content %}{% include ventpuck-readme.md %}{% endcapture %}
{{ changelog_ventpuck_content | markdownify }}
