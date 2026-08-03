---
layout: project
title: Projects
permalink: /projects/
description: All of my past, future and present projects!
nav: true
nav_order: 3
display_categories: [Car Projects, IT Projects, Software, Web Projects, Other Projects]
horizontal: false
---

{% if site.enable_project_categories and page.display_categories %}

  <div class="projects-board">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-4 justify-content-center">
      {% for category in page.display_categories %}
        {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}

        <div class="col-auto">
          <section class="project-category-block mx-auto">
            <h2 class="category">{{ category }}</h2>

            <div class="project-category-list">
              {% for project in categorized_projects %}
                {% include projects.liquid %}
              {% endfor %}
            </div>
          </section>
        </div>
      {% endfor %}
    </div>

  </div>
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}
{% for project in sorted_projects %}
{% include projects_horizontal.liquid %}
{% endfor %}
{% else %}
{% for project in sorted_projects %}
{% include projects.liquid %}
{% endfor %}
{% endif %}
{% endif %}
