<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CheckInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const onChangeInput = (event: Event) => {
      emit('update:modelValue', (event.target as HTMLInputElement).checked)
    }
    return {
      onChangeInput
    }
  }
})
</script>

<template>
  <input type="checkbox" :checked="modelValue" @change="onChangeInput" />
</template>
