import { createApp } from 'vue'
import App from './App.vue'
import AppQuiz from './pages/QuizPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import {routes } from "./Routes"

const router = createRouter({
    history: createWebHistory(),
    routes

})

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);
app.mount('#app');
