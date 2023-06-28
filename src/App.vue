<template>
<main-layout>
  <div class="p-5">
    <div class="bg-white h-screen rounded-xl shadow-xl text-gray-800">
      {{resume}}
    </div>
  </div>
</main-layout>
</template>
<script setup lang="ts">

import MainLayout from "./components/layouts/main-layout.vue";
import {useStorage} from "@vueuse/core";

const resume=useStorage('resume',{})
</script>
<style scoped>

</style>
