import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMenuStore = defineStore('menu', () => {
    // 1. State
    const items = ref([
        { label: 'Home', icon: 'pi pi-home', routeName: 'home' },
        { label: 'About', icon: 'pi pi-info-circle', routeName: 'about' },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            badge: 3,
            items: [
                { label: 'Todo', icon: 'pi pi-list', routeName: 'todo', shortcut: '⌘+T' },
                { label: 'Quiz', icon: 'pi pi-graduation-cap', routeName: 'quiz', shortcut: '⌘+S' },
                { separator: true },
                { label: 'UI Kit', icon: 'pi pi-pencil', shortcut: '⌘+U' }
            ]
        }
    ]);

    // 2. Getters (Computed)
    const itemHome = computed(() => {
        // Reference 'items.value' (the state), not props
        return items.value.find(item => item.routeName?.toUpperCase() === 'HOME')
               || { label: 'Home', path: '/' };
    });

    // 3. Actions (Functions)
    const getSubmenuItemByName = (menuArray, name) => {
        const searchName = name.toUpperCase(); // Normalize once for performance

        for (const item of menuArray) {
            // Check label (case-insensitive)
            if (item.label?.toUpperCase() === searchName) {
                return item;
            }
            // Recursive check for children
            if (item.items) {
                const found = getSubmenuItemByName(item.items, name);
                if (found) return found;
            }
        }
        return null;
    };

    return {
        items,
        itemHome,
        getSubmenuItemByName
    };
});
