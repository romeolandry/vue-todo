<template>

<div>
    <table class="striped">
        <thead :data-theme="darkMode ? 'dark' : 'light'">
            <tr>
            <th scope="col">Question</th>
            <th scope="col">Given Answer</th>
            <th scope="col">waiting Answer</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in history" :key="index" :class="item.answer === item.correct_answer ? 'success' : 'danger'">
                <th scope="row">{{ item.question }}</th>
                <td>{{ item.answer }}</td>
                <td>{{ item.correct_answer }}</td>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script setup>

import { computed, inject, unref} from 'vue';

const {darkMode} = inject('darkMode');

const props = defineProps({
    answers: Array,
    quiz: Object
});

// history is an array objects with the question and the answer given by the user
const history = computed(() => {
    let resp = [];
    props.answers.forEach((answer, index) => {
        let question = props.quiz.questions.find(q => q.choices.includes(answer));
        resp.push({
            question: question.question,
            answer: answer,
            correct_answer: question.correct_answer
        });
    });
    return resp;
});


</script>

<style>
.danger *{
    color: red;
}
.success *{
    color: green;
}
</style>
