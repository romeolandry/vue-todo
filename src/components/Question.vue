<template>
    <div class="question">
        <h3>{{ question.question }}</h3>
            <div class="answer-container">
            <Answer
                v-for="(choice, index) in randomChoices" :key="choice"
                :id="`answer${index}`"
                :value="choice"
                :disabled="hasAnswer"
                v-model="answer"
                :correctAnswer="question.correct_answer"
            />
            </div>
        </div>
    <div class="button-container">
        <Button :disabled="!hasAnswer" @click="emits('answer',answer)">Next</Button>
    </div>

</template>
<script setup>
import {shuffleArray } from '@/functions/array.js';
import { ref, computed, watch} from 'vue';
import Answer from './Answer.vue';
import Button from 'primevue/button';

const props =defineProps({
    question: Object
});

const answer = ref(null);
const hasAnswer = computed(() => answer.value !== null);
const randomChoices = computed(() => shuffleArray(props.question.choices));


// emits to send data back to parent component
const emits = defineEmits(['answer']);

watch(() => props.question, () => {
    answer.value = null;
});

</script>

<style>
.question {
    background-color: var(--p-gray-100);
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px var(--p-stone-400);
}

.answer-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

h3 {
    margin: 0;
}
.button-container{
    display: flex;
    justify-content: end;
    margin-top: 1rem;
}

/** remove style from ul li */
ul li {
    display: inline;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
    position:absolute;
}


.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


</style>
