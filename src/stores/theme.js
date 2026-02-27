import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
    const darkMode = ref(false);

    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        // console.log(`Dark mode is now ${darkMode.value ? 'enabled' : 'disabled'}`);
        // Toggle the class on the root element to switch themes
        document.documentElement.classList.toggle('my-app-dark');
    };

    return {
        isDark: darkMode.value,
        toggleDarkMode
    }
});
