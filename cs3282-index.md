<frontmatter>
title: CS3282 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3282 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['KANG SU MIN', 'kkangs0226', 'A2', 'B3', 'C2'],
        ['Lee Chun Wei', 'chunweii', 'A3', 'B2', 'C1']
    ]},
    {name: 'MarkBind', students: [
        ['KOH RAYSON', 'raysonkoh', 'A2', 'B3', 'C3'],
        ['LIU YONGLIANG', 'tlylt', 'A1', 'B1', 'C2'],
        ['ONG JUN XIONG', 'ong6', 'A2', 'B1', 'C3'],
        ['Jovyn Tan Li Shyan', 'jovyntls', 'A3', 'B1', 'C1']
    ]},
    {name: 'RepoSense', students: [
        ['CHAN JUN DA', 'chan-j-d', 'A2', 'B3', 'C1'],
        ['HUANG CHENGYU', 'HCY123902', 'A1', 'B2', 'C3'],
        ['TAY YI HSUEN', 'yhtMinceraft1010X', 'A3', 'B3', 'C2'],
        ['Zhou Jiahao', 'Zhou-Jiahao-1998', 'A1', 'B1', 'C1']
    ]},
    {name: 'TEAMMATES', students: [
        ['FANG JUNWEI, SAMUEL', 'samuelfangjw', 'A3', 'B2', 'C1'],
        ['DAO NGOC HIEU', 'daongochieu2810', 'A1', 'B1', 'C2'],
        ['ZHAO JINGJING', 'zhaojj2209', 'A1', 'B2', 'C2'],
        ['WU QIRUI', 'hhdqirui', 'A2', 'B2', 'C3']
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
