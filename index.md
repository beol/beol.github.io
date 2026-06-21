---
layout: home
title: Leo Laksmana | Engineering Architect & AI Practitioner
---

<section class="hero">
  <h1>Leo Laksmana</h1>
  <p>Engineering leader specializing in high-performing teams and agentic AI integration. Transforming engineering organizations through automation, culture, and technical excellence.</p>
</section>

<section class="pillars">
  <h2>Technical Pillars</h2>
  {% for pillar in site.data.pillars %}
  <div class="pillar">
    <h3>{{ pillar.title }}</h3>
    <p>{{ pillar.description }}</p>
  </div>
  {% endfor %}
</section>

<section class="transformations">
  <h2>Signature Transformations</h2>
  {% for trans in site.data.transformations %}
  <div class="transformation">
    <h3>{{ trans.title }}</h3>
    <p class="context">{{ trans.context }}</p>
    <ul>
      {% for detail in trans.details %}
      <li>{{ detail }}</li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>

<section class="timeline">
  <h2>Professional Timeline</h2>
  
  <div class="event">
    <div class="date">2026 — Present</div>
    <div class="details">
      <h4>Senior Director</h4>
      <p>Visa · Trust & Velocity Engineering · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2022 — 2026</div>
    <div class="details">
      <h4>Director → Senior Director</h4>
      <p>Visa · Visa Installments · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2019 — 2021</div>
    <div class="details">
      <h4>Senior Staff Software Engineer → Director</h4>
      <p>Visa · Issuer & Consumer Services Platform · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2018 — 2019</div>
    <div class="details">
      <h4>Senior Staff Software Engineer</h4>
      <p>Visa · Visa Checkout · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2016 — 2018</div>
    <div class="details">
      <h4>Senior Staff Systems Engineer → Lead Systems Engineer</h4>
      <p>Visa · SCM Open Systems · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2014 — 2016</div>
    <div class="details">
      <h4>Senior Systems Engineer</h4>
      <p>Quantcast · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2012 — 2014</div>
    <div class="details">
      <h4>Lead Software Engineer</h4>
      <p>Visa · V.me · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2010 — 2012</div>
    <div class="details">
      <h4>Staff Systems Engineer → Senior Staff Systems Engineer</h4>
      <p>Visa · SCM Open Systems · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2009 — 2010</div>
    <div class="details">
      <h4>Systems Engineer</h4>
      <p>Barclays Capital · Singapore</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2004 — 2009</div>
    <div class="details">
      <h4>Co-Founder & CTO</h4>
      <p>PT SkyEight Indonesia & Koprol.com</p>
    </div>
  </div>

  <div class="event">
    <div class="date">2001 — 2004</div>
    <div class="details">
      <h4>Software Engineer</h4>
      <p>Ariba · Enterprise Procurement Software</p>
    </div>
  </div>
  
</section>
