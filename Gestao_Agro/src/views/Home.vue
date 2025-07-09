<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

    <!-- Cards Estatísticas -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Total de Animais</p>
            <h3 class="text-2xl font-bold text-green-600">1.290</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Animais Saudáveis</p>
            <h3 class="text-2xl font-bold text-blue-600">1.156</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Em Tratamento</p>
            <h3 class="text-2xl font-bold text-yellow-600">84</h3>
          </div>
          <div class="bg-yellow-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Produção Diária</p>
            <h3 class="text-2xl font-bold text-red-600">320 L</h3>
          </div>
          <div class="bg-red-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Gráficos -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-4">Crescimento do Rebanho</h3>
        <canvas id="growthChart" height="250"></canvas>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-4">Distribuição por Tipo</h3>
        <canvas id="distributionChart" height="250"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'HomeView',
  mounted() {
    // Gráfico de crescimento
    const growthCtx = document.getElementById('growthChart')
    new Chart(growthCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [{
          label: 'Total de Animais',
          data: [950, 1020, 1100, 1150, 1290],
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.3,
          fill: true
        }]
      }
    })

    // Gráfico de distribuição
    const distributionCtx = document.getElementById('distributionChart')
    new Chart(distributionCtx, {
      type: 'doughnut',
      data: {
        labels: ['Leiteiros', 'Corte', 'Reprodução', 'Bezerros'],
        datasets: [{
          data: [420, 380, 320, 170],
          backgroundColor: [
            '#3B82F6',
            '#EF4444',
            '#F59E0B',
            '#10B981'
          ]
        }]
      }
    })
  }
}
</script>