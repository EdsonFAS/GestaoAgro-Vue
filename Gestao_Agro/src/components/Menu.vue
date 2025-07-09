<template>
  <nav class="bg-green-700 text-white w-40 lg:w-52 min-h-screen p-6 fixed left-0 top-0 shadow-lg">
    <div class="flex items-center gap-2 mb-6">
      <img src="/src/assets/logo_gestaoagro.svg" alt="Logo GestãoAgro" class="w-8 h-8" />
      <h1 class="text-xl font-bold">GestãoAgro</h1>
    </div>
    <ul class="space-y-4">
      <li>
        <router-link to="/" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="mdi:home" class="w-5 h-5" />
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/animal" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="mdi:cow" class="w-5 h-5" />
          Animais
        </router-link>
      </li>
      <li>
        <router-link to="/rebanhos" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="mdi:barn" class="w-5 h-5" />
          Rebanho
        </router-link>
      </li>
      <li>
        <router-link to="/pastagem" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="mdi:sprout" class="w-5 h-5" />
          Pastagem
        </router-link>
      </li>
      <li>
        <router-link to="/alimentacao" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="game-icons:grain" class="w-5 h-5" />
          Alimentação
        </router-link>
      </li>
      <li>
        <router-link to="/producao" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="mdi:food-steak" class="w-5 h-5" />
          Produção
        </router-link>
      </li>
      <li>
        <router-link to="/saude" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">
          <Icon icon="mdi:medical-bag" class="w-5 h-5" />
          Saúde
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
