<script setup lang="ts">
import { computed, inject } from 'vue'
import { useTodoStore } from '@/stores/todo-store'
import TodoList from './TodoList.vue'
import type { Ref } from 'vue'

const todosStore$ = useTodoStore()
const snackbar = inject('snackbar') as Ref<{
  show: boolean
  text: string
}>

const showCompletedTasks = computed(() => todosStore$.todos.length > 0)
const showUnCompletedTasks = computed(() => todosStore$.completedTodos.length > 0)

const markTask = (id: string, completed: boolean) => {
  if (completed) {
    todosStore$.markCompleted(id)
    snackbar.value.show = true
    snackbar.value.text = 'Task marked as completed'
  } else {
    todosStore$.markAsUncompleted(id)
  }
}
</script>

<template>
  <section aria-label="UnCompleted tasks">
    <TodoList v-if="showCompletedTasks" @completed-task="markTask" :todos="todosStore$.todos" />
  </section>
  
  <section aria-label="Completed Task">
    <h3>Completed task list</h3>
    <TodoList
      v-if="showUnCompletedTasks"
      @completed-task="markTask"
      :todos="todosStore$.completedTodos"
    />
  </section>
</template>
