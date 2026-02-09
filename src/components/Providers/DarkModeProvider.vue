<template>
    <slot></slot>
</template>
<script setup>
import { provide } from 'vue';

provide('darkMode',true);
</script>
