---
---

{% for post in site.posts %}
<article>
<header>
<h1>{{ post.title }}</h1>
<p><time>{{ post.date | date_to_string }}</time></p>
</header>
<section>
{{ post.excerpt }}
</section>
<footer markdown="1">
[Read more...]({{ post.url }})
</footer>
</article>
{% endfor %}
