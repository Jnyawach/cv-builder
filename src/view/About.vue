<script setup lang="ts">

</script>

<template>
  <header class="p-5 border-b border-gray-800">
    <nav class="flex justify-between items-center ">
      <router-link to="/">
        <h1 class="font-bold">GRAND RESUME</h1>
      </router-link>
      <ul class="flex gap-3 items-center">
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/resume-app">
            <button class="btn-primary">
              Build your resume
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
<main class="max-w-[1280px] mx-auto">
  <section class="prose max-w-full text-gray-300 text-md">
    <h1>The Overdue Resume Builder</h1>
    <img src="/images/resume-builder.png" alt="The Grand Resume Builder">
    <p>
      In 2021, I conceived a project to create and develop an online resume builder. Then I wasn’t a developer,
      apart from the interest and undying passion. I had very little knowledge of software development.
      As a challenge to keep my learning progress, I decided to develop an online resume builder.
    </p>
    <p>
      I wanted to develop an applicant-tracking-friendly resume builder incorporating multiple templates
      and designs with commercial intent. As easy as it sounded then, I lacked the necessary skills in software
      development to accomplish that. Besides, my vision then as a developer was narrower and I needed to be in a
      position to conceive the full picture and scope of the project. I have decided to complete the overdue project
      without the commercial intent but to make it an open source. Grand Resume is an online resume builder that
      adopts ATS-friendly formats to generate high-quality resumes for job seekers. Composing a great resume is
      already difficult, making it keyword-rich and ATS-friendly is even worse. The grand resume makes it as easy
      as typing in your details and downloading an optimized resume.
    </p>

    <h2>The architecture</h2>
    <p>The resume builder has been hosted on Netlify and relies on Netlify architecture to serve static files.
    The builder relies on client browser to persist and read data. THis eliminated the need for creating
    a backend API to read and store data.</p>
    <img src="/images/resume-architecture.png" alt="The Grand Resume Builder">
    <p>I picked Vue JS and typescript for front-end development. Vue JS gives intuitive and readily available
      reactivity needed for the project. Additionally, I have been learning Vue JS for quite some time and
      wanted to test the depth of my knowledge in the framework. I picked typescript because of its strict type declarations. I find it interesting working with types and interfaces on the front end. Currently, the project doesn’t utilize any backend API to retrieve and store data.
      The application utilizes local storage to persist and read data. This was an intentional decision never
      to store user any data on the server side.
    </p>
    <p>
      The most challenging part of the project was working with Typescript. At first, I was not able to build
      the project for production because of incorrect type and interface definitions. This prompted me to go
      through the typescript documentation and a series of videos on YouTube to understand the correct implementation.
      During the initial phases of the project, I faced challenges storing JSON objects on the local storage.
      I missed a crucial point about local storage only being able to
      handle string data which I realized after consultation with my peers.
    </p>
    <p>
      The most challenging part of the project was working with Typescript. At first, I was not able to build
      the project for production because of incorrect type and interface definitions. This prompted me to go through the typescript documentation and a series of videos on YouTube to understand the correct implementation. During the initial phases of the project, I faced challenges storing JSON objects on the local storage. I missed a crucial point about local storage only being able to
      handle string data which I realized after consultation with my peers
    </p>
    <p>
      Throughout the project, I have acquired handy skills in typescript and Vue JS.
      I have always been eager to learn one of the fronted frameworks for JavaScript. I found this as an
      opportunity to learn and test my skills in Vue JS. I aspire to be a full front-end engineer, and this
      project has proven to me that it is a possible goal that I can pursue. Initially, I had a cold foot since
      I never studied engineering in college, I felt it would be impossible to develop and professional network
      and get a job in the tech sector. ALX has given me the professional network that I needed to kickstart my
      career in technology.

    </p>
    <p>
      My name is Joshua Nyawach. I started as an urban planner before diving into tech.
      I started out by building simple projects using HTML and CSS before diving into deeper depths like PHP,
      Laravel, and Vue Js as Javascript frameworks. I find tech so interesting and challenging at the same time.
      The profession is so volatile with technologies changing and advancing overnight. I believe this is why I love tech the most. Being on the next big thing in the industry. I also love to help clients solve their challenges in more efficient and cost-effective ways.
      You can follow me on

    </p>



  </section>
  <div class="my-3">
    <p>
      Author: Joshua Nyawach<br>
      Date: May 15,2024
    </p>
    <ul class="flex gap-2 my-3">
      <li>
        <a href="https://twitter.com/JNyawach">
          <svg class="h-5 w-5 text-sky-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joshua-nyawach/">
          <svg class="h-5 w-5 text-sky-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714zM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"/>
          </svg>

        </a>
      </li>
      <li>
        <a href="https://github.com/jnyawach">
          <svg class="h-5 w-5 text-sky-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"/>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</main>
</template>

<style scoped>

</style>