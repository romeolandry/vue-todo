<template>
    <div ref="div">
        Temps: {{ time }}

        <h5> this size element after onMounted </h5>
        Width : {{ size.width }},     Height : {{ size.height }}
    </div>
</template>
<script setup>
import { onMounted , onUnmounted, ref } from 'vue';

const time = ref(0);
const div = ref(null);
const size = ref({width: 0, height: 0});

let timer;

onMounted(() => {
   timer = setInterval(() => {
        time.value++;
    }, 1000);

    // get the size of the element
    const divElementRect = div.value.getBoundingClientRect();
    size.value.width = divElementRect.width;
    size.value.height = divElementRect.height;
});

onUnmounted(() => {
    clearInterval(timer);
});

</script>
