<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideViewLayout'
})
</script>

<template>
  <div class="side-view-layout">
    <div class="side-view-layout__side">
      <slot name="side"></slot>
    </div>
    <div class="side-view-layout__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.side-view-layout {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  max-width: 1024px;
  min-height: 100vh;
  justify-content: center;
  &__side {
    flex: 1;
    height: auto;
    padding: 20px;
    background: #f5f5f5;
  }
  &__content {
    flex: 3;
    padding: 20px;
  }
}
</style>
