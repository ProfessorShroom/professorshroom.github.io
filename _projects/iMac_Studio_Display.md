---
layout: page
title: iMac Studio Display (WIP)
description:
img: assets/img/imac/imac_open.png
importance: 2
category: IT Projects
comments: true
---

I recently acquired a free 2014 iMac with a faulty motherboard, but the screen worked fine. I've seen a few people convert them into what is basically just a Apple Studio Display. These screens are 60Hz 5120x2880, and look amazing so for a second monitor/graphics monitor it's perfect.

You basically have to remove everything from the iMac housing, motherboard, power supply, hard drive, and replace it with a display driver board, speaker crossboard (if you want speakers), fan controller (if you want a fan), and 12v or 24v power supply.

There's a few repos I found with different ways to mount all of this hardware, but none that I found were complete, and some were just wrong.

So I decided to use the good models I found with slight modifications, mostly just to reduce the excessive amount of filament they were using and just fix the broken models. I did this to try and make the most complete set of parts required to convert one of these monitors.

The electronics needed for this conversion are as below -  
[StoneTaskin JRY-W9CUHD-AA1](https://www.aliexpress.com/item/1005008468610951.html?spm=a2g0o.productlist.main.1.37281448MUl8NM&algo_pvid=e14e9177-5be9-45ba-b476-738a67919f5f&algo_exp_id=e14e9177-5be9-45ba-b476-738a67919f5f-0&pdp_ext_f=%7B%22order%22%3A%2227%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21GBP%2169.97%2168.06%21%21%2191.72%2189.22%21%402141122217534554597026748e728f%2112000045279184604%21sea%21UK%210%21ABX&curPageLogUid=Xij4n3CvaRLQ&utparam-url=scene%3Asearch%7Cquery_from%3A) - This part can vary based on your model of display, so check that.  
[MEAN WELL LRS-150-12](https://www.aliexpress.com/item/1005007262049231.html?spm=a2g0o.productlist.main.1.527d1a7fz4vovy&algo_pvid=34d571e6-5a96-491b-8d4e-ea4a7132c80e&algo_exp_id=34d571e6-5a96-491b-8d4e-ea4a7132c80e-0&pdp_ext_f=%7B%22order%22%3A%22129%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21GBP%2115.93%2114.02%21%21%21149.41%21131.49%21%402101062a17534554973518287e76ae%2112000039985364543%21sea%21UK%210%21ABX&curPageLogUid=UdMcs7AGJW98&utparam-url=scene%3Asearch%7Cquery_from%3A)  
[Speaker Crossover Filter](https://www.aliexpress.com/item/1005008109245362.html?spm=a2g0o.productlist.main.3.366c49f7mt2Roj&algo_pvid=32299de6-f161-420b-aa33-43b854ef3caa&algo_exp_id=32299de6-f161-420b-aa33-43b854ef3caa-2&pdp_ext_f=%7B%22order%22%3A%2217%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21GBP%2112.17%219.49%21%21%2115.95%2112.44%21%402102f0cc17534555417934180e611e%2112000043805736832%21sea%21UK%210%21ABX&curPageLogUid=EEjLKXOO1jbF&utparam-url=scene%3Asearch%7Cquery_from%3A)  
[Fan Controller with Temp Sensor](https://www.aliexpress.com/item/1005003088880149.html?srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=60796240033&aff_fcid=cd68bea516964b0cb310dd1954faf2eb-1728160457462-08098-_EjyFXYN&tt=MG&aff_fsk=_EjyFXYN&aff_platform=default&sk=_EjyFXYN&aff_trace_key=cd68bea516964b0cb310dd1954faf2eb-1728160457462-08098-_EjyFXYN&shareId=60796240033&businessType=ProductDetail&platform=AE&terminal_id=f727bea649d049149979153dccc08795&afSmartRedirect=y&gatewayAdapt=esp2glo)

I did do some modications to my parts, I cut the power button off of the supplied board as I just wired in the original iMac power button to serve that function, this allowed me to print my RAM cover which built in buttons and DisplayPort/USB C ports for a much cleaner look. I wired in the original iMac power plug to power the Meanwell power supply.

Here's the repo below.

[iMac 27” (2014-2019, Intel) A1419 Conversion to External 5K Monitor](https://www.thingiverse.com/thing:7100773)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/imac/imac_open.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/imac/imac_rear.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the iMac in it's current state with the 3D printed mounts installed. On the right, the rear panel for the monitor controls and display ports.
</div>
