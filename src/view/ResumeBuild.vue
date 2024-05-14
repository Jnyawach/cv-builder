<template>
  <main-layout>
    <div class="p-5">
      <div ref="cv" id="resume"  class="shadow-xl text-gray-800 bg-white">
        <!--Insert templates-->

        <CrispWhite></CrispWhite>
      </div>
      <div class="fixed bottom-8 right-8">
        <button @click="exportToPDF" class="btn-primary">Download</button>
      </div>
    </div>
  </main-layout>
</template>
<script setup lang="ts">
import {ref} from "vue";
import MainLayout from "../components/layouts/main-layout.vue";
import {useResumeStore} from "../scripts/resumeStore";
import CrispWhite from "../components/designs/crisp-white.vue";
//@ts-ignore

import * as html2pdf from 'html2pdf.js';



const resumeStore=useResumeStore()
const cv=ref(null)

//Export resume to PDF using htmpl2pdf plugin

const exportToPDF=async ()=>{
  var opt = {
    margin:       5,
    filename:     resumeStore.doc_name,
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'A4', orientation: 'portrait' }
  };

  html2pdf().from(cv.value).set(opt).save();

}



</script>
<style scoped>

</style>
