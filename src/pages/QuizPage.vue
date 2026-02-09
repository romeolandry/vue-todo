<template>
    <div v-if="state=== 'error'">
        Load error
    </div>
    <div :aria-busy="state=== 'loading'">
        <DarkModeProvider>
            <LoadQuiz v-if="quiz && state === 'success'" :quiz="quiz" />
        </DarkModeProvider>
    </div>
</template>

<script setup>
import {getRandomElements} from '@/functions/array.js'
import {computed, onMounted, provide, ref, watch} from 'vue';
// import LoadQuiz1 from 'src\components\LoadQuiz.vue';
import LoadQuiz from '../components/LoadQuiz.vue';
import DarkModeProvider from '../components/Providers/DarkModeProvider.vue'


// inject provider
provide('darkMode', false);

const state = ref('loading');
const quiz = ref(null);

onMounted(() => {
    fetch('./quiz.json')
        .then(r =>{
            if(r.ok){
                return r.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            data.questions = getRandomElements(data.questions,5);
            quiz.value = data;
            state.value = 'success';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            state.value = 'error';
        });
});

</script>

<style scoped>

</style>
