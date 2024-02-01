import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { ref} from 'vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const snackbar = ref({
  show: false,
  text: ''
});

const app = createApp(App)

app.provide('snackbar', snackbar);
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
