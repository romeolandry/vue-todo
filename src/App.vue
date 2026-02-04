<template>

  <Layout>
    <template v-slot:header>
      <h1>Daily Todo</h1>
    </template>

    <template v-slot:main>

      <form action="" @submit.prevent="addTodo">
        <fieldset role="group">
          <input
            type="text"
            v-model="newTodo"
            placeholder="Ajouter une tâche"
          />

          <button :disabled="newTodo===0" type="submit">Ajouter</button>
        </fieldset>
      </form>

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
      <div>
        <h1>Timer: used lifecycle hooks</h1>
          <button @click="showTimer = !showTimer">sow/hidde</button>
          <Timer v-if="showTimer" />
      </div>

      <div>
        <h1>Vue Watchers : change html page title </h1>
          <input type="text" v-model="name">
      </div>

      <div>
        <h1>Timer: used lifecycle hooks and composable functions</h1>
          Temps ecoulé : {{ time }}
          <button @click="reset">Reset</button>
      </div>

    </template>

    <template v-slot:footer>
      <p>© 2026 Mon Application Todo</p>
    </template>
  </Layout>
</template>



<script setup>

import {computed, ref, watch} from 'vue';
import Layout from './Layout.vue';
import Timer from './Timer.vue';
import { useTimer } from './composable/useTimer';

const hideCompleted = ref(false);
const newTodo = ref('');
const showTimer = ref(true);
const name = ref('');
const { time, reset} = useTimer();

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

// watch the name value and update the page title
watch(name, (newValue, oldValue) => {
  document.title = newValue;
},{
  immediate: true // run the watcher when the component is mounted
});


</script>

<style scoped>

.completed {
  opacity: .5;
  text-decoration: line-through;
}

</style>
