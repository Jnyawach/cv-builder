<template>
<div class="flex justify-between gap-2 items-center border-none py-1 rounded-lg px-2 h-10">
  <input id="doc_name" type="text" @input="showCheck=true"  v-model="doc_name" class="text-xs border-none w-32 bg-transparent focus:outline-none">
  <svg @click="saveName" v-if="showCheck" class="fill-white h-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
  <label for="doc_name" v-else>
    <svg  class="fill-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M455.7 18.75C443.2 6.252 426.8 0 410.5 0c-16.38 0-32.76 6.25-45.26 18.75L45.11 338.9c-8.568 8.566-14.53 19.39-17.18 31.21l-27.61 122.8C-1.7 502.1 6.159 512 15.95 512c1.047 0 2.116-.1034 3.198-.3202c0 0 84.61-17.95 122.8-26.93c11.54-2.717 21.87-8.523 30.25-16.9l321.2-321.2c24.99-24.99 24.9-65.42-.0898-90.41L455.7 18.75zM138.2 433.9c-2.115 2.115-4.503 3.463-7.308 4.123c-18.17 4.281-47.46 10.71-72.69 16.18l16.55-73.58c.666-2.959 2.15-5.654 4.296-7.803l241.9-241.9l60.13 60.13L138.2 433.9z"/></svg>
  </label>

</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()


const doc_name=ref(resumeStore.doc_name)
const showCheck=ref(false)

const saveName=()=>{
  resumeStore.doc_name=doc_name.value
  showCheck.value=false
}


</script>

<style scoped>

</style>