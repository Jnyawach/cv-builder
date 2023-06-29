<template>

  <div class="lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-[600px] lg:flex-col bg-gray-700 shadow-xl">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-700 px-6 pb-4 ">
        <div class="flex h-16 shrink-0 items-center">
         <h1>LOGO</h1>
        </div>

        <div class="h-screen overflow-y-auto p-2">
          <div v-if="step===1">
            <resume-templates></resume-templates>
          </div>
          <div v-if="step===2">
            
          </div>

        </div>


      </div>
    <div class="border-t border-gray-600 py-2 px-3 flex justify-end drop-shadow">
      <button class="btn-primary" type="button">Proceed</button>
    </div>
    </div>
  <div class="lg:pl-[600px]">
    <div class="sticky top-3 z-40 flex h-16 shrink-0 items-center gap-x-4 w-full px-4  sm:gap-x-6 sm:px-6 lg:px-8">
      <navbar></navbar>
    </div>

    <main class="py-10 z-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <slot></slot>
      </div>
    </main>
  </div>

</template>

<script setup lang="ts">
import {useStorage} from "@vueuse/core";

import Navbar from "./navbar.vue";
import ResumeTemplates from "../support-widgets/resume-templates.vue";

const step=useStorage('step',1)
</script>

<style scoped>

</style>