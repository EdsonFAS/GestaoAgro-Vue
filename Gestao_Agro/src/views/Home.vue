<script setup lang="ts">

</script>

<template>
<div class="bg-gray-300/60 min-h-screen flex">
    
        <!-- Conteúdo Principal -->
        <div class="ml-64 p-8 w-full">
            <h2 class="text-3xl font-bold text-gray-800">📊 Dashboard</h2>
    
            <!-- Cards Estatísticas -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div class="bg-white p-6 rounded-xl drop-shadow-xl shadow-neutral-950 border border-neutral-600/10  text-center">
                    <h3 class="text-lg font-semibold text-gray-600">🐄 Total de Animais</h3>
                    <p class="text-4xl font-bold text-green-600 mt-2">1.290</p>
                </div>
                <div class="bg-white p-6 rounded-xl drop-shadow-xl shadow-neutral-950 border border-neutral-600/10  text-center">
                    <h3 class="text-lg font-semibold text-gray-600">🥛 Leiteiros</h3>
                    <p class="text-4xl font-bold text-blue-600 mt-2">523</p>
                </div>
                <div class="bg-white p-6 rounded-xl drop-shadow-xl shadow-neutral-950 border border-neutral-600/10  text-center">
                    <h3 class="text-lg font-semibold text-gray-600">🥩 Corte</h3>
                    <p class="text-4xl font-bold text-red-600 mt-2">445</p>
                </div>
                <div class="bg-white p-6 rounded-xl drop-shadow-xl shadow-neutral-950 border border-neutral-600/10  text-center">
                    <h3 class="text-lg font-semibold text-gray-600">🐂 Reprodução</h3>
                    <p class="text-4xl font-bold text-yellow-600 mt-2">322</p>
                </div>
            </div>
    
            <!-- Gráficos -->
            <div class="flex fle  w- gap-2 mt-8">
                <!-- Gráfico de Crescimento -->
                <div class="bg-white p-4 rounded-xl w-[70%] drop-shadow-xl shadow-neutral-950 border border-neutral-600/10 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-4">📈 Crescimento do Rebanho</h3>
                    <canvas id="graficoCrescimento" ></canvas>
                </div>
    
                <!-- Gráfico de Rosca (Distribuição de Animais) -->
                <div class="bg-white p-6 rounded-xl drop-shadow-xl shadow-neutral-950 border border-neutral-600/10 w-[30%]">
                    <h3 class="text-xl font-semibold text-gray-700 mb-4">📊 Distribuição de Animais</h3>
    
                    <canvas  id="graficoRosca"></canvas>
                </div>
            </div>
        </div>
</div>

</template>

<script setup lang="ts">

import Chart from 'chart.js/auto';

import { defineComponent, onMounted } from 'vue';


        onMounted(() => {
            const ctx = document.getElementById('graficoCrescimento') as HTMLCanvasElement;
            const ctx2 = document.getElementById('graficoRosca') as HTMLCanvasElement;

           
            new Chart(ctx, {
                type: 'line',
      data: {
        labels: ["Jan", "Fev", "Mar"],
        datasets: [{
          label: "Crescimento",
          data: [992, 1065, 1290],
          borderColor: "green",
          borderWidth: 2,
          fill: true,
          backgroundColor: "rgba(34, 197, 94, 0.2)"
        }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            // Gráfico de Rosca
            new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Leiteiros', 'Corte', 'Reprodução'],
                    datasets: [{
                        data: [523, 445, 322],
                        backgroundColor: ['#0077FF', '#F8260B', '#FF9A0D'],
                
                    }]
                },
                options: {
                    responsive: true,
                      cutout: '64%',
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });
        });



</script>
