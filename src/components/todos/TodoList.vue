<script setup lang="ts">
import TodoItem from './TodoItem.vue'

interface Todo {
  id: string
  title: string
  completed: boolean
}

defineProps<{ todos: Todo[] }>()
const emit = defineEmits(['completed-task'])

const markAsCompleted = (id: string, completed: boolean) => {
  emit('completed-task', id, completed)
}
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <TodoItem
        @completed-task="markAsCompleted"
        :id="todo.id"
        :title="todo.title"
        :completed="todo.completed"
      />
    </li>
    <slot name="message"></slot>
  </ul>
</template>
