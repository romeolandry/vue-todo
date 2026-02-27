import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import {routes } from "./Routes"

const router = createRouter({
    history: createWebHistory(),
    routes

})

// handle global store
const pinia = createPinia()
const app = createApp(App);



/* Works because highlight tokens are defined under colorScheme */
const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                semantic: {
                    highlight: {
                        background: '{primary.50}',
                        color: '{primary.700}',
                    }
                }
            },
            dark: {
                semantic: {
                    highlight: {
                        background: '{primary.200}',
                        color: '{primary.900}',
                    }
                }
            }
        }
    }
});


app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark',
        }
    }
});


app.use(pinia)
app.use(router);
app.mount('#app');
