import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";
import {ref} from "vue";
import templates from "../assets/data/templates.json"
import fonts from "../assets/data/fonts.json";

interface Skill{
    name:string,
    id:string,
    level:string
}

interface Role{
    id:string
    title:string
    start_date:string
    end_date:string
    current_job:boolean
    description:string
    employer:string
    city:string
    country:string
}

interface Education{
    id:string
    name:string
    start_date:string
    end_date:string
    current_education:boolean
    description:string
    study_field:string
    location:string
}


interface Course{
    course_name:string
    organization:string
    start_date:string
    end_date:string
}


export const useResumeStore=defineStore('resumeStore',{
    state:  ()=>({
        step: useStorage('step',1),
        doc_name:useStorage('doc_name','Untitled document'),
        resume: useStorage('resume',templates['crisp-white']),
        template:useStorage('template',{
            primary:'',
            secondary:''
        }),
        fontSize:useStorage('fontSize','11px'),
        personalInformation:useStorage('personaInformation',{
            email:'',
            name:'',
            surname:'',
            profession:'',
            phone:'',
            linkedin:'',
            website:''
        }),
        font:useStorage('font',fonts['Source code pro']),
        workExperience : useStorage<Role[]>('workExperience',[]),
        educationHistory:useStorage<Education>('educationHistory',[]),
        skills:useStorage<Skill[]>('skills',[]),
        courses:useStorage<Course[]>('courses',[]),
        languages:useStorage('languages',[]),
        hobbies:useStorage('hobbies',[]),
        references:useStorage('references',[]),
        customSection:useStorage('customSection',[]),
        professionalSummary:useStorage('professionalSummary',''),

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