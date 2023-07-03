<script setup lang="ts">
import ListRoles from "./employement/list-roles.vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Employment History</h1>
    <p class="my-2 font-light text-sm">Start with your most recent job</p>
  </div>

  <div>
    <list-roles></list-roles>
  </div>

</template>

<style scoped>

</style>