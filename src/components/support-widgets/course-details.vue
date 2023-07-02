<script setup lang="ts">
import moment from "moment"
import NewCourse from "./courses/new-course.vue";
import {ref} from "vue";
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()

const deleteCourse=(id:number)=>{
  resumeStore.courses=resumeStore.courses.filter((item)=>item.id!==id)
}
const addingCourse=ref(false)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Courses & certifications</h1>
    <p class="my-2 font-light text-sm">Most recent certification and courses that relate to the role you
    applying for</p>
  </div>

  <div v-if="resumeStore.courses.length">
    <div class="space-y-3">
      <div v-for="course in resumeStore.courses" :key="course.id" class="border border-gray-700 rounded-xl p-3">
        <div class="flex justify-between">
          <div>
            <h6 class="text-sm">{{course.course_name}} at {{course.organization}}</h6>
            <p class="text-sm text-gray-500 my-2">{{moment(course.start_date).format('MMM YYYY')}} - {{moment(course.end_date).format('MMM YYYY')}}</p>
          </div>
          <div>
            <button @click="deleteCourse(course.id)">
              <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- course form -->
  <div class="py-3">
    <button @click="addingCourse=true" type="button" class=" flex gap-2 items-center text-sky-600 border px-5 rounded-lg py-2 border-gray-700 text-sm">
      <svg class="h-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
      <span>Add course/certification</span>
    </button>
    <new-course :show="addingCourse" @close="addingCourse=false"></new-course>
  </div>
</template>

<style scoped>

</style>