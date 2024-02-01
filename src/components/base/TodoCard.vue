<script lang="ts">
import { defineComponent } from 'vue'
// TODO:  Move this declaration of defineComponent later when you fully understand why it is needed.
export default defineComponent({
  name: 'TodoCard',
  setup() {
    return {}
  }
})
</script>

<template>
  <v-card class="custom-card">
    <v-row>
      <v-col cols="1">
        <slot name="check-container"></slot>
      </v-col>
      <v-col cols="auto">
        <slot name="content"></slot>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.custom-card {
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
</style>
