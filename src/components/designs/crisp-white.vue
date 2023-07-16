
<script setup lang="ts">
import {useResumeStore} from "../../scripts/resumeStore";
import moment from "moment";
import {computed, onMounted, ref} from "vue";
import {useFonts} from "../../scripts/useFonts";
import { jsPDF } from "jspdf";
const resumeStore=useResumeStore()
const {fonts}=useFonts()

import pdf from 'pdfjs';

const doc=ref()
const pdfLink=ref('')
const lineHeight=ref(1.5)
/*
function render(){
  doc.value = new jsPDF('p', 'mm', [297, 210])
  doc.value.setFontSize(24)
  doc.value.setFont('helvetica', 'normal', 'bold')
  doc.value.text(resumeStore.personalInformation.name + ' ' + resumeStore.personalInformation.surname, 105, 15, 'center')
  doc.value.setFontSize(11)
  doc.value.setFont('helvetica', 'normal', 'normal')
  var contact = doc.value.splitTextToSize('Email: '+resumeStore.personalInformation.email+' Cellphone: '
      +resumeStore.personalInformation.phone+' linkedin: '+resumeStore.personalInformation.linkedin, 190);
  doc.value.text(contact,105, 25, 'center')
  var lines = contact.length
  var blockHeight = (lines * lineHeight.value)+35
  doc.value.setFillColor('black')
  doc.value.setFontSize(10)
  doc.value.setLineHeightFactor(lineHeight.value)
  doc.value.setFont('helvetica', 'normal', 'normal')
  var summary = doc.value.splitTextToSize(resumeStore.professionalSummary, 190);
  doc.value.text(summary, 10, blockHeight);
  var nextY=(summary.length*lineHeight.value)+10
  doc.value.setFont('helvetica', 'normal', 'bold')
  doc.value.setFontSize(12)
  doc.value.setTextColor('#0c4a6e')
  doc.value.text('Skills',10,nextY+50)
  doc.value.line(10,nextY+52,200,nextY+52,)
  var nextY2=(nextY+60)
  doc.value.setTextColor('black')
  doc.value.setFontSize(11)
  doc.value.setFont('helvetica', 'normal', 'normal')
  doc.value.text('Expert: Microsoft Office, Excel, Adobe Design Suite',10, nextY2)
  //output pdf
  const buf = doc.value.output();
  const blob = new Blob([buf], {type: 'application/pdf'});
  pdfLink.value = URL.createObjectURL(blob);
}
*/


const generateSkills = () => {

}
/*
onMounted(()=>{
  render()
})
*/






</script>

<template>

<div style="width: 210mm" class="text-gray-950 bg-white" :class="['font-'+resumeStore.font.name ]" :style="`font-size: ${resumeStore.fontSize}`">
  <div class="text-center py-7">
    <h1  class="text-4xl my-1 font-bold">{{resumeStore.personalInformation.name}} {{resumeStore.personalInformation.surname}}</h1>
    <h3 class="text-xl font-semibold">{{resumeStore.personalInformation.profession}}</h3>
    <p class="my-2 font-medium text-sm">
      <span><span class="font-medium" :style="`color:${resumeStore.template.primary}`">Email: </span>{{resumeStore.personalInformation.email}}</span>
      <span class="ml-2"><span class="font-medium" :style="`color:${resumeStore.template.primary}`">Phone: </span>{{resumeStore.personalInformation.phone}}</span>
      <span v-if="resumeStore.personalInformation.linkedin" class="ml-2"><span class="font-medium" :style="`color:${resumeStore.template.primary}`">Linkedin: </span>{{resumeStore.personalInformation.linkedin}}</span>
    </p>
  </div>
  <div class="my-5 px-5">
    <p>{{resumeStore.professionalSummary}}</p>
  </div>
  <section class="px-5 py-2" v-if="resumeStore.workExperience.length">
    <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Experience</h3>
    <hr class="border-t border-black">
    <div class="py-2" v-for="role in resumeStore.workExperience" :key="role.id">
      <div class="flex justify-between">
        <h5 class="uppercase font-medium">{{role.title}} </h5>
        <h5 class="font-bold"><span>{{moment(role.start_date).format('MMM YYYY')}}</span>- <span v-if="role.current_job">Current</span><span v-else>{{moment(role.end_date).format('MMM YYYY')}}</span></h5>
      </div>
      <h6 class="font-bold">{{role.employer}}-{{role.city}}, {{role.country}}</h6>
      <div v-html="role.description" class="prose max-w-full prose-ul:list-disc prose-gray-950 leading-normal" :style="`font-size: ${resumeStore.fontSize}`"></div>
    </div>
  </section>
  <section class="px-5 py-2" v-if="resumeStore.educationHistory.length">
    <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Education</h3>
    <hr class="border-t border-black">
    <div class="py-2" v-for="education in resumeStore.educationHistory" :key="education.id">
      <div class="flex justify-between">
        <h5 class="uppercase font-medium">{{education.study_field}} </h5>
        <h5 class="font-bold"><span>{{moment(education.start_date).format('MMM YYYY')}}</span>- <span v-if="education.current_education">Current</span><span v-else>{{moment(education.end_date).format('MMM YYYY')}}</span></h5>
      </div>
      <h6 class="font-bold">{{education.name}}-{{education.location}}</h6>
      <div v-html="education.description" class="prose max-w-full prose-ul:list-disc prose-gray-950 leading-normal" :style="`font-size: ${resumeStore.fontSize}`"></div>
    </div>
  </section>
  <section class="px-5 py-2" v-if="resumeStore.skills.length">
    <h3 class="my-2 font-bold text-[12pt]" :style="`color:${resumeStore.template.primary}`">Skills</h3>
    <hr class="border-t border-black">
    <div>

    </div>
  </section>
</div>

  <!--
  <div>
    <object class="overflow-hidden" id="preview" width="100%" height="841.896" type="application/pdf" :data="pdfLink+'#toolbar=0&navpanes=0'"  >
      <p>Insert your error message here, if the PDF cannot be displayed.</p>
    </object>
  </div>
  -->
</template>

<style scoped>

</style>