<frontmatter>
title: CS3281 - Knowledge gained from Projects
pageNav: 2
</frontmatter>
{% from "index.md" import projects %}

# Knowledge gained from Projects

{% for project in projects %}
**{{ project.name }}:**
{% for student in project.students %}* [{{ student[0] }}](#{{ student[0] | lower | replace(' ', '-') | replace(',', '')}})
{% endfor %}
{% endfor %}

{% for project in projects %}
# {{ project.name }}
  {% for student in project.students %}

<box>

## {{ student[0] }}
<include src="{{ student[1] }}/knowledge.md" />
</box>

  {% endfor %}
{% endfor %}
