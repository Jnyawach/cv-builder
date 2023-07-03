<template>

  <div class="lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-[600px] lg:flex-col bg-gray-800 shadow-xl">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 pb-4 ">
        <div class="flex h-16 shrink-0 items-center">

         <h1>LOGO </h1>

        </div>

        <div class="h-screen overflow-y-auto p-2">
          <div v-if="resumeStore.step===1">
            <resume-templates></resume-templates>
          </div>
          <div v-if="resumeStore.step===2">
            <personal-information></personal-information>
          </div>
          <div v-if="resumeStore.step===3">
           <professional-summary></professional-summary>
          </div>
          <div v-if="resumeStore.step===4">
            <work-experience></work-experience>
          </div>

          <div v-if="resumeStore.step===5">
            <education-details></education-details>
          </div>
          <div v-if="resumeStore.step===6">
            <skills></skills>
          </div>
          <div v-if="resumeStore.step===7">
           <course-details></course-details>
          </div>
          <div v-if="resumeStore.step===8">
            <additional-sections></additional-sections>
          </div>
          <div v-if="resumeStore.step===9">
            <div  class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
              <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back to edit</button>
              <button  class="btn-primary" type="button">Download</button>
            </div>
          </div>
        </div>

      </div>
      <!--button-->
    <div>
        <div v-if="resumeStore.step == 1" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Personal Info</button>
      </div>

      <div v-if="resumeStore.step === 2" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Professional Summary</button>
      </div>
      <div v-if="resumeStore.step === 3" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Work Experience</button>
      </div>
      <div v-if="resumeStore.step === 4" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Education</button>
      </div>
      <div v-if="resumeStore.step === 5" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Skills</button>
      </div>
      <div v-if="resumeStore.step === 6" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Courses & Certifications</button>
      </div>
      <div v-if="resumeStore.step === 7" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Additional sections</button>
      </div>

      <div v-if="resumeStore.step === 8" class="border-t border-gray-600 py-2 px-3 gap-2 flex justify-end drop-shadow">
        <button v-if="resumeStore.step > 1" @click="resumeStore.reduceStep()" class="btn-primary-outline" type="button">Back</button>
        <button @click="resumeStore.addStep()" class="btn-primary" type="button">Next: Preview & Download</button>
      </div>
      </div>
    </div>


  <div class="lg:pl-[600px]">
    <div class="sticky top-3 z-40 flex h-16 shrink-0 items-center gap-x-4 w-full px-4  sm:gap-x-6 sm:px-6 lg:px-8">
      <navbar></navbar>
    </div>

    <main class="py-10 z-10">
      <div class="px-4 sm:px-6 lg:px-8 text-gray-800">
        <slot></slot>
      </div>
    </main>
  </div>

</template>

<script setup lang="ts">
import Navbar from "./navbar.vue";
import ResumeTemplates from "../support-widgets/resume-templates.vue";
import PersonalInformation from "../support-widgets/personal-information.vue";
import WorkExperience from "../support-widgets/work-experience.vue";
import {useResumeStore} from "../../scripts/resumeStore";
import EducationDetails from "../support-widgets/education-details.vue";
import CourseDetails from "../support-widgets/course-details.vue";
import Skills from "../support-widgets/skills.vue";
import AdditionalSections from "../support-widgets/additional-sections.vue";
import ProfessionalSummary from "../support-widgets/professional-summary.vue";

const resumeStore =useResumeStore()

</script>

<style scoped>

</style>