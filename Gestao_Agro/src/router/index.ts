import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animal from '@/views/Animal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/animal',
      name: 'animal',
      component: Animal,
    },
    {
      path: "/cadastrarAnimal",
      name: "cadastrarAnimal",
      component: () => import("../views/CadastrarAnimal.vue"),
    }
  ],
})

export default router
