<script setup lang="ts">
import {ref} from "vue";
import Editor from '@tinymce/tinymce-vue'
import {useStorage} from "@vueuse/core";
const resume=useStorage('resume',{})

const workExperience=ref({
  title:'',
  employer:'',
  city:'',
  country:'',
  start_date:'',
  end_date:'',
  current_job:false,
  description:''
})
</script>

<template>
  <form autocomplete="off">
    <div>
      <div>
        <h1 class="text-2xl font-bold text-sky-500">Employment History</h1>
        <p class="my-2 font-light text-sm">Start with your most recent job</p>
      </div>
      <div class="grid md:grid-cols-2 gap-2 my-3">
        <div>
          <label for="job_title" class="resume-label">Job title:</label>
          <input v-model="workExperience.title" id="job_title" type="text"
                 class="resume-input" placeholder="e.g Field Sales Agent">
        </div>
        <div>
          <label for="employer" class="resume-label">Employer name:</label>
          <input v-model="workExperience.employer" id="employer" type="text"
                 class="resume-input" placeholder="e.g. Safaricom">
        </div>

      </div>

      <div class="grid  my-3 md:grid-cols-2 gap-2">
        <div>
          <label for="city" class="resume-label">City:</label>
          <input v-model="workExperience.city" id="city" type="text" class="resume-input"
                 placeholder="e.g. Nairobi">
        </div>
        <div>
          <label for="country" class="resume-label">Country:</label>
          <input v-model="workExperience.country" id="country" type="text" class="resume-input"
                 placeholder="e.g. Kenya">
        </div>
      </div>
      <div class="my-5">
        <div class="grid md:grid-cols-2 gap-2 my-3">
          <div>
            <label for="linkedin" class="resume-label">Start date:</label>
            <input v-model="workExperience.start_date" id="linkedin" type="date"
                   class="resume-input">
          </div>
          <div>
            <label for="twitter" class="resume-label">End date:</label>
            <input v-model="workExperience.end_date" id="twitter" type="date"
                   class="resume-input">
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
          <small></small>
        </div>
        <div class="my-3">
          <Editor
              api-key="51d8ossp03q7qv63ctin9qbrlio19sszyf8j8u5vmlq44ui3"
              :init="{
                  plugins: 'lists link ',
                  toolbar: 'blocks| bold italic | link  | numlist bullist indent outdent ',

                   }"
              v-model="workExperience.description"
          />
        </div>

      </div>
    </div>
  </form>
</template>

<style scoped>

</style>