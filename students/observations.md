<frontmatter>
pageNav: 2
</frontmatter>
{% from "cs3282-index.md" import projects %}

# Observations from External Projects

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
<include src="{{ student[1] }}/observations.md" />
</box>

  {% endfor %}
{% endfor %}
