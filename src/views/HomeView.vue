<script lang="ts">
import TodayTaskContent from '@/components/todos/TodayTaskContent.vue'
import SideViewLayout from '../components/layout/SideViewLayout.vue'
import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SideViewLayout,
    TodayTaskContent
  },
  setup() {
    const snackbar = inject('snackbar') as {
      show: boolean
      text: string
    }

    return {
      snackbar
    }
  }
})
</script>

<template>
  <main>
    <v-snackbar v-model="snackbar.show"
      >{{ snackbar.text }}
      <template #actions>
        <v-btn color="indigo" variant="text" @click="snackbar.show = false"> Undo </v-btn>
      </template>
    </v-snackbar>
    <SideViewLayout>
      <template #side> This is the side component </template>
      <template #content>
        <TodayTaskContent />
      </template>
    </SideViewLayout>
  </main>
</template>
