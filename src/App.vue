<template>
<main-layout>
  <div class="p-5">
    <div class="bg-white min-h-screen rounded-xl shadow-xl text-gray-800">
      <component :is="currentTemplate"></component>


    </div>
  </div>
</main-layout>
</template>
<script setup lang="ts">
import {ref, shallowRef} from "vue";
import MainLayout from "./components/layouts/main-layout.vue";
import {useResumeStore} from "./scripts/resumeStore";
const resumeStore=useResumeStore()
const currentTemplate=ref(resumeStore.template.template)


</script>
<style scoped>

</style>
