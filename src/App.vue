<template>

  <h1>Daily Todo</h1>

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
      <li v-for="todo in sortedTodos()"
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

</template>



<script setup>

import {ref} from 'vue';

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

const sortedTodos = () => {
  // todos.value.sort((a,b) => a.completed - b.completed);
  // return todos.value;
  const sortedTodos = todos.value.toSorted((a,b) => a.completed - b.completed);
  if (hideCompleted.value === true) {
    return sortedTodos.filter(t => t.completed === false);
  }

  return sortedTodos;
};



</script>

<style scoped>

.completed {
  opacity: .5;
  text-decoration: line-through;
}

</style>
