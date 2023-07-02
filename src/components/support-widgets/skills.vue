<script setup lang="ts">
import {ref} from "vue";
import LevelSelect from "./courses/skills-sup/level-select.vue";
import {useResumeStore} from "../../scripts/resumeStore";
import { v4 as uuidv4 } from 'uuid';
const resumeStore=useResumeStore()
const  newSkill=ref({
  name:'',
  level:'',
  id:uuidv4()
})

const resetForm=()=>{
  newSkill.value.name='';
  newSkill.value.level='';
}
const skillError=ref(false)
const addNewSkill=()=>{
  if (!newSkill.value.level){
    skillError.value=true
    return
  }
  resumeStore.skills.push(newSkill.value);
  newSkill.value = {
    name: '',
    level: '',
    id:uuidv4()
  };
  skillError.value=false
}

const deleteSkill =(id:number)=>{
  resumeStore.skills=resumeStore.skills.filter((item)=>item.id!==id)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Skills</h1>
    <p class="my-2 font-light text-sm">Add 5 most important skill that show you are fit
    for the position. Make sure they match the key skills mentioned in the job description</p>
  </div>
  <!--skills lists-->
  <div v-if="resumeStore.skills.length">
   <div class="space-y-3">
     <div v-for="(skill,index) in resumeStore.skills" :key="index" class="border border-gray-700 rounded-xl p-3">
        <div class="flex justify-between">
          <div>
            <h6 class="text-sm">{{skill.name}}</h6>
            <p class="text-sm text-gray-500 my-2">{{skill.level}}</p>
          </div>
          <div>
            <button @click="deleteSkill(skill.id)">
              <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
            </button>
          </div>
        </div>
     </div>
   </div>
  </div>
  <!-- skills form -->
  <div class="my-5 border rounded-xl border-gray-700 p-3">
    <form @submit.prevent="addNewSkill">
      <div class="my-3 flex justify-between items-center">
        <h6 class="font-bold">Add a new skill</h6>

          <button :disabled="!newSkill" type="submit" class="btn-primary" :class="[!newSkill??'cursor-not-allowed']">Add</button>

      </div>
      <div class="grid md:grid-cols-2 gap-1">
       <div>
         <label for="skill" class="resume-label">Skill:</label>
         <input v-model="newSkill.name" id="skill" type="text" class="resume-input" required placeholder="e.g. Communication skills">
       </div>
        <div>
          <label for="skill" class="resume-label">Level of expertise:</label>
          <div class="my-2">
            <level-select v-model:level="newSkill.level"></level-select>
          </div>
          <div v-if="skillError">
            <small class="text-sky-600">Add skill level!</small>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<style scoped>

</style>