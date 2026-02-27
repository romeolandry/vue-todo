<template>
  <div class="page-layout">
    <DataView :value="cards" layout="grid">
      <template #grid="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 xl:col-4 p-2">
            <RouterLink :to="{ name: item.routeName }" class="no-underline">
              <Card class="custom-card">
                <template #title>
                  <div class="flex align-items-center gap-2">
                    <i :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                  </div>
                </template>
                <template #content>
                  <p>{{ item.content }}</p>
                </template>
              </Card>
            </RouterLink>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'primeflex/primeflex.css';
import DataView from 'primevue/dataview';
import Card from 'primevue/card';
import 'primeicons/primeicons.css'

const cards = ref([
  {
    title: 'Todo List',
    icon: 'pi pi-list',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    routeName: 'todo'
  },
  {
    title: 'Quiz App',
    icon: 'pi pi-question',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    routeName: 'quiz'
  },
  {
    title: 'Weather App',
    icon: 'pi pi-cloud',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    routeName: 'about'
  },
  {
    title: 'Chat App',
    icon: 'pi pi-comments',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    routeName: 'about'
  },
  {
    title: 'E-commerce',
    icon: 'pi pi-shopping-cart',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    routeName: 'about'
  },
  {
    title: 'Blog Platform',
    icon: 'pi pi-pencil',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    routeName: 'about'
  }
]);
</script>

<style scoped>

.page-layout {
  min-height: 100vh;
  /* background-color: rebeccapurple; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.custom-card {
  height: 100%;
  /* PrimeVue components automatically handle dark mode
     via the theme designer, so manual border overrides
     usually aren't necessary here. */
}

.dataview-container {
  padding: 1rem;
}
</style>
