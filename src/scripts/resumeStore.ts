import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";
import {ref} from "vue";
import templates from "../assets/data/templates.json"
import fonts from "../assets/data/fonts.json";
import {v4 as uuidv4} from "uuid";

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
    id:string
}

interface Information{
    name:string,
    surname:string,
    profession:string,
    postalCode:string,
    phone:string,
    email:string,
    website:string,
    linkedin:string,
    twitter:string
    postal_code:string,
    country:string,
    city:string
}

interface Reference{
    name:string,
    company:string,
    email:string,
    phone:string,
    profession:string,
    id:string
}

interface Language{
    name:string,
    level:string,
    id:string
}

interface Custom{
    name:string,
    location:string,
    start_date:string,
    end_date:string,
    description:string,
    id:string
}

interface Hobbies{
    name:string;
    id:string;
}


export const useResumeStore=defineStore('resumeStore',{
    state:  ()=>({
        step: useStorage('step',1),
        doc_name:useStorage('doc_name','Untitled document'),
        resume: useStorage('resume',templates['crisp-white']),
        template:useStorage('template',{
            primary:'',
            secondary:'',
            id:''
        }),
        fontSize:useStorage('fontSize','11px'),
        personalInformation:useStorage<Information>('personaInformation',{
            name:'',
            surname:'',
            profession:'',
            postalCode:'',
            phone:'',
            email:'',
            website:'',
            linkedin:'',
            twitter:'',
            postal_code:'',
            country:'',
            city:''
        }),
        font:useStorage('font',fonts['Source code pro']),
        workExperience : useStorage<Role[]>('workExperience',[]),
        educationHistory:useStorage<Education[]>('educationHistory',[]),
        skills:useStorage<Skill[]>('skills',[]),
        courses:useStorage<Course[]>('courses',[]),
        languages:useStorage<Language[]>('languages',[]),
        hobbies:useStorage<any>('hobbies',{}),
        references:useStorage<Reference[]>('references',[]),
        customSection:useStorage<Custom[]>('customSection',[]),
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