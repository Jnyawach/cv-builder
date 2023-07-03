<script setup lang="js">
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()
import {ref} from "vue";
import NewEducation from "./education/new-education.vue";
import ListingEducation from "./education/listing-education.vue";

const addingEducation=ref(!resumeStore.educationHistory)
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Education details</h1>
    <p class="my-2 font-light text-sm">Describe about your education</p>
  </div>
  <div>
    <listing-education @addingEducation="addingEducation=true"></listing-education>
  </div>
</template>



<style lang="scss" scoped></style>