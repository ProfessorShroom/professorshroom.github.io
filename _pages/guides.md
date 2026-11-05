---
layout: default
permalink: /guides/
title: Guides
nav: true
nav_order: 3
---

<div class="post">

  <div class="header-bar">
    <h1>Guides</h1>
  </div>

{% assign guides = "" | split: "" %}
{% for post in site.posts %}
{% assign tags_lc = post.tags | join: "|" | downcase | split: "|" %}
{% if tags_lc contains "guide" or tags_lc contains "guides" %}
{% assign guides = guides | push: post %}
{% endif %}
{% endfor %}

  <div class="guide-filter">
    <label class="filter-label" for="guideFilter">Filter guides</label>
    <input type="search" id="guideFilter" placeholder="Filter guides..." autocomplete="off">
  </div>

  <ul class="post-list">

    {% for post in guides %}

      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}

      <li>

        <div class="row">

  <div class="col-sm-9">

            <p class="post-meta">
              {% for category in post.categories %}
              <a class="category-pill" href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
              {% endfor %}
              <span>
                {{ post.date | date: '%B %d, %Y' }} &nbsp; &middot; &nbsp; {{ read_time }} min read
                {% if post.external_source %}
                &nbsp; &middot; &nbsp; {{ post.external_source }}
                {% endif %}
              </span>
            </p>

            <h3>
              {% if post.redirect == blank %}
                <a class="post-title" href="{{ post.guide_url | default: post.url | relative_url }}">{{ post.title }}</a>
              {% elsif post.redirect contains '://' %}
                <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
                <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              {% else %}
                <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
              {% endif %}
            </h3>

            <p>{{ post.description }}</p>

          </div>

  <div class="col-sm-3">
    {% if post.thumbnail %}
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="" loading="lazy" decoding="async">
    {% else %}
    <div class="thumb-placeholder" aria-hidden="true"><span>{{ post.categories | first | default: 'Guide' }}</span></div>
    {% endif %}
  </div>
</div>

      </li>

    {% endfor %}

    {% assign coming_soon = site.data.comingSoonGuides %}

    {% for guide in coming_soon %}
      <li class="coming-soon-guide">
        <h3>
          {{ guide.title }}
          <span class="coming-soon-badge">Coming soon!</span>
        </h3>

        {% if guide.description != blank %}
        <p class="coming-soon-description">{{ guide.description }}</p>
        {% endif %}
      </li>
    {% endfor %}

    {% if guides.size == 0 and coming_soon.size == 0 %}
      <li><p>No guides yet.</p></li>
    {% endif %}

  </ul>

  <p class="guide-filter-empty" id="guideFilterEmpty" hidden>No guides match that search.</p>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('guideFilter');
    var empty = document.getElementById('guideFilterEmpty');
    var items = document.querySelectorAll('.post-list li');
    if (!input) return;
    input.addEventListener('input', function () {
      var query = input.value.trim().toLowerCase();
      var visible = 0;
      for (var i = 0; i < items.length; i++) {
        var match = !query || items[i].textContent.toLowerCase().indexOf(query) !== -1;
        items[i].hidden = !match;
        if (match) visible++;
      }
      if (empty) empty.hidden = visible !== 0;
    });
  });
</script>
