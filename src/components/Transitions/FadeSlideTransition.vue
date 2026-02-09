<template>
    <Transition
        :name="name"
        mode="out-in"
    >
        <slot></slot>
    </Transition>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'v' // Vue's default prefix
    },
});
</script>

<style>
/* Example: If name="fade" is passed */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
