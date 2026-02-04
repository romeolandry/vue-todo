<template>

    <label :for="id" :class="classes">
        <input
            :disabled="disabled"
            type="radio"
            :id="id"
            name="answer"
            :value="value"
            v-model="model"
        />
        {{ value }}
    </label>

</template>
<script setup>
    import { ref, computed, watch } from 'vue';
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
.disabled {
    opacity: 0.5;
}

.right {
    opacity: 1;
    color: green;
}

.wrong {
    opacity: 1;
    color: red;
}

</style>
