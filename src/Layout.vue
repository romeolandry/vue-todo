<template>
    <DarkModeProvider>
        <div class="layout">
            <header v-if="$slots.header">
                <slot name="header" />
            </header>
            <aside v-if="$slots.aside">
                <slot name="aside" />
            </aside>
            <main v-if="$slots.main">
                <slot name="main" />
            </main>
            <footer v-if="$slots.footer">
                <slot name="footer" />
            </footer>
        </div>
    </DarkModeProvider>
</template>

<script setup>

    // import { watch, ref, provide } from 'vue';
    import DarkModeProvider from './components/Providers/DarkModeProvider.vue'

    // const toggleDarkMode = ref(true);

    // watch(toggleDarkMode, (newValue) => {
    //     provide ('darkMode',newValue);
    // });

</script>
<style scoped>

.toggle-dark-container{
  display: flex;
  justify-content: end;
}

.layout {
    display: grid;
    grid-template-columns: 200px 1fr;
}

.layout > * {
    /* border: 1px solid #e20c0c; */
    padding: 10px;
}

.layout aside {
    /*background-color: #f0f0f0; */
    grid-column: 1/2;
}

.layout main {
    background-color: #ffffff;
    grid-column: 2/3;
}

.layout header,
.layout footer {
    grid-column: 1/-1;
    background-color: #f8f8f8;
    text-align: center;
}
.layout header {
    max-height: 400px;
}
.layout footer {
    max-height: 200px;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
}
</style>
