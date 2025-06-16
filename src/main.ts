import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { VuePageStackPlugin } from 'vue-page-stack';

createApp(App)
.use(router)
.use(VuePageStackPlugin, { router })
.mount('#app')
