<template>
    <div>
        Step {{ value + 1 }}/{{ max + 1 }}
        <progress :value="value" :max="max"></progress>
    </div>
</template>

<script setup>
defineProps({
    value: Number,
    max: Number
});
</script>
