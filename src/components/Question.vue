<template>
    <div class="question" :data-theme="darkMode ? 'dark' : 'light'">
        <h5>{{ question.question }}</h5>
        <ul>
            <TransitionGroup name="list">
                <li v-for="(choice, index) in randomChoices" :key="choice">
                    <Answer
                        :id="`answer${index}`"
                        :value="choice"
                        :disabled="hasAnswer"
                        v-model="answer"
                        :correctAnswer="question.correct_answer"
                    />
                </li>
            </TransitionGroup>
        </ul>
    </div>
    <div class="button-container">
        <button :disabled="!hasAnswer" @click="emits('answer',answer)">Next</button>
    </div>

</template>
<script setup>
import {shuffleArray } from '@/functions/array.js';
import { ref, computed, watch, inject , unref} from 'vue';
import Answer from './Answer.vue';

const {darkMode} = inject('darkMode');

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
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
