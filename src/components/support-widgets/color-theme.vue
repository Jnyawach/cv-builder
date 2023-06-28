<template>
  <div class="relative" v-on-click-outside="closeDrop">
    <button @click="dropdown=!dropdown"  type="button"
            class="text-xs  flex  items-center w-full h-10
            border-none rounded-lg bg-transparent px-2 py-1 w-56
    ">
      <span class="h-4 w-2 rounded-l-full" :style="'background-color:'+active['primary']">
      </span>
      <span class="h-4 w-2 rounded-r-full" :style="'background-color:'+active['secondary']">
      </span>
      <span class="self-center ml-3">

        Color theme
      </span>

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
            shadow w-56 overflow-hidden right-0">
        <div class="p-2 border-b border-gray-800">
         <div class="flex w-full justify-between ">
           <button @click="step=1"  :class="[step===1?'btn-primary':'btn-primary-outline']">Primary</button>
           <button @click="step=2" :class="[step===2?'btn-primary':'btn-primary-outline']">Secondary</button>
         </div>
        </div>
        <div v-if="step===1" class="text-gray-900 font-medium p-2 border-none">

          <color-picker key="primary"
              @color-change="updatePrimary"
              :color="active['primary']"
              alpha-channel="hide"
              hue-channel="hide"
              default-format="hex"
          ></color-picker>

        </div>
        <div v-if="step===2" class="text-gray-900 font-medium p-2 border-none">

          <color-picker key="primary"
                        @color-change="updateSecondary"
                        :color="active['secondary']"
                        alpha-channel="hide"
                        hue-channel="hide"
                        default-format="hex"
          ></color-picker>

        </div>

      </div>
    </Transition>
  </div>

</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import { vOnClickOutside } from '@vueuse/components'
import {useStorage} from "@vueuse/core";
import { ColorPicker } from 'vue-accessible-color-picker'

//STORAGE
const resume=useStorage('resume',{})
const resumeFonts=resume.value?resume.value.fonts:intialSelect.value

//STORAGE
const colorThemes=ref({
  "primary":"#a16207",
  "secondary":"#065f46",
})
const dropdown=ref(false)
const step=ref(1) //1 for primary 2 for secondary

const active=ref(colorThemes.value)


function selectOption(option:any){
  active.value=option
  dropdown.value=false
  resume.value.fontSize=option



}
const updatePrimary=(color:any)=>{

  active.value['primary']=color.cssColor
  colorThemes.value['primary']=color.cssColor
  resume.value.colorThemes=colorThemes.value
}

const updateSecondary=(color:any)=>{
  active.value['secondary']=color.cssColor
  colorThemes.value['secondary']=color.cssColor
  resume.value.colorThemes=colorThemes.value
}

const closeDrop=()=>{
  dropdown.value=false
}


</script>

<style scoped>
.vacp-color-space {
  grid-column: 1/-1;
  height: 200px;
  overflow: hidden;
}
.vacp-color-picker{
  background: none;
  border: none;
}
.vacp-range-input {
  background: none;
  border: none;
  display: block;
  height: var(--vacp-slider-track-height);
  margin-bottom: calc(var(--vacp-spacing)/2 + 1px);
  margin-left: 0;
  margin-right: 0;
  margin-top: calc(var(--vacp-spacing)/2 + 1px);
  padding: 0;
  width: var(--vacp-slider-track-width);
}

.vacp-format-switch-button{
  background: none !important;
}
.vacp-color-input{
  background: transparent !important;
  border-radius: 20px;
}
.vacp-color-input  .vacp-format-switch-button{
  background: transparent !important;
}
#color-picker-color-hex{
  background: transparent !important;
}
.vacp-copy-button {
  align-items: center;
  align-self: center;
  /* background-color: #fff; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  justify-self: center;
  overflow: hidden;
  position: relative;

}

</style>
