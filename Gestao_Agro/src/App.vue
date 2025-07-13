<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Menu from './components/Menu.vue'
import { computed } from 'vue';

const route = useRoute();

const rotaSemMenu = computed(() =>
  ['/login', '/cadastro'].includes(route.path)
);

</script>

<template>
  <Menu v-if="!rotaSemMenu" />
 <RouterView />
 
  
</template>


