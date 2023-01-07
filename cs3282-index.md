<frontmatter>
title: CS3282 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3282 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['KANG SU MIN', 'kkangs0226', 'A2', 'B2', 'C2'],
        ['Lee Chun Wei', 'chunweii', 'A1', 'B1', 'C1']
    ]},
    {name: 'MarkBind', students: [
        ['KOH RAYSON', 'raysonkoh', 'A2', 'B2', 'C2'],
        ['LIU YONGLIANG', 'tlylt', 'A1', 'B1', 'C1'],
        ['ONG JUN XIONG', 'ong6', 'A2', 'B2', 'C2'],
        ['Jovyn Tan Li Shyan', 'jovyntls', 'A2', 'B2', 'C2']
    ]},
    {name: 'RepoSense', students: [
        ['CHAN JUN DA', 'chan-j-d', 'A2', 'B2', 'C2'],
        ['HUANG CHENGYU', 'HCY123902', 'A1', 'B1', 'C1'],
        ['TAY YI HSUEN', 'yhtMinceraft1010X', 'A1', 'B1', 'C1'],
        ['Zhou Jiahao', 'Zhou-Jiahao-1998', 'A1', 'B1', 'C1']
    ]},
    {name: 'TEAMMATES', students: [
        ['FANG JUNWEI, SAMUEL', 'samuelfangjw', 'A2', 'B2', 'C2'],
        ['DAO NGOC HIEU', 'daongochieu2810', 'A1', 'B1', 'C1'],
        ['ZHAO JINGJING', 'zhaojj2209', 'A1', 'B1', 'C1'],
        ['WU QIRUI', 'hhdqirui', 'A2', 'B2', 'C2']
    ]}
] %}

{% for project in projects %}
**{{ project.name }}:**
{% for student in project.students %}* [{{ student[0] }}](#{{ student[0] | lower | replace(' ', '-') | replace(',', '')}})
{% endfor %}
{% endfor %}

{% for project in projects %}
# {{ project.name }}
  {% for student in project.students %}

<include src="students/{{ student[1] }}/studentInfo.md" boilerplate >
  <span id="name">{{ student[0] }}</span>
  <span id="folder">{{ student[1] }}</span>
  <span id="mod">cs3282</span>
</include>
  {% endfor %}
{% endfor %}
