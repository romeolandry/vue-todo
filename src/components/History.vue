
<template>
    <div class="card">
        <DataTable :value="history" stripedRows :rowClass="rowClass">
            <Column field="question" header="Question" ></Column>
            <Column field="answer" header="Answer">
            </Column>
            <Column field="correct_answer" header="Correct Answer"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import {computed } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';

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

const rowClass = (data) => {
    return [{ 'success': data.answer === data.correct_answer }, { 'danger': data.answer !== data.correct_answer }];
};

</script>

<style>
.danger *{
    color: var(--p-red-500);
}
.success *{
    color: var(--p-green-500)
}
</style>
