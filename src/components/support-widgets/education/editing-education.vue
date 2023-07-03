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
  education:Object
})

const show=ref(false)
watch(show,()=>{
  if (show.value){
    document.body.classList.add('overflow-y-hidden');
  }else{
    document.body.classList.remove('overflow-y-hidden');
  }
})

const educationHistory=ref({
  name:props.education?.name,
  location:props.education?.location,
  degree:props.education?.degree,
  study_field:props.education.study_field,
  description:props.education?.description,
  start_date:props.education?.start_date,
  end_date:props.education?.end_date,
  current_education:props.education?.current_education,
  id:props.education?.id
})


const updateEducation=()=>{

  const indexOfObject = resumeStore.educationHistory.findIndex(obj => obj.id === educationHistory.value.id);
  if (indexOfObject !== -1) {
    resumeStore.educationHistory[indexOfObject]= educationHistory.value;

  }
 show.value=false

}

</script>

<style scoped>

</style>