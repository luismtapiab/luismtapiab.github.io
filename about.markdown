---
layout: default
altTitle: Luis Miguel Tapia Benitez
title: About me
link: About me
permalink: /about/
---
<header class="post-header">

<img class="profile-picture-only" width=200 src="{{baseurl}}/assets/images/LuisTapia.png" alt="Luis Tapia picture">
    <h1 class="post-title">{{ page.altTitle | escape }}</h1>
    <p>{{ site.data.cv.contact.location }} </p>

    <p>Github: <a href="{{ site.data.cv.contact.github }}">luismtapiab</a> </p>
    <p><a href="tel:{{ site.data.cv.contact.phone }}">{{ site.data.cv.contact.phone }}</a> </p>
    <p>{{ site.data.cv.contact.email }} </p>



</header>
## Technical Skills

**Languages:** {% for skill in site.data.cv.skills.lang %}{{ skill }}{% unless forloop.last %}, {% endunless %}{% endfor %}

**Tools:** {% for skill in site.data.cv.skills.tools %}{{ skill }}{% unless forloop.last %}, {% endunless %}{% endfor %}


## Experience
{% for job in site.data.cv.experience %}
<div class="header">
<h3>{{ job.title }}</h3> 
<p>{{ job.location }}. {{ job.duration }}</p>
</div>
{% if job.institution %} {{ job.institution }} {% endif %}
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
<div class="header">
  <h3>{{ edu.degree }}</h3> 
  <p>{{ edu.graduation_date }}</p>
</div>
<div class="space-between">	
  <p>{{ edu.institution }}</p>
  <p>{{ edu.location }}</p>
</div>
  {% if edu.relevant_courses %}
  - **Relevant Courses:** {% for course in edu.relevant_courses %} {{ course }}{% unless forloop.last %}, {% endunless %} {% endfor %}
  {% endif %}
  {% if edu.thesis %}
  - **Thesis:** {{ edu.thesis }}
  {% endif %}  
{% endfor %}
<div class="space-between">
<div>
<h3> Languages </h3>
{% for language in site.data.cv.other.languages %}
  {{ language }} {% unless forloop.last %}, {% endunless %}
{% endfor %}
</div>
<div>
<h3> Interests </h3>
 
  {% for interest in site.data.cv.other.interests %}
    {{ interest }} {% unless forloop.last %}, {% endunless %}
  {% endfor %}

</div>  
</div>
