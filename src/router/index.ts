import {createRouter, createWebHashHistory} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import ElementPlus from '../components/ElementPlus.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/ElementPlus',
    component: ElementPlus,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router