import { createRouter, createWebHistory, type RouteRecordRaw, } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Services from '../pages/Services.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/services', name: 'Services', component: Services },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
