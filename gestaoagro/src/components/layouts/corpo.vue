<script setup lang="ts">
import Aside from './Aside.vue'
import HeadHome from './HeadHome.vue'

</script>
<template>
<div class="flex min-h-screen bg-gray-900 text-gray-200">
    <Aside></Aside>
    <div class="flex-1 flex flex-col">
        <HeadHome />
    <main class="p-6 space-y-6 flex flex-col gap-6">
           <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
             <div class="bg-gray-800 p-4 mb-2 rounded-lg shadow">Customers: <span class="text-green-400">3,782</span></div>
             <div class="bg-gray-800 p-4 rounded-lg shadow">Orders: <span class="text-red-400">5,359</span></div>
             <div class="bg-gray-800 p-4 rounded-lg shadow">Monthly Target: <span class="text-green-400">75.55%</span></div>
           </div>
   
           <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
             <div class="bg-gray-800 p-4 rounded-lg shadow">
               <h2 class="text-xl font-semibold mb-4">Monthly Sales</h2>
               <div class="h-40 bg-gray-700 rounded"></div>
             </div>
   
             <div class="bg-gray-800 p-4 rounded-lg shadow">
               <h2 class="text-xl font-semibold mb-4">Statistics</h2>
               <div class="h-40 bg-gray-700 rounded"></div>
             </div>
           </div>
         </main>
        </div>
        </div>
   </template>
   <script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'corpo'
})
</script>
   