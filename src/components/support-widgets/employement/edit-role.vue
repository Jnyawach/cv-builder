<template>
  <div @click="show=true">
    <slot name="trigger">

    </slot>
  </div>
  <teleport to="body">
    <Transition
        enter-from-class="opacity-0 scale-125"
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-125"
    >
      <div @click.self="show=false" v-if="show" class="inset-0 fixed bg-black bg-opacity-70 z-[10000] grid place-items-center p-5" >
        <div class="bg-gray-800 lg:w-1/2 w-full rounded-xl">
          <header class="p-3">
            <div class="flex justify-between">

              <slot name="header">
                <div class="font-bold text-black-100 text-lg">
                  <h6>Edit role</h6>
                </div>
              </slot>
              <div>
                <div class="text-end">
                  <button class="rounded-full h-8 w-8 flex place-content-center" type="button" @click="show=false">

                    <svg class="h-6 self-center fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
                  </button>
                </div>
              </div>
            </div>

          </header>

          <div class="p-3 ">
            <div class="max-h-[60vh] overflow-y-auto">
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
          </div>

        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">

import {watch, ref} from "vue";
import { v4 as uuidv4 } from 'uuid';
import {useResumeStore} from "../../../scripts/resumeStore";
import Editor from "@tinymce/tinymce-vue";
const resumeStore=useResumeStore()
let props=defineProps({
  role:Object
})

const show=ref(false)
watch(show,()=>{
  if (show.value){
    document.body.classList.add('overflow-y-hidden');
  }else{
    document.body.classList.remove('overflow-y-hidden');
  }
})

const workExperience=ref({
  title:props.role?.title,
  employer:props.role?.employer,
  city:props.role?.city,
  country:props.role?.country,
  start_date:props.role?.start_date,
  end_date:props.role?.end_date,
  current_job:props.role?.current_job,
  description:props.role?.description,
  id:props.role?.id
})


const updateRole=()=>{

  const indexOfObject = resumeStore.workExperience.findIndex(obj => obj.id === workExperience.value.id);
  if (indexOfObject !== -1) {
    resumeStore.workExperience[indexOfObject]= workExperience.value;

  }
 show.value=false

}

</script>

<style scoped>

</style>