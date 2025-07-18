import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PhosphorIcons from "@phosphor-icons/vue"

const app = createApp(App)
app.use(PhosphorIcons)
app.use(router)

router.isReady().then(() => {
  app.mount('#app');
});

