<script setup lang="ts">
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Professional Summary</h1>
    <p class="my-2 font-light text-sm">Two to four sentences long. Should include information on years of experience and job title. 2-3 of your biggest achievements to date. 1-2 of your top skills</p>
  </div>

  <div class="my-5">
    <form>
      <textarea v-model="resumeStore.professionalSummary" rows="8" class="resume-textarea"></textarea>
    </form>
  </div>
</template>

<style scoped>

</style>