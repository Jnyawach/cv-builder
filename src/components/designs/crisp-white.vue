
<script setup lang="ts">
import {useResumeStore} from "../../scripts/resumeStore";
import moment from "moment";
import {useFonts} from "../../scripts/useFonts";
const resumeStore=useResumeStore()


</script>

<template>

<div class="flex justify-center ">.
  <!--Personal information section-->
  <div style="width: 210mm" class="text-gray-950 bg-white "  :style="`font-size: ${resumeStore.fontSize}; font-family: ${resumeStore.font.identifier??'inter'};`">
    <div v-if="resumeStore.personalInformation" class="text-center py-7">
      <h1  class="text-4xl my-1 font-bold">{{resumeStore.personalInformation.name}} {{resumeStore.personalInformation.surname}}</h1>
      <h3 class="text-xl font-semibold">{{resumeStore.personalInformation.profession}}</h3>
      <p class="my-2 font-medium text-sm">
        <span v-if="resumeStore.personalInformation.email"><span class="font-medium" :style="`color:${resumeStore.template.primary}`">Email: </span>{{resumeStore.personalInformation.email}}</span>
        <span v-if="resumeStore.personalInformation.phone" class="ml-2"><span class="font-medium" :style="`color:${resumeStore.template.primary}`">Phone: </span>{{resumeStore.personalInformation.phone}}</span>
        <span v-if="resumeStore.personalInformation.linkedin" class="ml-2"><span class="font-medium" :style="`color:${resumeStore.template.primary}`">Linkedin: </span>{{resumeStore.personalInformation.linkedin}}</span>
      </p>
    </div>

    <!-- Professional summary section-->
    <div class="my-5 px-5">
      <p>{{resumeStore.professionalSummary}}</p>
    </div>

    <!-- Work experience section-->
    <section class="px-5 py-2" v-if="resumeStore.workExperience.length">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Experience</h3>
      <hr class="border-t border-black">
      <div class="py-2" v-for="role in resumeStore.workExperience" :key="role.id">
        <div class="flex justify-between">
          <h5 class="uppercase font-medium">{{role.title}} </h5>
          <h5 class="font-bold"><span>{{moment(role.start_date).format('MMM YYYY')}}</span>- <span v-if="role.current_job">Current</span><span v-else>{{moment(role.end_date).format('MMM YYYY')}}</span></h5>
        </div>
        <h6 class="font-bold">{{role.employer}}-{{role.city}}, {{role.country}}</h6>
        <div v-html="role.description" class="prose max-w-full prose-ul:list-disc prose-gray-950 leading-normal" :style="`font-size: ${resumeStore.fontSize}`"></div>
      </div>
    </section>

    <!-- Eduction history section-->
    <section class="px-5 py-2" v-if="resumeStore.educationHistory.length">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Education</h3>
      <hr class="border-t border-black">
      <div class="py-2" v-for="education in resumeStore.educationHistory" :key="education.id">
        <div class="flex justify-between">
          <h5 class="uppercase font-medium">{{education.study_field}} </h5>
          <h5 class="font-bold"><span>{{moment(education.start_date).format('MMM YYYY')}}</span>- <span v-if="education.current_education">Current</span><span v-else>{{moment(education.end_date).format('MMM YYYY')}}</span></h5>
        </div>
        <h6 class="font-bold">{{education.name}}-{{education.location}}</h6>
        <div v-html="education.description" class="prose max-w-full prose-ul:list-disc prose-gray-950 leading-normal" :style="`font-size: ${resumeStore.fontSize}`"></div>
      </div>
    </section>
    <!-- Skills section-->
    <section class="px-5 py-2" v-if="resumeStore.skills.length">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Skills</h3>
      <hr class="border-t border-black">
      <div class="my-2 flex gap-3 flex-grow flex-wrap">
        <div v-for="skill in resumeStore.skills">
          <span class="">&#8226; {{skill.name}}</span>
        </div>

      </div>
    </section>

    <!-- courses section-->
    <section class="px-5 py-2" v-if="resumeStore.courses.length">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Courses & Certifications</h3>
      <hr class="border-t border-black">
      <div class="my-2">
        <div>
          <ul class="space-y-2">
            <li v-for="course in resumeStore.courses">
            <span class="">
              {{course.course_name}} at {{course.organization}}:
              <span class="font-bold">{{moment(course.start_date).format('MMM YYYY')}}-{{moment(course.end_date).format('MMM YYYY')}}</span>
            </span>

            </li>
          </ul>
        </div>

      </div>
    </section>

    <!--Languages section-->

    <section class="px-5 py-2" v-if="resumeStore.languages.length">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Languages</h3>
      <hr class="border-t border-black">
      <div class="my-2">
        <div>
          <ul class="flex gap-3">
            <li class="" v-for="language in resumeStore.languages">
              <span><span class="font-medium ">{{language.name}}</span>: {{language.level}}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Hobbies-->
    <section class="px-5 py-2" v-if="resumeStore.hobbies && resumeStore.hobbies.name">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Hobbies</h3>
      <hr class="border-t border-black">
      <div class="my-2">
        <div>
          <p>{{resumeStore.hobbies.name}}</p>
        </div>

      </div>
    </section>

    <!-- References-->
    <section class="px-5 py-2" v-if="resumeStore.references.length">
      <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">References</h3>
      <hr class="border-t border-black">
      <div class="my-2">
        <ul class="space-y-2">
          <li v-for="reference in resumeStore.references">
            <h6 class="font-medium">{{reference.name}}</h6>
            <p>{{reference.profession}} at {{reference.company}}</p>
            <p>Email: {{reference.phone}}</p>
            <p>Call: {{reference.email}}</p>


          </li>
        </ul>

      </div>
    </section>

    <!-- Custom section-->
    <section class="px-5 py-2" v-if="resumeStore.customSection">
      <div v-for="section in resumeStore.customSection">
        <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">{{section.name}}</h3>
        <hr class="border-t border-black">
        <div class="my-2">
          <p v-if="section.description" v-html="section.description"></p>

      </div>
      </div>
    </section>
  </div>
</div>

</template>

<style scoped>

</style>