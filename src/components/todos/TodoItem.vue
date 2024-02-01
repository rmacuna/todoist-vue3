<script setup lang="ts">
import { ref } from 'vue'
import TodoCard from '../base/TodoCard.vue'
import CheckInput from '../base/CheckInput.vue'

const props = defineProps<{
  id: string
  title: string
  completed: boolean
  disabled?: boolean
}>()

const emit = defineEmits(['completed-task'])
const checkboxValue = ref(props.completed)

const updateCheckboxValue = (value: boolean) => {
  emit('completed-task', props.id, value)
  checkboxValue.value = value
}
</script>

<template>
  <TodoCard>
    <template #check-container>
      <CheckInput :model-value="checkboxValue" @update:model-value="updateCheckboxValue" />
    </template>

    <template #content>
      <h4 :class="{ 'is-disabled': completed }">{{ title }}</h4>
    </template>
  </TodoCard>
</template>

<style scoped lang="scss">
.is-disabled {
  text-decoration: line-through;
}
</style>
