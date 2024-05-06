<script setup lang="ts">
import {ref} from "vue";
import {useResumeStore} from "../../scripts/resumeStore";
import Languages from "./languages.vue";
import Hobbies from "./Hobbies.vue";
import NewReference from "./reference/new-reference.vue";
import NewCustom from "./custom-section/new-custom.vue";
import moment from "moment"
import EditCustom from "./custom-section/edit-custom.vue";
const resumeStore=useResumeStore()
const newLanguage=ref(false)
const deleteLanguage=(id:string)=>{
  resumeStore.languages=resumeStore.languages.filter((item)=>item.id!==id)
}

//hobbies
const newHobbies=ref(false)
const deleteHobby=()=>{
  resumeStore.hobbies={
    name:'',
    id:''
  }
}
//reference
const createReference=ref(false)
const deleteReference=(id:string)=>{
  resumeStore.references=resumeStore.references.filter((item)=>item.id!==id)
}

//custom section
const customSection=ref(false)

const deleteSection=(id:string)=>{
  resumeStore.customSection=resumeStore.customSection.filter((item)=>item.id!==id)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-sky-500">Additional Sections</h1>
  </div>
  <div v-if="resumeStore.languages.length" class="text-sm my-5 border border-gray-700 p-3 rounded-lg w-full block">
    <div>
      <h6 class="text-sky-600 my-2">Languages</h6>
    </div>

    <div class="my-2  divide-y divide-gray-700">
      <div v-for="language in resumeStore.languages" :key="language.id" class="py-2">
        <div class="flex justify-between">
          <div>
            <h6>{{language.name}}</h6>
            <p class="text-sm text-gray-500 my-1">{{language.level}}</p>
          </div>
          <div>
            <button @click="deleteLanguage(language.id)">
              <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="resumeStore.hobbies.name" class="text-sm my-5 border border-gray-700 p-3 rounded-lg w-full block">
    <div class="flex justify-between">
      <h6 class="text-sky-600 my-2">Hobbies</h6>
      <button @click="deleteHobby">
        <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
      </button>
    </div>

    <div class="my-2  divide-y divide-gray-700">
      <div  class="py-2">
        <div class="flex justify-between">
          <div>
            <h6>{{resumeStore.hobbies.name}}</h6>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div v-if="resumeStore.references.length" class="text-sm my-5 border border-gray-700 p-3 rounded-lg w-full block">
    <div>
      <h6 class="text-sky-600 my-2">References</h6>
    </div>

    <div class="my-2  divide-y divide-gray-700">
      <div v-for="reference in resumeStore.references" :key="reference.id" class="py-2">
        <div class="flex justify-between">
          <div>
            <h6>{{reference.name}} - {{reference.company}}</h6>
            <p class="text-sm text-gray-500 my-1">Phone: {{reference.phone}} Email: {{reference.email}}</p>
          </div>
          <div>
            <button @click="deleteReference(reference.id)">
              <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="resumeStore.customSection.length" class="text-sm my-5 border border-gray-700 p-3 rounded-lg w-full block">
    <div>
      <h6 class="text-sky-600 my-2">Custom Sections</h6>
    </div>

    <div class="my-2  divide-y divide-gray-700">
      <div v-for="section in resumeStore.customSection" :key="section.id" class="py-2">
        <div class="flex justify-between">
          <div>
            <h6>{{section.name}} {{section.location}}</h6>
            <p class="text-sm text-gray-500 my-2">{{moment(section.start_date).format('MMM YYYY')}} - {{moment(section.end_date).format('MMM YYYY')}}</p>
          </div>
          <div class="flex gap-3">
            <div>
              <edit-custom :activity="section">
                <template #trigger>
                  <button>

                    <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M455.7 18.75C443.2 6.252 426.8 0 410.5 0c-16.38 0-32.76 6.25-45.26 18.75L45.11 338.9c-8.568 8.566-14.53 19.39-17.18 31.21l-27.61 122.8C-1.7 502.1 6.159 512 15.95 512c1.047 0 2.116-.1034 3.198-.3202c0 0 84.61-17.95 122.8-26.93c11.54-2.717 21.87-8.523 30.25-16.9l321.2-321.2c24.99-24.99 24.9-65.42-.0898-90.41L455.7 18.75zM138.2 433.9c-2.115 2.115-4.503 3.463-7.308 4.123c-18.17 4.281-47.46 10.71-72.69 16.18l16.55-73.58c.666-2.959 2.15-5.654 4.296-7.803l241.9-241.9l60.13 60.13L138.2 433.9z"/></svg>
                  </button>
                </template>
              </edit-custom>
            </div>
            <div>
              <button @click="deleteSection(section.id)">
                <svg class="h-5 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div>
    <div class="rounded-lg my-3 w-full block space-2 ">
     <div class="inline-block m-1">
       <button @click="newLanguage=true" type="button" class=" flex gap-2 items-center text-sky-600 border px-5 rounded-lg py-2 border-gray-700 text-sm">
         <svg class="h-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
         <span>Languages</span>
       </button>
     </div>
      <div class="inline-block m-1">
        <button @click="newHobbies=true" type="button" class="flex gap-2 items-center text-sky-600 border px-5 rounded-lg py-2 border-gray-700 text-sm">
          <svg class="h-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          <span>Hobbies</span>
        </button>
      </div>
      <div class="inline-block m-1">
        <button @click="createReference=true" type="button" class="flex gap-2 items-center text-sky-600 border px-5 rounded-lg py-2 border-gray-700 text-sm">
          <svg class="h-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          <span>References</span>
        </button>
      </div>
      <div class="inline-block m-1">
        <button @click="customSection=true" type="button" class="flex gap-2 items-center text-sky-600 border px-5 rounded-lg py-2 border-gray-700 text-sm">
          <svg class="h-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          <span>Custom Section</span>
        </button>
      </div>
    </div>
  </div>

  <!-- modal-->
  <languages :show="newLanguage" @close="newLanguage=false"></languages>
  <hobbies :show="newHobbies" @close="newHobbies=false"></hobbies>
  <new-reference :show="createReference" @close="createReference=false"></new-reference>
  <new-custom :show="customSection" @close="customSection=false"></new-custom>
</template>

<style scoped>

</style>