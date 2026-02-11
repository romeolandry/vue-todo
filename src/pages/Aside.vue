<template>
    <aside>
        <nav>
            <ul>
                <li><RouterLink to="/">home</RouterLink></li>
                <li><RouterLink to="/quiz">Quiz</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
            </ul>
        </nav>
    </aside>
</template>
<script setup>

import { watch, ref, inject } from 'vue';
const {darkMode} = inject('darkMode');

</script>
<style>
</style>
