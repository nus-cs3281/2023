<frontmatter>
title: CS3281&2 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3281 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['Sun Xinyu', 'Echomo-Xinyu'],
        ['Li Zhaoqi', 'Eclipse-Dominator'],
        ['Wong Chee Hong', 'cheehongw'],
        ['Vignesh Sankar Iyer', 'vigneshsankariyer1234567890']
    ]},
    {name: 'MarkBind', students: [
        ['Elton Goh Jun Hao', 'EltonGohJH'],
        ['LEE WEI, DAVID', 'itsyme'],
        ['Lee Hyung Woon', 'lhw-1'],
        ['Chan Yu Cheng', 'yucheng11122017']
    ]},
    {name: 'RepoSense', students: [
        ['Marcus Tang Xin Kye', 'MarcusTXK'],
        ['Charisma Kausar', 'ckcherry23'],
        ['Chang Si Kai', 'sikai00'],
        ['David Gareth Ong', 'vvidday']
    ]},
    {name: 'TEAMMATES', students: [
        ['Sim Sing Yee, Eunice', 'EuniceSim142'],
        ['Ong Jun Heng, Cedric', 'cedricongjh'],
        ['Dominic Lim Kai Jun', 'domlimm'],
        ['WU QIRUI', 'hhdqirui'],
        ['Qiu Jiasheng, Jason', 'jasonqiu212'],
        ['Kevin Foong Wei Tong', 'kevin9foong'],
        ['Gujar Parth Shailesh', 'parth-io'],
        ['Neo Wei Qing', 'weiquu']
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
  <span id="mod">cs3281</span>
</include>
  {% endfor %}
{% endfor %}
