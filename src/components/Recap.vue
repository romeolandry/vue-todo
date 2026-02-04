<template>
    <h1> Recap</h1>
    <p>You {{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
    <p>You scored {{ score }} out of {{ props.quiz.questions.length }}</p>
</template>
<script setup>

import { computed, ref } from 'vue';

const props = defineProps({
    answers: Array,
    quiz: Object
});

const score = computed(() => {
    let correct = 0;
    props.answers.forEach((answer, index) => {
        if(answer === props.quiz.questions[index].answer){
            correct++;
        }
    });
    return correct;
});

const hasWon = computed(() => score.value > props.quiz.minimun_score);

</script>
