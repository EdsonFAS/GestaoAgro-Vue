import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animal from '@/views/Animal.vue'
import Rebanho from '../views/Rebanho.vue'

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
    },
    {
      path: "/Rebanho",
      name: "Rebanho",
      component: Rebanho,
    }
  ],
})

export default router
