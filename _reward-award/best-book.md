---
title: CALA Annual Best Book Award
permalink: /reward/award/best-book/
layout: page
---
This Annual Best Book Award is to promote awareness of the best books of Chinese topics or literature written by authors of Chinese descent, in English or Chinese language, that are originally published in North America.

[Call for nomination](/reward/award/best-book/nomination/)

[Nomination Form]()

---

{% for year in (2008..2022) reversed %}
    {% if year == 2017 or year == 2016 or year == 2012 or year == 2011 %}
        {% continue %}
    {% else %}
+ [{{year}} Recipients](/scholarship/scholarship-award/best-book/{{year}}/)
    {% endif %}
{% endfor %}