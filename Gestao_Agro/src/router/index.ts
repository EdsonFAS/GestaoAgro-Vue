import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/animal',
      name: 'animal',
      component: () => import('../views/Animal.vue')
    },
    {
      path: '/cadastrarAnimal',
      name: 'cadastrarAnimal',
      component: () => import('../views/CadastrarAnimal.vue')
    },
    {
      path: '/rebanhos',
      name: 'rebanhos',
      component: () => import('../views/Rebanho.vue')
    },
    {
      path: '/pastagem',
      name: 'pastagem',
      component: () => import('../views/Pastagem.vue')
    },
    {
      path: '/alimentacao',
      name: 'alimentacao',
      component: () => import('../views/Alimentacao.vue')
    },
    {
      path: '/producao',
      name: 'producao',
      component: () => import('../views/Producao.vue')
    },
    {
      path: '/saude',
      name: 'saude',
      component: () => import('../views/Saude.vue')
    }
  ]
})

export default router