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
import templates from "../../assets/data/templates.json"
import {ref} from "vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()
const availableTemplates=ref(templates)

const currentTemplate=ref( resumeStore.template)
const selectTemplate=(template:any)=>{
  currentTemplate.value=template
  resumeStore.template=template
}
</script>

<style scoped>

</style>