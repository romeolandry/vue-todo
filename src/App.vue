<template>

  <MainMenu :isDark="themeStore.isDark" />

  <div class="app-container">
    <main class="content-wrapper">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';
import MainMenu from './components/MainMenu.vue';

const themeStore = useThemeStore();
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content-wrapper {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
