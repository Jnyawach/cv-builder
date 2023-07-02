<script setup lang="ts">
import {useResumeStore} from "../../../scripts/resumeStore";
import {ref} from "vue";
import Editor from "@tinymce/tinymce-vue";
import { v4 as uuidv4 } from 'uuid';
const resumeStore=useResumeStore()
const emits=defineEmits(['addingEducation'])
const deleteEducation=(id:string)=>{
  resumeStore.educationHistory=resumeStore.educationHistory.filter((item)=>item.id!==id)
}
const editingEducation=ref(false)

const educationHistory=ref({
  name:'',
  location:'',
  degree:'',
  study_field:'',
  description:'',
  start_date:'',
  end_date:'',
  current_education:false,
  id:uuidv4()
})

const startEditing=(education:any)=>{
  educationHistory.value=education
  editingEducation.value=true
}
const updateEducation=()=>{

  const indexOfObject = resumeStore.educationHistory.findIndex(obj => obj.id === educationHistory.value.id);
  if (indexOfObject !== -1) {
    resumeStore.educationHistory[indexOfObject]= educationHistory.value;

  }
  editingEducation.value=false

}
</script>

<template>
  <div v-if="editingEducation">
    <form  @submit.prevent="updateEducation">
      <div>

        <div class="grid md:grid-cols-2 gap-1 my-3">
          <div>
            <label for="school_name" class="resume-label">School name:</label>
            <input required v-model="educationHistory.name" id="school_name" type="text"
                   class="resume-input" placeholder="e.g University of Nairobi">
          </div>
          <div>
            <label for="school_location" class="resume-label">School location:</label>
            <input required v-model="educationHistory.location" id="school_location" type="text"
                   class="resume-input" placeholder="e.g. Nairobi, Kenya">
          </div>

        </div>


        <div class="grid my-5">
          <div>
            <label for="study_field" class="resume-label">Field of study:</label>
            <input required v-model="educationHistory.study_field" id="study_field" type="text" class="resume-input"
                   placeholder="e.g. Bachelor of Science in Civil Engineering">
          </div>
        </div>
        <div class="my-5">
          <div class="grid md:grid-cols-2 gap-1 my-3">
            <div>
              <label for="linkedin" class="resume-label">Start date:</label>
              <input required v-model="educationHistory.start_date" id="linkedin" type="date"
                     class="resume-input">
            </div>
            <div>
              <label for="twitter" class="resume-label">Completion date:</label>
              <input :disabled="educationHistory.current_education" v-model="educationHistory.end_date" id="twitter" type="date"
                     class="resume-input" :class="[educationHistory.current_education??'cursor-not-allowed']">
              <div>
                <label class="flex gap-2 items-center">
                  <input class="resume-check" type="checkbox" v-model="educationHistory.current_education">
                  <span>Currently Ongoing</span>
                </label>
              </div>
            </div>

          </div>
        </div>
        <div class="my-5">
          <label>Add a description</label>
          <div class="my-2">
            <small>A brief description about the knowledge you acquired during your studies.
              Recognitions and awards if available</small>
          </div>
          <div class="my-3">
            <Editor
                api-key="51d8ossp03q7qv63ctin9qbrlio19sszyf8j8u5vmlq44ui3"
                :init="{
                  plugins: 'lists link ',
                  toolbar: 'blocks| bold italic | link  | numlist bullist indent outdent ',
                  height: '300px',
                  skin: 'oxide-dark',
                  content_css: 'dark'
                  }"
                v-model="educationHistory.description"
            />
          </div>

        </div>
      </div>
      <div class="my-3">
        <button type="submit" class="btn-primary btn-small">Update</button>
      </div>
    </form>
  </div>
  <div v-else>
    <div class="space-y-3">
      <div v-for="education in resumeStore.educationHistory" :key="education.id">
        <div class="border rounded-xl p-3 border-gray-700">
          <div>
            <h6 class="text-sm">{{education.study_field}} | {{education.name}}</h6>

          </div>
          <p class="text-xs my-2 text-sky-600">{{new Date(education.start_date).toDateString()}}
            - <span v-if="education.current_education">Ongoing</span><span v-else>{{new Date(education.end_date).toDateString()}}</span>
          </p>
          <div class="mt-3 flex gap-5">
            <button @click="startEditing(education)">
              <svg class="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
            </button>
            <button @click="deleteEducation(education.id)">
              <svg class="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <button @click="emits('addingEducation')" type="button" class="flex gap-2 items-center text-sky-600">
        <svg class="h-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        <span>Add a new education</span>
      </button>
    </div>
  </div>

</template>

<style scoped>

</style>