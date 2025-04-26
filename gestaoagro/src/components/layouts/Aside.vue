<template>
        <aside class="w-64 bg-gray-800 flex  flex-col">
      <div class="p-6 text-2xl font-bold">Gestão Agro</div>
      <nav class="flex-1 px-4 ">
        <ul class="space-y-2 font-bold">
          <li >
            <a href="#" class="flex items-center gap-2 p-2 rounded bg-gray-700">
              <span class="material-icons mr-3">home</span> home
            </a>
          </li>
          <li >
            <a href="#" class="flex items-center gap-2  p-2 rounded hover:bg-gray-700">
              <span class="material-icons"></span> animal
            </a>
          </li>
          <li>
        
          </li>
          <!-- More items -->
        </ul>
      </nav>
      <div class="p-4 border-t border-gray-700">
        <button class="w-full text-left text-sm">Support</button>
      </div>
    </aside>
</template>
<script  lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Aside'
})
</script>