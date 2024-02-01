import { ref } from 'vue';
import { defineStore } from 'pinia';
import TODOS_MOCK from '../__mock__/todos.json';


interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>(TODOS_MOCK);
  const completedTodos = ref<TodoItem[]>([]);

  const add = (todo: TodoItem) => {
    todos.value.push(todo);
  }

  const remove = (id: string) => {
    const newTodos = todos.value.filter(todo => todo.id !== id);
    todos.value = newTodos;
  }

  const markCompleted = (id: string) => {
    const newTodos = todos.value.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
        completedTodos.value.push(todo);
      }
      return todo;
    }).filter(todo => todo.id !== id);

    todos.value = newTodos;
  }

  const markAsUncompleted = (id: string) => {
    const newTodos = completedTodos.value.map((todo) => {
      if (todo.id === id) {
        todo.completed = false;
        todos.value.push(todo);
      }
      return todo;
    }).filter(todo => todo.id !== id);

    completedTodos.value = newTodos;
  }

  return { todos, add, remove, markCompleted, markAsUncompleted, completedTodos };
});