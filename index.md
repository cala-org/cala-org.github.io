---
layout: index
---

<ul class="list-unstyled">
    {% for post in site.posts %}
      <li class="row col-12">
      <h3 class="d-flex">
        <span class="col-3 fw-lighter fst-italic text-center"><i class="fa-regular fa-calendar"></i>
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
