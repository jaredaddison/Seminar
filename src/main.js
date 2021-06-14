import { createApp } from 'vue'

import './tailwind.css'

import router from './router.js'

import App from './views/Home.vue'

createApp(App).use(router).mount('#app')
