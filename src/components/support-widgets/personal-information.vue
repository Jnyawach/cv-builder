<template>
    <form autocomplete="off">
        <div>
        <div>
        <h1 class="text-2xl font-bold text-sky-500">Personal Information</h1>
        <p class="my-2 font-light text-sm">We suggest including an email and phone number.</p>
      </div>
        <div class="grid md:grid-cols-2 gap-2 my-3">
            <div>
            <label for="name" class="resume-label">First Name:</label>
            <input v-model="personalInformation.name" id="name" type="text" 
            class="resume-input" placeholder="e.g Maria">
            </div>
            <div>
            <label for="surname" class="resume-label">Surname:</label>
            <input v-model="personalInformation.surname" id="surname" type="text" 
            class="resume-input" placeholder="e.g Kowaceti">
            </div>
            
        </div>
        <div class="grid  my-3">
            <div>
            <label for="profession" class="resume-label">Profession:</label>
            <input v-model="personalInformation.profession" id="profession" type="text" 
            class="resume-input">
            </div>
           
            
        </div>
        <div class="grid  my-3 md:grid-cols-7 gap-2">
            <div class="md:col-span-3">
            <label for="city" class="resume-label">City:</label>
            <input v-model="personalInformation.city" id="city" type="text" class="resume-input">
            </div>
            <div class="md:col-span-2">
            <label for="country" class="resume-label">Country:</label>
            <input v-model="personalInformation.country" id="country" type="text" class="resume-input">
            </div>
            <div class="md:col-span-2">
            <label for="postal_code" class="resume-label">Postal code:</label>
            <input v-model="personalInformation.postal_code" id="postal_code" type="text" class="resume-input">
            </div>
            
        </div>
        <div class="my-5">
         <h6 class="font-medium text-sm">Social Links (optional)</h6>

         <div class="grid  my-3">
            <div>
            <label for="personal_website" class="resume-label">Website:</label>
            <input v-model="personalInformation.website" id="personal_website" type="text" 
            class="resume-input" placeholder="e.g www.mariakowaceti.com">
            </div>
           
        </div>

        <div class="grid md:grid-cols-2 gap-2 my-3">
            <div>
            <label for="linkedin" class="resume-label">Linkedin:</label>
            <input v-model="personalInformation.linkedin" id="linkedin" type="text" 
            class="resume-input">
            </div>
            <div>
            <label for="twitter" class="resume-label">Twitter:</label>
            <input v-model="personalInformation.twitter" id="twitter" type="text" 
            class="resume-input">
            </div>
            
        </div>
        </div>
    </div>
    </form>
</template>
<script setup lang="ts">
import {ref, onMounted, watch} from "vue"
import { useStorage } from "@vueuse/core";
const resume=useStorage('resume',{})
const personalInformation=ref({
  name:'',
  surname:'',
  profession:'',
  city:'',
  country:'',
  postal_code:'',
  linkedin:'',
  website:'',
  twitter:''
})

onMounted(() => {
    personalInformation.value=resume.value.personalInformation??''
})

watch(personalInformation,()=>{
    resume.value.personalInformation=personalInformation.value
}, {deep:true})

</script>
<style scoped></style>