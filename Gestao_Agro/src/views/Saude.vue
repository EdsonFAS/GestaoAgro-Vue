<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Saúde Animal</h1>
      <button @click="abrirCadastro" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Novo Registro
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Animais Saudáveis</p>
            <h3 class="text-2xl font-bold text-green-600">1,156</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <p class="text-gray-500">Vacinados (30 dias)</p>
            <h3 class="text-2xl font-bold text-blue-600">320</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow overflow-hidden mb-8">
      <div class="p-4 border-b flex justify-between items-center">
        <h3 class="font-semibold">Registros de Saúde</h3>
        <div class="flex space-x-2">
          <select class="text-sm border rounded px-2 py-1">
            <option>Todos</option>
            <option>Vacinação</option>
            <option>Tratamento</option>
          </select>
          <input type="date" class="text-sm border rounded px-2 py-1">
        </div>
      </div>
      
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apetite</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsável</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="saude in saudes" :key="saude.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ saude.DataVerificacao }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ saude.fk_Animal_CodigoBrinco }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ saude.Status }}</td>
            <td class="px-6 py-4 text-sm text-gray-500">{{ saude.Apetite }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ saude.Veterinario }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button @click="abrirEdicao(saude)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button @click="ExcluirSaude(saude)" class="text-red-600 hover:text-red-900">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div v-if="CadastroModal" class="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
 <div class="w-[76%] p-6 h-[88%] mt-18 top-12 flex flex-col  bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
  <button type="button" @click="fecharCadastro" class="self-end mr-4 cursor-pointer">
    <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
  </button>
   
     <h1 class="font-bold my-6 text-center
      text-3xl text-green-600">Cadastrar Registo de Saúde</h1>
    <form @submit.prevent="cadastrarSaude" ref="formCadastro" class="flex flex-col gap-10 w-full mt-4 p-6" id="saude-form">

  <div class="flex justify-center gap-6">
    <div class="w-[44%]">
      <label class="font-bold ml-0.5 mb-0.5 block" for="fk_Animal_CodigoBrinco">Identificador do Animal:</label>
      <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
        placeholder="Ex: BR001" type="text" id="fk_Animal_CodigoBrinco" v-model="Saude.fk_Animal_CodigoBrinco" required />
    </div>

    <div class="w-[44%]">
      <label class="font-bold ml-0.5 mb-0.5 block" for="veterinario">Veterinário Responsável:</label>
      <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
        placeholder="Ex: Dr. João" type="text" id="veterinario" v-model="Saude.Veterinario" required />
    </div>
  </div>

  <div class="flex justify-center gap-6">
    <div class="w-[44%]">
      <label class="font-bold block" for="status">Status de Saúde:</label>
      <select class="w-full font-bold p-1 border border-gray-500/50 h-9 rounded-md" id="status" v-model="Saude.Status" required>
        <option disabled value="">Selecionar</option>
        <option value="saudável">Saudável</option>
        <option value="recém nascido">Recém Nascido</option>
        <option value="vaciando">Vaciando</option>
        <option value="gestante">Gestante</option>
        <option value="em observação">Em observação</option>
        <option value="doente">Doente</option>
        <option value="em tratamento">Em tratamento</option>
        <option value="recuperado">Recuperado</option>
        <option value="suspeita de doença">Suspeita de doença</option>
        <option value="isolado">Isolado</option>
        <option value="quarentena">Quarentena</option>
        <option value="ferido">Ferido</option>
        <option value="deficiente">Deficiente</option>
        <option value="óbito">Óbito</option>
      </select>
    </div>

    <div class="w-[44%]">
      <label class="font-bold block" for="apetite">Apetite:</label>
      <select class="w-full font-bold p-1 border border-gray-500/50 h-9 rounded-md" id="apetite" v-model="Saude.Apetite" required>
        <option disabled value="">Selecionar</option>
        <option value="normal">Normal</option>
        <option value="baixo">Baixo</option>
        <option value="ausente">Ausente</option>
      </select>
    </div>
  </div>

  <div class="flex justify-center gap-6">
    <div class="w-[44%]">
      <label class="font-bold block" for="temperatura">Temperatura Corporal (°C):</label>
      <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
        type="number" step="0.1" id="temperatura" v-model="Saude.Temperatura" required />
    </div>

    <div class="w-[44%]">
      <label class="font-bold block" for="data_verificacao">Data da Verificação:</label>
      <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
        type="date" id="data_verificacao" v-model="Saude.DataVerificacao" required />
    </div>
  </div>

  <button class="w-48 self-center font-semibold justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" type="submit">
    {{ modoEdicao ? 'Salvar alterações' : 'Cadastrar' }}
  </button>
</form>

   </div>
   </div>
   
</template>

<script setup lang="ts">

import api from '@/services/api';
import { onMounted, ref, watch, } from 'vue';

  
   const saudes = ref<any[]>([])
    const fetchSaude = () => 
    api.get("/saude").then((response) => (saudes.value = response.data.Saude
      
    )
  
  );
   
   
 

  onMounted(fetchSaude)
  const modoEdicao = ref(false)
  const formCadastro = ref<HTMLFormElement | null>(null)
    const CadastroModal = ref(false)
    const abrirCadastro = () =>{
      CadastroModal.value = true;
       modoEdicao.value = false;
    } 

    const abrirEdicao = (saudeSelecionado: any) => {
      modoEdicao.value = true;
       CadastroModal.value = true;
       Saude.value={...saudeSelecionado}

    }
    
    const fecharCadastro = () =>{
    CadastroModal.value = false
    formCadastro.value?.reset()
    Saude.value = {
      Id : null,
     Veterinario: '',
    Status: '',
    Apetite: '',
    Temperatura: null,
    fk_Animal_CodigoBrinco: null,
    DataVerificacao: '',
   
  }
    } 

    watch(CadastroModal,(valor) => {
      document.body.style.overflow = valor ? 'hidden':''
    })
    

    const Saude = ref({
    Id : null,
    Veterinario: '',
    Status: '',
    Apetite: '',
    Temperatura: null,
    fk_Animal_CodigoBrinco: null,
    DataVerificacao: '',

   
    });
   
const cadastrarSaude = async () => {
  try {

       const { Id, ...dadosSaude } = Saude.value;

    if(modoEdicao.value){
       console.log('Payload correto:', Saude.value)
       // Exclui o Id do objeto para evitar conflito na API
  
       await api.put(`/saude/${Saude.value.Id}`,dadosSaude)
    }else{
       await api.post('/saude', dadosSaude)
    }

    await fetchSaude()
    fecharCadastro()
  } catch (error: any) {
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Erro da API:', error.response.data)
    } else {
      console.error(error)
    }
  }
}
  
const ExcluirSaude = async (saudeSelecionado: any) => {
  try {

    console.log('Payload correto:', Saude.value)

   await api.delete(`/saude/${saudeSelecionado.Id}`)

    await fetchSaude()
    fecharCadastro()
  } catch (error: any) {
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Erro da API:', error.response.data)
    } else {
      console.error(error)
    }
  }
}
 

</script>