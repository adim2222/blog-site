import { createApp } from 'vue'
import App from './App.vue'
import getData from './scripts/axios/axios.js'
import router from './scripts/router/router.js';

getData();

const app = createApp(App)

app.use(router)

app.mount('#app')