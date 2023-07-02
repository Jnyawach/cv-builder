<template>
    <form autocomplete="off">
        <div>
        <div>
        <h1 class="text-2xl font-bold text-sky-500">Personal Information</h1>
        <p class="my-2 font-light text-sm">We suggest including an email and phone number.</p>
      </div>
        <div class="grid md:grid-cols-2 gap-1 my-3">
            <div>
            <label for="name" class="resume-label">First Name:</label>
            <input v-model="resumeStore.personalInformation.name" id="name" type="text"
            class="resume-input" placeholder="e.g Maria">
            </div>
            <div>
            <label for="surname" class="resume-label">Surname:</label>
            <input v-model="resumeStore.personalInformation.surname" id="surname" type="text"
            class="resume-input" placeholder="e.g Kowaceti">
            </div>
            
        </div>
          <div class="grid md:grid-cols-2 gap-1 my-3">
            <div>
              <label for="phone" class="resume-label">Phone:</label>
              <input v-model="resumeStore.personalInformation.phone" id="phone" type="text"
                     class="resume-input" placeholder="e.g +254712345678">
            </div>
            <div>
              <label for="email" class="resume-label">Email:</label>
              <input v-model="resumeStore.personalInformation.email" id="email" type="email"
                     class="resume-input" placeholder="e.g mariakowaceti@gmail.com">
            </div>

          </div>
        <div class="grid  my-3">
            <div>
            <label for="profession" class="resume-label">Profession:</label>
            <input v-model="resumeStore.personalInformation.profession" id="profession" type="text"
            class="resume-input" placeholder="e.g. Junior Architect">
            </div>
           
            
        </div>
        <div class="grid  my-3 md:grid-cols-7 gap-1">
            <div class="md:col-span-3">
            <label for="city" class="resume-label">City:</label>
            <input v-model="resumeStore.personalInformation.city" id="city" type="text" class="resume-input"
            placeholder="e.g. Nairobi">
            </div>
            <div class="md:col-span-2">
            <label for="country" class="resume-label">Country:</label>
            <input v-model="resumeStore.personalInformation.country" id="country" type="text" class="resume-input"
            placeholder="e.g. Kenya">
            </div>
            <div class="md:col-span-2">
            <label for="postal_code" class="resume-label">Postal code:</label>
            <input v-model="resumeStore.personalInformation.postal_code" id="postal_code" type="text" class="resume-input"
            placeholder="e.g. 00100">
            </div>
            
        </div>
        <div class="my-5">
         <h6 class="font-medium text-sm">Social Links (optional)</h6>

         <div class="grid  my-3">
            <div>
            <label for="personal_website" class="resume-label">Website:</label>
            <input v-model="resumeStore.personalInformation.website" id="personal_website" type="text"
            class="resume-input" placeholder="e.g www.mariakowaceti.com">
            </div>
           
        </div>

        <div class="grid md:grid-cols-2 gap-1 my-3">
            <div>
            <label for="linkedin" class="resume-label">Linkedin:</label>
            <input v-model="resumeStore.personalInformation.linkedin" id="linkedin" type="text"
            class="resume-input">
            </div>
            <div>
            <label for="twitter" class="resume-label">Twitter:</label>
            <input v-model="resumeStore.personalInformation.twitter" id="twitter" type="text"
            class="resume-input">
            </div>
            
        </div>
        </div>
    </div>
    </form>
</template>
<script setup lang="ts">
import {ref} from "vue"
import {useResumeStore} from "../../scripts/resumeStore";
const resumeStore=useResumeStore()
</script>
<style scoped></style>