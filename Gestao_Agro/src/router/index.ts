import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/animal',
    name: 'animal',
    component: () => import('@/views/Animal.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/rebanhos',
    name: 'rebanhos',
    component: () => import('@/views/Rebanho.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/pastagem',
    name: 'pastagem',
    component: () => import('@/views/Pastagem.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/alimentacao',
    name: 'alimentacao',
    component: () => import('@/views/Alimentacao.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/producao',
    name: 'producao',
    component: () => import('@/views/Producao.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/saude',
    name: 'saude',
    component: () => import('@/views/Saude.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    // Se a rota exigir autenticação e não houver token → redireciona
    return next('/login');
  }

  next(); 
});

export default router;
