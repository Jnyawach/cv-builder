<template>
<main-layout>
  <div class="p-5">
    <div ref="cv" id="resume" class="bg-white min-h-screen rounded-xl shadow-xl text-gray-800">
      <keep-alive>
        <component :is="currentTemplate"></component>
      </keep-alive>
    </div>
    <div class="fixed bottom-8 right-8">
      <button @click="exportToPDF" class="btn-primary">Download</button>
    </div>
  </div>
</main-layout>
</template>
<script setup lang="ts">
import {ref, shallowRef} from "vue";
import MainLayout from "./components/layouts/main-layout.vue";
import {useResumeStore} from "./scripts/resumeStore";
import html2pdf from "html2pdf.js";

const resumeStore=useResumeStore()
const currentTemplate=ref(resumeStore.template.template)
const cv=ref(null)
const exportToPDF=()=>{
  let element = document.getElementById('resume');
  let options = {
    jsPDF: {
      format: 'a4'
    },
    html2canvas:  {letterRendering: true, useCORS: true,     logging: true},
    margin: 1,
    image: {type: 'jpeg', quality: 1}
  };
  html2pdf().set(options).from(element).toPdf().save('myfile.pdf');




}

</script>
<style scoped>

</style>
