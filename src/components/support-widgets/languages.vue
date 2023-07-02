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
      <div @click.self="$emit('close')" v-if="show" class="inset-0 fixed bg-black bg-opacity-70 z-[10000] grid place-items-center p-5" >
        <div class="bg-gray-800 lg:w-1/2 w-full rounded-xl">
          <header class="p-3">
            <div class="flex justify-between">

              <slot name="header">
                <div class="font-bold text-black-100 text-lg">
                  <h6>Add a new Language</h6>
                </div>
              </slot>
              <div>
                <div class="text-end">
                  <button class="rounded-full h-8 w-8 flex place-content-center" type="button" @click="$emit('close')">

                    <svg class="h-6 self-center fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
                  </button>
                </div>
              </div>
            </div>

          </header>

          <div class="p-3.5 ">
            <form @submit.prevent="addNewLanguage">
              <div class="my-5 grid md:grid-cols-2 gap-1">
                <div>
                  <label for="language_name" class="resume-label">Language:</label>
                  <input v-model="newLanguage.name" id="language_name" type="text" class="resume-input" required placeholder="e.g. English">
                </div>
                <div>
                  <label for="language_name" class="resume-label">Level:</label>
                  <div class="my-2">
                    <langauge-level v-model:level="newLanguage.level"></langauge-level>
                  </div>
                </div>
              </div>
              <div class="my-2 flex justify-end">
                <button type="submit" class="btn-primary">Save</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">

import {watch, ref} from "vue";
import { v4 as uuidv4 } from 'uuid';
import LangaugeLevel from "./langauge-level.vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()
const emits=defineEmits(['close'])
emits("close")
let props=defineProps({
  show:Boolean,
})

watch(()=>props.show,()=>{
  if (props.show){
    document.body.classList.add('overflow-y-hidden');
  }else{
    document.body.classList.remove('overflow-y-hidden');
  }
})

const newLanguage=ref({
  name:'',
  level:'',
  id:uuidv4()
})

const addNewLanguage=()=>{
  resumeStore.languages.push(newLanguage.value);
  newLanguage.value={
    name:'',
    level:'',
    id:uuidv4()
  }
  emits('close')
}
</script>

<style scoped>

</style>