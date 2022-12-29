---
layout: index
---

<ul class="list-unstyled">
    {% for post in site.posts limit: 5 %}
      <li class="d-flex row col-12">
      <h3 class="d-flex">
        <span class="col-3 fw-light fst-italic text-center"><i class="fa-regular fa-calendar"></i>
            {{ post.date | date: "%b %d, %Y" }}
        </span>
        <div class="col mb-3">
          <p class="mb-0">
            {{ post.title }}
          </p>
          <a href="{{ post.url }}" class="news-detail fs-6">
            Learn More
          </a>
        </div>
        </h3>
      </li>
    {% endfor %}
</ul>

<div class="text-center">
<a class="btn btn-outline-primary" href="/news-archive"><span class="h5">News Archive</span></a>
</div>
