import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import CrispWhite from "./components/designs/crisp-white.vue";
const pinia = createPinia()
createApp(App)
    .use(pinia)
    .component('crisp-white',CrispWhite)
    .mount('#app')
