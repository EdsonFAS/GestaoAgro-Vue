<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Animais</h1>
      <router-link 
        to="/cadastrarAnimal" 
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Cadastrar Animal
      </router-link>
    </div>

    <div class="bg-white rounded-xl shadow overflow-hidden mb-8">
      <div class="p-4 border-b">
        <input 
          type="text" 
          placeholder="Buscar animal..." 
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
      </div>
      
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raça</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peso</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexo</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="animal in animais" :key="animal.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ animal.codigo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ animal.raca }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ animal.peso }} kg</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ animal.sexo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ animal.idade }}</td>
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
  name: 'AnimalView',
  data() {
    return {
      animais: [
        { id: 1, codigo: 'BR001', raca: 'Nelore', peso: 450, sexo: 'Fêmea', idade: '3 anos' },
        { id: 2, codigo: 'BR002', raca: 'Girolando', peso: 520, sexo: 'Fêmea', idade: '4 anos' },
        { id: 3, codigo: 'BR003', raca: 'Holandesa', peso: 380, sexo: 'Fêmea', idade: '2 anos' },
        { id: 4, codigo: 'BR004', raca: 'Angus', peso: 680, sexo: 'Macho', idade: '5 anos' },
        { id: 5, codigo: 'BR005', raca: 'Brahman', peso: 320, sexo: 'Macho', idade: '1 ano' }
      ]
    }
  }
}
</script>