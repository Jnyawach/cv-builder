import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import ResumeBuild from './view/ResumeBuild.vue'
import Home from './view/Home.vue'

import App from './App.vue'

const routes = [
    { path: '/resume-app', component: () => import('./view/ResumeBuild.vue') },
    { path: '/', component: () => import('./view/Home.vue') },
    {path:'/about',component:()=>import('./view/About.vue')},

]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})
createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
