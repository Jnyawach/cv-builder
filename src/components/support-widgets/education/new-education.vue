<script setup lang="ts">

import Editor from "@tinymce/tinymce-vue";
import {useResumeStore} from "../../../scripts/resumeStore";
import {ref} from "vue";
import { v4 as uuidv4 } from 'uuid';
const resumeStore=useResumeStore()
const emits=defineEmits(['close'])
const workExperience=ref({
  title:'',
  employer:'',
  city:'',
  country:'',
  start_date:'',
  end_date:'',
  current_job:false,
  description:'',
  id:uuidv4()
})

const educationHistory=ref({
  name:'',
  location:'',
  degree:'',
  study_field:'',
  description:'',
  start_date:'',
  end_date:'',
  current_education:'',
  id:uuidv4()
})

const addRole=()=>{
  resumeStore.workExperience.push(workExperience.value)
  emits('close')
}
</script>

<template>
  <form  @submit.prevent="addRole">
    <div>

      <div class="grid md:grid-cols-2 gap-1 my-3">
        <div>
          <label for="school_name" class="resume-label">School name:</label>
          <input v-model="educationHistory.name" id="school_name" type="text"
                 class="resume-input" placeholder="e.g University of Nairobi">
        </div>
        <div>
          <label for="school_location" class="resume-label">School location:</label>
          <input v-model="educationHistory.location" id="school_location" type="text"
                 class="resume-input" placeholder="e.g. Nairobi, Kenya">
        </div>

      </div>

      <div class="grid  my-3 md:grid-cols-2 gap-1">
        <div>
          <label for="city" class="resume-label">Degree:</label>
          <select>
            <option value="">Select</option>
            <option value="Associate of Arts">Associate of Arts</option>
            <option value="Associate of Applied Science">Associate of Applied Science</option>
          </select>
        </div>
        <div>
          <label for="country" class="resume-label">Country:</label>
          <input v-model="workExperience.country" id="country" type="text" class="resume-input"
                 placeholder="e.g. Kenya">
        </div>
      </div>
      <div class="my-5">
        <div class="grid md:grid-cols-2 gap-1 my-3">
          <div>
            <label for="linkedin" class="resume-label">Start date:</label>
            <input v-model="workExperience.start_date" id="linkedin" type="date"
                   class="resume-input">
          </div>
          <div>
            <label for="twitter" class="resume-label">End date:</label>
            <input :disabled="workExperience.current_job" v-model="workExperience.end_date" id="twitter" type="date"
                   class="resume-input" :class="[workExperience.current_job??'cursor-not-allowed']">
            <div>
              <label class="flex gap-2 items-center">
                <input class="resume-check" type="checkbox" v-model="workExperience.current_job">
                <span>This is my current job</span>
              </label>
            </div>
          </div>

        </div>
      </div>
      <div class="my-5">
        <label>Job description</label>
        <div class="my-2">
          <small>A brief description of the employment including achievements and responsibilities</small>
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
              v-model="workExperience.description"
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