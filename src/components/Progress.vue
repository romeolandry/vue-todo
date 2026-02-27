<template>
    <div class="progressbar-container">
        <span>Step {{ value + 1 }}/{{ max + 1 }}</span>
        <ProgressBar :value="progression"> {{ progression }}% </ProgressBar>
    </div>
</template>

<script setup>

import {ref,watch} from 'vue';
import ProgressBar from 'primevue/progressbar';

const progression = ref(null);

const props = defineProps({
    value: Number,
    max: Number
});

watch(() => props.value, () => {
    progression.value = (props.value / props.max) * 100;
});


</script>

<style scoped>
.progressbar-container {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
