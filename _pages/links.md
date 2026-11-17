---
layout: default
title: Links
permalink: /links/
description: "Hey, I’m ProfessorShroom! 🍄 I’m a computer technician, gamer, car enthusiast, collector, occasional designer and coder."
nav: true
nav_order: 6
---

<div class="links-page">
  <header class="links-header">
    {% include figure.liquid loading="eager" path="assets/img/professorshroom.png" class="links-avatar rounded-circle" sizes="128px" alt="ProfessorShroom" width="128" height="128" %}
    <h1>{{ site.title }}</h1>
    <p>{{ page.description }}</p>
  </header>

{% for group in site.data.links %}
<section class="links-section">
<h2>{{ group.section }}</h2>
<ul>
{% for link in group.items %}
{% assign link_image = link.image %}
{% assign link_description = link.description %}
{% if link.project %}
{% assign project = site.projects | where: 'slug', link.project | first %}
{% assign link_image = link_image | default: project.img %}
{% assign link_description = link_description | default: project.description %}
{% endif %}
{% if link.url contains '://' %}
{% assign link_href = link.url %}
{% else %}
{% assign link_href = link.url | relative_url %}
{% endif %}
<li>
<a class="links-item{% if link.style %} links-item--{{ link.style }}{% endif %}" href="{{ link_href }}">
<span class="links-icon" aria-hidden="true">
{% if link_image %}
{% include figure.liquid path=link_image sizes="48px" alt="" width="48" height="48" %}
{% elsif link.fa %}
<i class="{{ link.fa }}"></i>
{% endif %}
</span>
<span class="links-text">
<span class="links-title">{{ link.title }}</span>
{% if link_description %}
<span class="links-description">{{ link_description }}</span>
{% endif %}
</span>
<i class="fa-solid fa-arrow-right links-arrow" aria-hidden="true"></i>
</a>
</li>
{% endfor %}
</ul>
</section>
{% endfor %}
</div>
