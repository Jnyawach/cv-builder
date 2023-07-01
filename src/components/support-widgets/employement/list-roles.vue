<script setup lang="ts">
import {useResumeStore} from "../../../scripts/resumeStore";
import {ref} from "vue";
import Editor from "@tinymce/tinymce-vue";

const resumeStore=useResumeStore()
const emits=defineEmits(['addingRole'])
const deleteRole=(id:string)=>{
  resumeStore.workExperience=resumeStore.workExperience.filter((item)=>item.id!==id)
}
const editingRole=ref(false)

const workExperience=ref({
  title:'',
  employer:'',
  city:'',
  country:'',
  start_date:'',
  end_date:'',
  current_job:false,
  description:'',
  id:''
})

const startEditing=(work:any)=>{
 workExperience.value=work
  editingRole.value=true
}
const updateRole=()=>{

  const indexOfObject = resumeStore.workExperience.findIndex(obj => obj.id === workExperience.value.id);
  if (indexOfObject !== -1) {
    resumeStore.workExperience[indexOfObject]= workExperience.value;

  }
  editingRole.value=false

}
</script>

<template>
  <div v-if="editingRole">
    <form autocomplete="off" @submit.prevent="updateRole">
      <div>

        <div class="grid md:grid-cols-2 gap-1 my-3">
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

        <div class="grid  my-3 md:grid-cols-2 gap-1">
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
        <button type="submit" class="btn-primary btn-small">Update role</button>
      </div>
    </form>
  </div>
  <div v-else>
    <div class="space-y-3">
      <div v-for="role in resumeStore.workExperience" :key="role.id">
        <div class="border rounded-xl p-3 border-gray-700">
          <div>
            <h6 class="text-sm">{{role.title}} | {{role.employer}}</h6>

          </div>
          <p class="text-xs my-2 text-sky-600">{{new Date(role.start_date).toDateString()}}
            - <span v-if="role.current_job">Current</span><span v-else>{{new Date(role.end_date).toDateString()}}</span>
          </p>
          <div class="mt-3 flex gap-5">
            <button @click="startEditing(role)">
              <svg class="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
            </button>
            <button @click="deleteRole(role.id)">
              <svg class="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <button @click="emits('addingRole')" type="button" class="text-sky-600">Add a new role</button>
    </div>
  </div>

</template>

<style scoped>

</style>