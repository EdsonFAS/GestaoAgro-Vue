<template>
  <nav class="bg-green-700 text-white w-40  lg:w-52  min-h-screen p-6 fixed left-0 top-0 shadow-lg">
        <h1 class="text-2xl font-bold mb-6">GestãoAgro</h1>
        <ul class="space-y-4">
            <li><a href="/" class="flex font-bold text-[16px] items-center gap-2 p-3 rounded-lg hover:bg-green-900 transition">Home</a></li>
            <li><a href="/animal" class="flex items-center font-bold text-[16px]  p-3 rounded-lg hover:bg-green-800 transition">Animais</a></li>
            <li><a href="/rebanhos" class="flex items-center font-bold text-[16px] p-3 rounded-lg hover:bg-green-800 transition"> Rebanho</a></li>
            <li><a href="/pastagem" class="flex items-center font-bold text-[16px] p-3 rounded-lg hover:bg-green-800 transition">Pastagem</a></li>
            <li><a href="/alimentacao" class="flex items-center font-bold text-[16px] p-3 rounded-lg hover:bg-green-800 transition">Alimentação</a></li>
            <li><a href="/producao" class="flex items-center font-bold text-[16px] p-3 rounded-lg hover:bg-green-800 transition">Produção</a></li>
            <li><a href="/saude" class="flex items-center font-bold text-[16px] p-3 rounded-lg hover:bg-green-800 transition">Saúde</a></li>
        </ul>
    </nav>

</template>
<script  lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Menu'
})

</script>