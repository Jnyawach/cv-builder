<template>
  <div class="relative" v-on-click-outside="closeDrop">
    <button @click="dropdown=!dropdown"  type="button"
            class="text-xs  flex justify-between items-center w-16 h-10 gap-3
            border-none rounded-lg bg-transparent px-2 py-1
    ">
      <span class="self-center" v-if="active">{{active}}</span>
      <svg class="h-3 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
    </button>


    <Transition
        enter-from-class="opacity-0 "
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0"
    >
      <div v-show="dropdown" class="py-2 mt-1 absolute z-10 bg-gray-700 border-gray-200 divide-y divide-gray-100 rounded-lg
            shadow w-full overflow-hidden ">
        <ul class="text-sm text-white max-h-72 overflow-y-auto" aria-labelledby="dropdownHoverButton">
          <li v-for="(size, index) in fontSizes" :key="index" class="grid ">
            <button type="button" @click="selectOption(size)" class="text-start text-sm font-medium w-full h-full cursor-pointer  hover:bg-sumo-700/20 p-2">
              <span class="capitalize">{{size}}</span>
            </button>

          </li>
        </ul>
      </div>
    </Transition>
  </div>

</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import { vOnClickOutside } from '@vueuse/components'
import {useStorage} from "@vueuse/core";

//STORAGE
const resume=useStorage('resume',{})
const resumeFonts=resume.value?resume.value.fonts:intialSelect.value

//STORAGE
const fontSizes=ref({
  "9pt": "9pt",
  "10pt": "10pt",
  "11pt": "11pt",
  "12pt": "12pt",
  "13px": "13pt",
  "14pt": "14pt",
})
const dropdown=ref(false)

const intialSelect=computed(()=>fontSizes.value['11pt'])

const active=ref(resume.value.fontSize?resume.value.fontSize:intialSelect.value)


function selectOption(option:any){
  active.value=option
  dropdown.value=false
  resume.value.fontSize=option



}



const closeDrop=()=>{
  dropdown.value=false
}


</script>

<style scoped>


</style>
