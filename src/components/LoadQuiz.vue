<template>
    <div>
        <h1> {{ quiz.title }}</h1>
        <Progress :value="step" :max="quiz.questions.length -1" />
        <Question :question="question" v-if="state === 'question'" @answer="addAnswer" />
        <Recap v-if="state === 'recap'" :answers="answers" :quiz="quiz"  v-show="state === 'recap'"/>


    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import Progress from '../components/Progress.vue';
import Question from '../components/Question.vue';
import Recap from '../components/Recap.vue';
// import FadeSlideTransition from '../components/Transitions/FadeSlideTransition.vue'

const props = defineProps({
    quiz: Object
});

const state = ref('question');
const step = ref(0);
const question = computed(() => props.quiz.questions[step.value]);
const answers = ref(props.quiz.questions.map(() => null));


const addAnswer = (answer) => {
    answers.value[step.value] = answer;
    if(step.value === props.quiz.questions.length -1){
        state.value = 'recap';

    }else{
        step.value++;
    }
};

</script>
