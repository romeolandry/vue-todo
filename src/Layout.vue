<template>
    <DarkModeProvider>
        <div
        class="layout "
        :darkmode="darkmode"
        :data-theme="darkmode ? 'dark' : 'light'"
        >
            <header v-if="$slots.header" :class="classes">
                <slot name="header" />
            </header>
            <aside v-if="$slots.aside" :class="classes">
                <slot name="aside" />
            </aside>
            <main v-if="$slots.main" :class="classes">
                <slot name="main" />
            </main>
            <footer v-if="$slots.footer" :class="classes">
                <slot name="footer" />
            </footer>
        </div>
    </DarkModeProvider>
</template>

<script setup>
    import { computed } from 'vue';
import DarkModeProvider from './components/Providers/DarkModeProvider.vue'

    const props = defineProps({
        darkmode: Boolean,
    });

    const classes = computed(() =>{
        console.log(props.darkmode);

        dark: props.darkmode==true;
        light: props.darkmode==false;
    })

</script>
<style scoped>
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
    /*background-color: #ffffff;*/
    grid-column: 2/3;
}

.layout header,
.layout footer {
    grid-column: 1/-1;
    /*background-color: #f8f8f8;*/
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
