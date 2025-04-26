
<template>

      <!-- Topbar -->
      <header class="flex items-center justify-between p-4 border-b border-gray-700">
        <input
          type="text"
          placeholder="Search..."
          class="bg-gray-700 text-white p-2 rounded w-1/3 focus:outline-none"
        />
        <div class="flex gap-4 items-center space-x-4">
          <button class="relative top-1">
            <span class="material-icons ">notifications</span>
            <span class="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            class="rounded-full w-8 h-8"
          />
        </div>
      </header>

      <!-- Dashboard Content -->
     
  
</template>

<script  lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'HeadHome'
})
</script>


