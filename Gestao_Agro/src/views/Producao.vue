<template>
  <div class="bg-gray-300 flex h-screen">
    <div class="ml-40 lg:ml-52 p-8 w-full">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">🥛 Gestão de Produção</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-4 rounded-xl shadow-md">
          <h3 class="font-semibold text-lg mb-2">Produção Diária</h3>
          <p class="text-2xl font-bold text-green-600">320 L</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-md">
          <h3 class="font-semibold text-lg mb-2">Média por Vaca</h3>
          <p class="text-2xl font-bold text-blue-600">8.2 L</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-md">
          <h3 class="font-semibold text-lg mb-2">Total Mensal</h3>
          <p class="text-2xl font-bold text-yellow-600">9.600 L</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Registro de Produção</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="p-3 text-left">Data</th>
                <th class="p-3 text-left">Quantidade (L)</th>
                <th class="p-3 text-left">Vacas Ordenhadas</th>
                <th class="p-3 text-left">Média (L/vaca)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in producao" :key="index" class="border-b">
                <td class="p-3">{{ item.data }}</td>
                <td class="p-3">{{ item.quantidade }}</td>
                <td class="p-3">{{ item.vacas }}</td>
                <td class="p-3">{{ item.media }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Produção por Período</h2>
        <canvas id="producaoChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

const producao = [
  { data: '15/05/2023', quantidade: '320 L', vacas: '42', media: '7.6 L' },
  { data: '14/05/2023', quantidade: '310 L', vacas: '40', media: '7.8 L' },
  { data: '13/05/2023', quantidade: '335 L', vacas: '41', media: '8.2 L' }
];

onMounted(() => {
  const ctx = document.getElementById('producaoChart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
      datasets: [{
        label: 'Produção de Leite (L)',
        data: [8500, 8900, 9200, 9400, 9600],
        backgroundColor: 'rgba(34, 197, 94, 0.7)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
</script>