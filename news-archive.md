---
layout: page
title: News Archive
---

{% assign posts = site.posts %}
<div class="h5">
Total: {{ posts | size }} posts
</div>

{% for post in posts %}
<div class="row mt-3">
  <div class="col-2">
    <span class="fst-italic text-center"><i class="fa-regular fa-calendar"></i>
      {{ post.date | date: "%b %d, %Y" }}
    </span>
  </div>
  <div class="col">
    <p class="mb-0">
      {{ post.title }}
    </p>
    <a href="{{ post.url }}" class="news-detail fs-6">
      Learn More
    </a>
  </div>
</div>
 {% endfor %}