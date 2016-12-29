---
---

{% for post in site.posts %}
<h2>{{ post.title }}</h2>

{{ post.excerpt }}
[Read more...]({{ post.url }})
{% endfor %}
