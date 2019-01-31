# Frequently Asked Questions

## Table of Contents

{% for item in site.faqs -%}
1. [{{item.title}}](#{{item.slug}})
{% endfor %}

{% for item in site.faqs %}
## {{item.title}}
{% include faqs/{{item.slug}}.md %}
{% endfor %}
