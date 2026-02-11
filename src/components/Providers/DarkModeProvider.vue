<template>
    <slot></slot>
</template>
<script setup>
import { provide, readonly, ref } from 'vue';

const darkMode = ref(true);

provide('darkMode',{
    darkMode:readonly(),
    updateMode:()  => {
        darkMode.value = !darkMode.value;
    }
});
</script>
