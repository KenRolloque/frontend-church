import { createApp } from 'vue'
import router from '../Router/router'
import './style.css'
import App from './App.vue'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
// import './assets/sass/styles.scss'


import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';


createApp(App)
    .use(ToastService)
    .use(ConfirmationService)
    .use(router)
    .use(PrimeVue,{
      theme:{
        preset:Aura,
      }
    })

    .mount('#app')
