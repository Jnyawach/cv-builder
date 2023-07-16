<template>
<main-layout>
  <div class="p-5">
    <div ref="cv" id="resume"  class="rounded-xl shadow-xl text-gray-800">
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
import {ref} from "vue";
import MainLayout from "./components/layouts/main-layout.vue";
import {useResumeStore} from "./scripts/resumeStore";
import report from "puppeteer-report";
import puppeteer from "puppeteer";

const resumeStore=useResumeStore()
const currentTemplate=ref(resumeStore.template.template)
const cv=ref(null)

const exportToPDF=async ()=>{
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });
  try {
    // you must use full path `home/puppeteer/index.hmtl`
    const file = path.join(__dirname, "index.html");
    await report.pdf(browser, file, {
      path: "report.pdf",
      format: "a4",
      margin: {
        bottom: "10mm",
        left: "10mm",
        right: "10mm",
        top: "10mm",
      },
    });
  } finally {
    await browser.close();
  }
}



</script>
<style scoped>

</style>
