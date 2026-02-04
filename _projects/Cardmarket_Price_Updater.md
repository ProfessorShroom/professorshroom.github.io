---
layout: page
title: Cardmarket Price Updater
description:
img: assets/img/yugioh/cardmarket_price_updater_logo.png
importance: 2
category: IT Projects
comments: true
---

I collect Yu-Gi-Oh! cards on and off, I have since I was a kid. I recently wanted to complete my set of every Red-Eyes Black Dragon card ever printed after getting the NKC1-EN002.

So to help do that I wrote [this program](https://github.com/ProfessorShroom/Cardmarket-Price-Updater) that will get prices based on the current prices on [Cardmarket](https://cardmarket.com) which is a European version of [TCGPlayer](https://www.tcgplayer.com/).

It's pretty easy to setup, if you have a big list of cards like I did it will take a while to go through initially but after that is all done it's pretty useful.

The program will get all the details it needs from a provided Excel shreadsheet that you can fill out and add to yourself, I use it for every single Red-Eyes Black Dragon printed in English, along with a few OCG cards that I want. It then writes to that sheet with updated prices and also the date it got the price so you know how current it is. Currently it gets an average price from all printings (1st Edition, Unlimited, etc.) but I will look to replace that with just 1st Edition in the future as most collectors just care about that.

All the instructions are on the repo page.

Here's the repo below.

[Cardmarket Price Updater](https://github.com/ProfessorShroom/Cardmarket-Price-Updater)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/yugioh/cardmarket_price_updater.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/yugioh/nkc1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the GUI of my program. On the right, the Nike collaboration card NKC1-EN002 that made me want to complete the Red-Eyes collection.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/yugioh/cardmarket_excel_sheet.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The middle the Excel sheet that the program will get info from and write prices to.

### Changelog

{% include cardmarket-price-updater-readme.md %}
