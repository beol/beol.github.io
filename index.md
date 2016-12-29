---
---

{% for post in site.posts %}
## {{ post.title }}
<p><small>{{ post.date | date_to_string }}</small></p>

{{ post.excerpt }}
[Read more...]({{ post.url }})
{% endfor %}
