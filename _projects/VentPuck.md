---
layout: project
date: 2026-10-22
updated: 2026-11-09
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

It's built around an ESP32-S3 with a 1.75" AMOLED round touch display with a resolution of 466x466. The car's data comes over any Bluetooth OBD2 adapter that supports BLE, so the only wires to the gauge itself are for power. The home screen shows four readings you choose, and you swipe between single reading screens for coolant temp, oil temp, boost, RPM, speed and battery voltage, with oil and coolant temperature always visible at the bottom. There is also a 0-60 timer that saves your best time, and a fault codes screen that can scan and clear codes.

The interface is written with LVGL, with a smooth slide between screens, a dark mode with a choice of accent colours, and a boot animation that can use your own logo. Press and hold on any screen for the settings menu, where you can change the car, units, brightness and more.

Everything that's specific to a car lives in a vehicle setting, so it's easy to adapt to other cars. The Megane 3 RS is the first, and it reads oil temperature, boost, battery voltage and barometric pressure straight from the engine ECU. A generic OBD2 mode works on other cars, and the BMW E8x, Clio 4 RS and Megane 4 RS are in as well while people test them.

VentPuck can also update itself over Wi-Fi from the GitHub releases, with a Release channel and a Beta channel for test builds, so anyone testing doesn't have to keep flashing it over USB.

It's still a work in progress, and I'm planning a few more things like intake air temp and fault code descriptions.

All the code is on the repo page.

Here's the repo below.

[VentPuck](https://github.com/ProfessorShroom/VentPuck)

### Changelog

{% capture changelog_ventpuck_content %}{% include ventpuck-readme.md %}{% endcapture %}
{{ changelog_ventpuck_content | markdownify }}
