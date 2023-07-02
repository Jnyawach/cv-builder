<script setup lang="ts">

import Editor from "@tinymce/tinymce-vue";
import {useResumeStore} from "../../../scripts/resumeStore";
import {ref} from "vue";
import { v4 as uuidv4 } from 'uuid';
const resumeStore=useResumeStore()
const emits=defineEmits(['addingEducation'])

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

const addEducation=()=>{
  resumeStore.educationHistory.push(educationHistory.value)
  emits('addingEducation')
}
</script>

<template>
  <form  @submit.prevent="addEducation">
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
            <label for="start_date" class="resume-label">Start date:</label>
            <input required v-model="educationHistory.start_date" id="start_date" type="date"
                   class="resume-input">
          </div>
          <div>
            <label for="end_date" class="resume-label">Completion date:</label>
            <input :disabled="educationHistory.current_education" v-model="educationHistory.end_date" id="end_date" type="date"
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
      <button type="submit" class="btn-primary btn-small">Save</button>
    </div>
  </form>
</template>

<style scoped>

</style>