<template>
<div class="top-menu-wrapper" >
    <Menubar :model="menuStore.items" class="top-menu">
        <template #item="{ item, props, hasSubmenu, root }">
            <RouterLink v-if="item.routeName" :to="{ name: item.routeName }" v-slot="{ href, navigate }" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :value="item.badge" class="ml-2" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                        {{ item.shortcut }}
                    </span>
                    <i v-if="hasSubmenu" :class="['pi ml-2', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
                </a>
            </RouterLink>

            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <i v-if="hasSubmenu" :class="['pi ml-2', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
            </a>
        </template>

        <template #end>
            <div class="flex items-center gap-3 px-2">
                <i :class="themeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'" class="text-sm" />
                <ToggleSwitch
                    v-model="themeStore.isDark"
                    @update:modelValue="themeStore.toggleDarkMode"
                />
            </div>
        </template>
    </Menubar>
</div>
</template>

<script setup>
import { useMenuStore } from '@/stores/menu';
import { useThemeStore } from '@/stores/theme';
import { computed } from "vue";
import Badge from "primevue/badge";
import ToggleSwitch from 'primevue/toggleswitch';
import Menubar from 'primevue/menubar';

const menuStore = useMenuStore();
const themeStore = useThemeStore();

const props = defineProps({
    isDark: Boolean // Note: If menuStore handles items, you might not need an items prop anymore
});
</script>

<style scoped>
.top-menu-wrapper{
    position: fixed;
    width: 100%;
    height: 75px;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1000; /* Ensure it stays above other content */
}

.top-menu{
  position: relative;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border: none;

}

</style>
