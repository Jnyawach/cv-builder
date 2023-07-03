<template>
<main-layout>
  <div class="p-5">
    <div class="bg-white min-h-screen rounded-xl shadow-xl text-gray-800">
      <keep-alive>
        <component :is="currentTemplate"></component>
      </keep-alive>



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
