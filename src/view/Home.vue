<script setup lang="ts">
const features = [
  {
    name:'ATS friendly Resume',
    description:'Build resumes that are friendly to applicant tracking system'
  },
  {
    name:'Multiple Templates',
    description:'Pick your favorite design from multiple templates provided'
  },
  {
    name:'Easy to use',
    description:'Build resumes in just a few clicks'
  },
  {
    name: 'Embedded fonts',
    description:'Available embedded fonts to pick from'
  }
]
</script>

<template>
  <header class="p-5 border-b border-gray-800">
   <nav class="flex justify-between items-center ">
     <router-link to="/">
       <h1 class="font-bold">GRAND RESUME</h1>
     </router-link>
     <ul>
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
  <main  class="max-w-[1280px] mx-auto">
    <section class="py-14 px-3 md:px-10">
      <div>
        <div class="grid lg:grid-cols-2 gap-2">
          <div class="text-center lg:text-start">
            <h1 class="text-5xl md:text-6xl font-bold md:leading-[80px]">The Resume that gets you the Job</h1>
            <p class="text-2xl my-2 leading-10 font-light">Use our resume builder to builder ATS friendly resume. Stand up out amongst the crowd</p>
            <div class="py-3 flex justify-center lg:justify-start">
              <router-link to="/resume-app">
                <button class="bg-sky-600 hover:bg-sky-700 py-4 px-10 rounded-xl flex gap-3 items-center">
                  <span>Get Started</span>
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>

                </button>
              </router-link>
            </div>
          </div>

          <div>
            <div class="overflow-hidden rounded-xl">
              <img :src="'images/lady-smiling-large-screen.jpg'" alt="Lady writing resume" class="rounded-xl hover:scale-110 transition-all duration-500">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features section-->

    <section class="my-10">
      <h2 class="text-2xl font-bold">Features</h2>
      <div class="my-5">
        <ul class="flex gap-5 flex-wrap list-disc">
          <li v-for="(feature, index) in features" :key="index" class="flex-grow">
            <h3 class="text-lg font-bold text-sky-600 flex gap-2">
              <span> {{feature.name}}</span>
            </h3>
            <p class="text-sm my-2">{{feature.description}}</p>
          </li>
        </ul>
      </div>

    </section>

    <section class="my-10">
      <h2 class="text-2xl font-bold">About Grand Resume</h2>
      <div class="my-5 space-y-3">
        <p>Most Job seekers struggle to create resume that leave impression on recruits.
          They lack the basic understanding of Applicant tracking System (ATS) and how it works. Consequently ,
          great and qualified candidates miss job opportunities. I too struggled in the beginning and that is prompted me
          to build a resume builder. This online resume will remove the hassle
          of creating resumes to just keying in your info and downloading an ATS friendly resume</p>
        <p>The Grand resume has been built by Joshua Nyawach. Joshua is an enthusiastic software developer with a
        nudge for front-end development</p>
        <p>Follow me on:</p>
        <ul class="">
          <li>X: <a class="text-sky-600" href="https://twitter.com/JNyawach">@JNyawach</a> </li>
          <li>LinkedIn: <a class="text-sky-600" href="https://www.linkedin.com/in/joshua-nyawach/">Joshua Nyawach</a> </li>
          <li>Github: <a class="text-sky-600" href="https://github.com/jnyawach">Jnyawach</a></li>
          <li>Project repository: <span class="text-sky-600">https://github.com/Jnyawach/cv-builder</span></li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>