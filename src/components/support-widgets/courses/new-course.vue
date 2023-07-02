<template>
  <teleport to="body">
    <Transition
        enter-from-class="opacity-0 scale-125"
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-125"
    >
      <div @click.self="emits('close')" v-if="show" class="inset-0 fixed bg-black bg-opacity-70 z-[10000] grid place-items-center p-5" >
        <div class="bg-gray-800 lg:w-1/2 w-full rounded-xl">
          <header class="p-3">
            <div class="flex justify-between">

              <slot name="header">
                <div class="font-bold text-black-100 text-lg">
                  <h6>Add a Course/Certification</h6>
                </div>
              </slot>
              <div>
                <div class="text-end">
                  <button class="rounded-full h-8 w-8 flex place-content-center" type="button" @click="emits('close')">

                    <svg class="h-6 self-center fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
                  </button>
                </div>
              </div>
            </div>

          </header>

          <div class="p-3 ">
            <div class="max-h-[60vh] overflow-y-auto">
              <form @submit.prevent="addNewCourse">
                <div class="grid my-5">
                  <div>
                    <label for="course" class="resume-label">Course:</label>
                    <input v-model="newCourse.course_name" id="course" type="text" class="resume-input" required placeholder="e.g. IoT Fundamentals: Hackathon Playbook">
                  </div>

                </div>
                <div class="my-5">
                  <label for="course_organization" class="resume-label">Organization:</label>
                  <input v-model="newCourse.organization" id="course_organization" type="text" class="resume-input" required placeholder="e.g. Cisco Networking Academy">
                </div>
                <div class="grid md:grid-cols-2 gap-1 my-5">
                  <div>
                    <label for="start_date" class="resume-label">Start date:</label>
                    <input required v-model="newCourse.start_date" id="start_date" type="date"
                           class="resume-input">
                  </div>
                  <div>
                    <label for="end_date" class="resume-label">Completion date:</label>
                    <input  v-model="newCourse.end_date" id="end_date" type="date"
                            class="resume-input">
                  </div>

                </div>
                <div class="my-3 flex justify-end">

                  <button :disabled="!newCourse" type="submit" class="btn-primary" :class="[!newCourse??'cursor-not-allowed']">Add</button>

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
const resumeStore=useResumeStore()
let props=defineProps({
  activity:Object,
  show:Boolean
})
const emits=defineEmits(['close'])
emits('close')

watch(()=>props.show,()=>{
  if (props.show){
    document.body.classList.add('overflow-y-hidden');
  }else{
    document.body.classList.remove('overflow-y-hidden');
  }
})

const newCourse=ref({
  course_name:'',
  organization:'',
  start_date:'',
  end_date:'',
  id:uuidv4()
})

const addNewCourse =()=>{
  resumeStore.courses.push(newCourse.value);
  newCourse.value={
    course_name:'',
    organization:'',
    start_date:'',
    end_date:'',
    id:uuidv4()
  }
  emits('close')
}
</script>

<style scoped>

</style>