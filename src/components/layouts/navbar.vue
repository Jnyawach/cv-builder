<template>
  <div class="flex justify-end w-full">
    <div class="h-10 border border-gray-700  rounded-xl bg-gray-800 shadow-xl">
      <ul class=" flex w-full gap-1 justify-end divide-x divide-gray-700">

        <li>
          <doc-name></doc-name>
        </li>
        <li>
          <font-selector></font-selector>
        </li>
        <li>
          <font-size></font-size>
        </li>
        <li>
          <color-theme></color-theme>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import FontSelector from "../support-widgets/font-selector.vue";

import {useStorage} from "@vueuse/core";
import DocName from "../support-widgets/doc-name.vue";
import FontSize from "../support-widgets/font-size.vue";
import ColorTheme from "../support-widgets/color-theme.vue";
//STORAGE
const resume=useStorage('resume',{})

</script>

<style scoped>

</style>