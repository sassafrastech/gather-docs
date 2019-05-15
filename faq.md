# Frequently Asked Questions

## Table of Contents

{% for item in site.faqs -%}
1. [{{item.title}}](#{{item.slug}})
{% endfor %}

{% for item in site.faqs -%}
## {{item.title}}
{% if item.link -%}
  See the [{{item.title}}](/features/{{item.slug}}) page.
{%- else -%}
  {%- include faqs/{{item.slug}}.md -%}
{% endif %}
{% endfor %}
