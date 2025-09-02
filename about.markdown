---
layout: page
title: About me
permalink: /about/
---

<div class="contact-info">
<img class="profile-picture" width=200 src="{{baseurl}}/assets/images/LuisTapia.png" alt="Luis Tapia picture">
{{ site.data.cv.contact.location }} <br>

Github: <a href="{{ site.data.cv.contact.github }}">luismtapiab</a> <br>
<a href="tel:{{ site.data.cv.contact.phone }}">{{ site.data.cv.contact.phone }}</a> <br>
{{ site.data.cv.contact.email }} <br>
</div>

### Technical Skills

{% for skill in site.data.cv.skills.technical %}{{ skill }}{% unless forloop.last %}, {% endunless %}{% endfor %}


## Experience
{% for job in site.data.cv.experience %}
### {{ job.title }}
{% if job.institution %} - **Institution:** {{ job.institution }} {% endif %}
- **Location:** {{ job.location }}
- **Duration:** {{ job.duration }}
- **Responsibilities:**
  {% for responsibility in job.responsibilities %}
  - {{ responsibility }}
  {% endfor %}
{% endfor %}

## Achievements
{% for achievement in site.data.cv.achievements %}
- {{ achievement }}
{% endfor %}

## Education
{% for edu in site.data.cv.education %}
### {{ edu.degree }}
- **Institution:** {{ edu.institution }}
- **Location:** {{ edu.location }}
- **Graduation Date:** {{ edu.graduation_date }}
  {% if edu.relevant_courses %}
  - **Relevant Courses:** {% for course in edu.relevant_courses %} {{ course }}{% unless forloop.last %}, {% endunless %} {% endfor %}
  {% endif %}
  {% if edu.thesis %}
  - **Thesis:** {{ edu.thesis }}
  {% endif %}  
{% endfor %}

### Languages
{% for language in site.data.cv.skills.languages %}
- {{ language }}
{% endfor %}

### Interests

{% for interest in site.data.cv.skills.interests %}
- {{ interest }}
{% endfor %}  

