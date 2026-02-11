<template>
  <Layout>
    <fieldset class="toggle-dark-container">
    <label>
        <input name="toggledark" type="checkbox" v-model="toggleDarkMode"  role="switch" aria-invalid="false"/>
        Toggle Dark
    </label>
    </fieldset>

    <template v-slot:header>
      <h1>Learn VueJs</h1>
    </template>

    <template v-slot:aside>
      <Aside />
    </template>

    <template v-slot:main>
      <RouterView />
    </template>

    <template v-slot:footer>
      <p>© 2026 Mon Application Todo</p>
    </template>
  </Layout>
</template>


<script setup>

import Layout from './Layout.vue';
import Aside from "../src/pages/Aside.vue"

import { watch, ref, provide } from 'vue';
  const toggleDarkMode = ref(true);

  watch(toggleDarkMode, (newValue) => {
      provide ('darkMode',newValue);
  });
</script>

<style scoped>



</style>
