<template>
<div>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Select a Template</h1>
  </div>

  <div class="grid md:grid-cols-2 my-5 gap-2">
    <div v-for="template in availableTemplates" :key="template">
      <img :src="template.image" :alt="template.name" @click="selectTemplate(template)"
           class="cursor-pointer border rounded-lg shadow-lg hover:shadow-xl hover:border-sky-600"
           :class="[currentTemplate.id===template.id?'border-2 shadow-xl border-sky-600':'']"
      >
      <h2 class="my-3 text-center  font-medium">{{template.name}}</h2>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()
const availableTemplates=ref([
  {
  "name": "Crisp White",
      "template":"crisp-white",
      "id": 1,
      "image": "/templates/crisp-white.png",
      "primary":"#a16207",
      "secondary":"#065f46"
},
{
  "name": "Cascading cream",
      "template":"cascading-cream",
      "id": 2,
      "image": "/templates/cascading-cream.png",
      "primary":"#a16207",
      "secondary":"#065f46"
},
{
  "name": "Cubic Black",
      "template":"cubic-black",
      "id": 3,
      "image": "/templates/cubic-black.png",
      "primary":"#a16207",
      "secondary":"#065f46"
},
 {
  "name": "Enfold Blue",
      "template":"enfold-blue",
      "id": 4,
      "image": "/templates/enfold-blue.png",
      "primary":"#a16207",
      "secondary":"#065f46"
}
])

const currentTemplate=ref( resumeStore.template)
const selectTemplate=(template:any)=>{
  currentTemplate.value=template
  resumeStore.template=template
}
</script>

<style scoped>

</style>