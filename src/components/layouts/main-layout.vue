<template>

  <div class="lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-96 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-700 px-6 pb-4 shadow-xl">
        <div class="flex h-16 shrink-0 items-center">
         <h1>LOGO</h1>
        </div>

      </div>
    </div>
  <div class="lg:pl-96">
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


import Navbar from "./navbar.vue";
</script>

<style scoped>

</style>