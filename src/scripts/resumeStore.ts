import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";
import {ref} from "vue";
import templates from "../assets/data/templates.json"
import fonts from "../assets/data/fonts.json";

export const useResumeStore=defineStore('resumeStore',{
    state: ()=>({
        step: useStorage('step',1),
        doc_name:useStorage('doc_name','Untitled document'),
        resume: useStorage('resume',templates['crisp-white']),
        template:useStorage('template',{}),
        fontSize:useStorage('fontSize','11px'),
        personalInformation:useStorage('personaInformation',{}),
        font:useStorage('font',fonts['Source code pro']),
        workExperience:useStorage('workExperience',[]),
        educationHistory:useStorage('educationHistory',[]),
        skills:useStorage('skills',[]),
        courses:useStorage('courses',[]),
        languages:useStorage('languages',[]),
        hobbies:useStorage('hobbies',[]),
        references:useStorage('references',[]),
        customSection:useStorage('customSection',[])
    }),

    getters:{

    },

    actions:{
        addStep() :void{
          this.step++
        },
        reduceStep() :void{
            if (this.step>1){
                this.step--
            }
        } ,


    }
})