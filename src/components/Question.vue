<template>
    <div :class="['question', themeStore.isDark ? 'dark' : 'light']">
        <h3>{{ question.question }}</h3>
        <TransitionGroup name="list" tag="div" class="answer-container">
            <Answer
                v-for="(choice, index) in shuffledChoices"
                :key="choice"
                :id="`answer${index}`"
                :value="choice"
                :disabled="hasAnswer"
                v-model="answer"
                :correctAnswer="question.correct_answer"
            />
        </TransitionGroup>
    </div>
    <div class="button-container">
        <Button
        :disabled="!hasAnswer"
        @click="handleNext">
        Next
    </Button>
    </div>

</template>
<script setup>
import {shuffleArray } from '@/functions/array.js';
import { useThemeStore } from '@/stores/theme';
import { ref, computed, watch, onMounted} from 'vue';
import Answer from './Answer.vue';
import Button from 'primevue/button';

const themeStore = useThemeStore();

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
});

const answer = ref(null);
const hasAnswer = computed(() => answer.value !== null);
const shuffledChoices = ref([]); // Store the shuffled version in a ref

// Function to shuffle once per question
const setChoices = () => {
  shuffledChoices.value = shuffleArray([...props.question.choices]);
};

// Initial setup
onMounted(setChoices);

// emits to send data back to parent component
const emits = defineEmits(['answer']);

watch(() => props.question, () => {
    answer.value = null;
    setChoices();
});

const handleNext = () => {
  emits('answer', answer.value);
};


</script>

<style>
/* 1. Define Theme Variables */
.question {
    /* Light Mode (Default) */
    --bg-color: var(--p-gray-100);
    --text-color: var(--p-gray-900);
    --shadow-color: var(--p-stone-400);
    --heading-color: #2d3436;

    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px var(--shadow-color);
    transition: all 0.3s ease; /* Smooth transition when theme swaps */
}

/* 2. Dark Mode Overrides */
.question.dark {
    --bg-color: var(--p-gray-800); /* Darker background */
    --text-color: #f5f5f5;
    --shadow-color: rgba(0, 0, 0, 0.5);
    --heading-color: var(--p-primary-300); /* Highlight the question in primary color */

    border: 1px solid var(--p-gray-700);
}

/* 3. Layout Styles */
h3 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--heading-color);
    line-height: 1.4;
}

.answer-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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
  /* transition: all 0.5s ease; */
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.list-leave-active {
    position:absolute;
}


.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
  transform: translateY(10px);
}

/* Ensure global reset doesn't mess with layout */
ul li {
    list-style: none;
}


</style>
