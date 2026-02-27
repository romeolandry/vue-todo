<template>
    <h1> Recap</h1>
    <p>You {{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
    <h2>You scored {{ score }} out of {{ props.quiz.questions.length }}</h2>
    <History
        :answers="answers"
        :quiz="props.quiz"
    />
</template>
<script setup>

import { computed } from 'vue';
import History from './History.vue';

const props = defineProps({
    answers: Array,
    quiz: Object
});

const score = computed(() => {
    return props.quiz.questions.reduce((acc, question, index) => {
        if(question.correct_answer === props.answers[index]){
            acc++;
        }
        return acc;
    }, 0)
});

const hasWon = computed(() => score.value > props.quiz.minimun_score);

</script>
