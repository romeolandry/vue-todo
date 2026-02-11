<template>
    <div v-if="state=== 'error'">
        Load error
    </div>
    <div :aria-busy="state=== 'loading'">
            <LoadQuiz v-if="quiz && state === 'success'" :quiz="quiz" />
    </div>
</template>

<script setup>
import {getRandomElements} from '@/functions/array.js'
import {onMounted, ref,inject} from 'vue';
import LoadQuiz from '../components/LoadQuiz.vue';

const {darkMode} = inject('darkMode');


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
