<script setup lang="ts">
import NewEmployment from "./employement/new-employment.vue";
import ListRoles from "./employement/list-roles.vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()
import {ref} from "vue";

const addingRole=ref(!resumeStore.workExperience)

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Employment History</h1>
    <p class="my-2 font-light text-sm">Start with your most recent job</p>
  </div>

  <div v-if="addingRole" class="py-3">
    <new-employment @close="addingRole=false"></new-employment>
  </div>
  <div v-else>
    <list-roles @addingRole="addingRole=true"></list-roles>

  </div>

</template>

<style scoped>

</style>