<template>
  <div class="page-layout">
    <Form @submit="addTodo">
        <div class="flex flex-col gap-1">
            <InputText v-model="newTodo" type="text" placeholder="Ajouter une tâche" />
        </div>
        <Button type="submit" :disabled="newTodo===0" severity="secondary" label="Ajouter" />
    </Form>

    <div v-if="todos.length ===0"> Vous n'avez pas encore de tâches à faire.</div>
      <div v-else>
        <ul>
          <li v-for="todo in computedSortedTodos"
              :key="todo.date"
              :class="{completed:todo.completed}"
            >
            <label>
              <input type="checkbox" name="" id="" v-model="todo.completed" />
                {{ todo.title }}
            </label>

          </li>
        </ul>
    </div>

    <div>
        <label>
          <input type="checkbox" v-model="hideCompleted" />
          Masquer les tâches complétées
        </label>
    </div>
    <p v-if="remainingTodos >0">
    Il vous reste {{ remainingTodos }} tâche{{ remainingTodos > 1 ? 's' : '' }} à faire.
    </p>
  </div>

</template>
<script setup>
import { ref, computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { Form } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const {isDark} = storeToRefs(themeStore);

const hideCompleted = ref(false);
const newTodo = ref('');

const todos = ref([{
    title: 'Apprendre Vue.js',
    completed: false,
    date: 1
  },
  {
    title: 'Faire les courses',
    completed: true,
    date: 2
  }
]);

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({
      title: newTodo.value.trim(),
      completed: false,
      date: new Date()

    });
    newTodo.value = '';
  }
};

// using computed property to automatically update the list when todos or hideCompleted change
const computedSortedTodos = computed(() => {
    const sortedTodos = todos.value.toSorted((a,b) => a.completed - b.completed);

  if (hideCompleted.value === true) {
    return sortedTodos.filter(t => t.completed === false);
  }

  return sortedTodos;
});

const remainingTodos = computed(() => {
  return todos.value.filter(t => t.completed === false).length;
});

</script>

<style scoped>

.page-layout {

  /*min-height: 100vh;
   background-color: rebeccapurple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
</style>
