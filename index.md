---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: index
---

<ul class="list-unstyled">
    {% for post in site.posts %}
      <li class="row col-12">
      <h2 class="d-flex">
        <span class="col-3 fw-lighter fst-italic text-center"><i class="fa-regular fa-calendar"></i>
            {{ post.date | date: "%b %d, %Y" }}
        </span>
        <div class="col mb-5">
          <p class="mb-0">
            {{ post.title }}
          </p>
          <a href="{{ post.url }}" class="news-detail fs-6">
            Learn More
          </a>
        </div>
        </h2>
      </li>
    {% endfor %}
</ul>
