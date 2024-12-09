import { createApp } from 'vue'
import router from '../Router/router'
import './style.css'
import App from './App.vue'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

// import './assets/sass/styles.scss'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import VueCookies from 'vue-cookies'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(VueSweetalert2)
    .use(VueCookies)
    .use(ToastService)
    .use(ConfirmationService)
    .use(router)
    .use(PrimeVue,{
      theme:{
        preset:Aura,
      }
    })

    .mount('#app')
