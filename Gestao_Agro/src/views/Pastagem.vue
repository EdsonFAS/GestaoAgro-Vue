<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Pastagem</h1>
      <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Nova Área
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Áreas de Pastagem</p>
            <h3 class="text-2xl font-bold text-green-600">5</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Área Total (ha)</p>
            <h3 class="text-2xl font-bold text-blue-600">45</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Capacidade Total</p>
            <h3 class="text-2xl font-bold text-yellow-600">320</h3>
          </div>
          <div class="bg-yellow-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Área</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamanho (ha)</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Pasto</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacidade</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="area in areas" :key="area.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ area.nome }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ area.tamanho }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ area.tipo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ area.capacidade }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${area.status === 'Ativa' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`">
                {{ area.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button class="text-red-600 hover:text-red-900">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PastagemView',
  data() {
    return {
      areas: [
        { id: 1, nome: 'Pasto Norte', tamanho: '12 ha', tipo: 'Braquiária', capacidade: '80 cabeças', status: 'Ativa' },
        { id: 2, nome: 'Pasto Sul', tamanho: '8 ha', tipo: 'Tifton', capacidade: '50 cabeças', status: 'Em recuperação' },
        { id: 3, nome: 'Pasto Leste', tamanho: '15 ha', tipo: 'Panicum', capacidade: '100 cabeças', status: 'Ativa' },
        { id: 4, nome: 'Pasto Oeste', tamanho: '10 ha', tipo: 'Braquiária', capacidade: '70 cabeças', status: 'Ativa' }
      ]
    }
  }
}
</script>