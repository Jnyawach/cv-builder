<script setup lang="ts">
import {useResumeStore} from "../../scripts/resumeStore";
import NewEmployment from "./employement/new-employment.vue";
const resumeStore=useResumeStore()

const deleteRole=(id:string)=>{
  resumeStore.workExperience=resumeStore.workExperience.filter((item)=>item.id!==id)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Employment History</h1>
    <p class="my-2 font-light text-sm">Start with your most recent job</p>
  </div>

  <div v-if="resumeStore.workExperience.length" class="py-3">
    <div v-for="role in resumeStore.workExperience" :key="role.id">
      <div class="border rounded-xl p-3 border-gray-700">
       <div>
         <h6 class="text-sm">{{role.title}} | {{role.employer}}</h6>

       </div>
        <p class="text-xs my-2 text-sky-600">{{new Date(role.start_date).toDateString()}}
          - <span v-if="role.current_job">Current</span><span v-else>{{new Date(role.end_date).toDateString()}}</span>
        </p>
        <div class="mt-3 flex gap-5">
          <button>
            <svg class="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
          </button>
          <button @click="deleteRole(role.id)">
            <svg class="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="my-3">
      <button type="button" class="text-sky-600">Add a new role</button>
    </div>
  </div>
  <div v-else>
    <new-employment></new-employment>
  </div>

</template>

<style scoped>

</style>