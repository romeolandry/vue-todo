<template>
    <div class="answer-item">
        <RadioButton
            :disabled="disabled"
            v-model="model"
            :inputId="id"
            name="answer"
            :value="value"
            size="large"
        />
        <label :for="id" :class="classes">{{ value }}</label>
    </div>

</template>
<script setup>
    import { ref, computed, watch } from 'vue';
    import RadioButton from 'primevue/radiobutton';


    const props = defineProps({
        id: String,
        value: String,
        disabled: Boolean,
        correctAnswer: String
    });

    const model = defineModel();

    const classes = computed(() => ({
        disabled: props.disabled,
        right: props.disabled && props.value === props.correctAnswer, // && model.value === props.value,
        wrong: props.disabled && props.value !== props.correctAnswer && model.value === props.value
    }));

</script>

<style>

.answer-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.disabled {
    opacity: 0.5;
}

.right {
    opacity: 1;
    color: var(--p-green-500)
}

.wrong {
    opacity: 1;
    color: var(--p-red-500);
}

</style>
