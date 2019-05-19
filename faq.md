# Frequently Asked Questions

## Table of Contents

{% for item in site.faqs -%}
1. [{{item.title}}](#{% if item.title_slug %}{{item.title_slug}}{% else %}{{item.slug}}{% endif %})
{% endfor %}

{% for item in site.faqs -%}
## {{item.title}}
{% if item.link -%}
  See the [{% if item.page_title %}{{item.page_title}}{% else %}{{item.title}}{% endif %}](/features/{{item.slug}}) page.
{%- else -%}
  {%- include faqs/{{item.slug}}.md -%}
{% endif %}
{% endfor %}
