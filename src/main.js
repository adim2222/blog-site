import { createApp } from 'vue'
import App from './App.vue'
import getData from './scripts/axios/axios.js'
import router from './scripts/router/router.js';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

getData();

const vuetify = createVuetify({components})
const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')