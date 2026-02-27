<template>
    <div class="page-layout">
        <div v-if="state=== 'error'">
            Load error
        </div>
        <div :aria-busy="state=== 'loading'">
                <LoadQuiz v-if="quiz && state === 'success'" :quiz="quiz" />
        </div>
    </div>
</template>

<script setup>
import {getRandomElements} from '@/functions/array.js'
import {onMounted, ref} from 'vue';
import LoadQuiz from '../components/LoadQuiz.vue';

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

.page-layout {

  /*min-height: 100vh;
   background-color: rebeccapurple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

</style>
