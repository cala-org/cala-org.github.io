---
title: CALA Annual Best Book Award
permalink: /reward/award/best-book/
layout: page
---
This Annual Best Book Award is to promote awareness of the best books of Chinese topics or literature written by authors of Chinese descent, in English or Chinese language, that are originally published in North America.

[Call for nomination]([/reward/award/best-book/nomination/](https://cala-org.netlify.app/admin/#/collections/news/entries/2024-01-16-2024-cala-best-book-award-call-for-nominations-%E7%BE%8E%E5%9B%BD%E5%8D%8E%E4%BA%BA%E5%9B%BE%E4%B9%A6%E9%A6%86%E5%91%98%E5%8D%8F%E4%BC%9A2024%E6%9C%80%E4%BD%B3%E5%9B%BE%E4%B9%A6%E5%A5%96%E6%8F%90%E5%90%8D%E5%BE%81%E9%9B%86))

[Nomination Form]([https://docs.google.com/forms/d/e/1FAIpQLSf6wSrcu4UXzPPhb7glsk5I8FdfYSJWkOueTX6wKCEILnt9pg/viewform?usp=send_form](https://docs.google.com/forms/d/e/1FAIpQLSc9Q9ILzExNoCjvpbIlgYZO6K8Z1ZwpQmPZdbPq6cWha4yRPA/viewform?usp=sf_link))

---

{% for year in (2008..2023) reversed %}
    {% if year == 2017 or year == 2016 or year == 2012 or year == 2011 %}
        {% continue %}
    {% else %}
+ [{{year}} Recipients](/scholarship/scholarship-award/best-book/{{year}}/)
    {% endif %}
{% endfor %}
