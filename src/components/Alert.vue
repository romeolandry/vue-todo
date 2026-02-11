<template>

    <div :class="classes" role="alert">
        <slot></slot>
        <button @click="$emit('close')">&times;</button>
    </div>

</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    type:String
})

const emits = defineEmits(['close'])

const classes = computed(() => 'alert alert-${props.type}')

</script>

<style>

</style>
