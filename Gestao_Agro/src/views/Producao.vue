<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Produção</h1>
      <button @click="abrirCadastro" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Novo Registro
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Total de Registros</p>
            <h3 class="text-2xl font-bold text-green-600">{{  }}</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h2l1 2h10l1-2h2M4 6h16M4 6a1 1 0 00-1 1v3h18V7a1 1 0 00-1-1H4z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Produção Total (L)</p>
            <h3 class="text-2xl font-bold text-blue-600">{{  }} L</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Média por Dia</p>
            <h3 class="text-2xl font-bold text-yellow-600">{{  }} L</h3>
          </div>
          <div class="bg-yellow-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tipo</th>
          
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Quantidade (L)</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Responsável</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="producao in producoes" :key="producao.Id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ producao.TipoProducao }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ producao.QuantidadeProduzida }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ producao.fk_Animal_CodigoBrinco }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button @click="abrirEdicao(producao)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button @click="ExcluirProducao(producao)" class="text-red-600 hover:text-red-900">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

 <div v-if="CadastroModal" class="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
  <div class="w-[76%] p-6 h-[88%] mt-18 top-12 flex flex-col bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
    <button type="button" @click="fecharCadastro" class="self-end mr-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
      </svg>
    </button>

    <h1 class="font-bold my-6 text-center text-3xl text-green-600">Cadastrar Produção</h1>

    <form @submit.prevent="cadastrarProducao" ref="formCadastro" class="flex flex-col gap-10 w-full mt-4 p-6" id="producao-form">
      
      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="fk_Animal_CodigoBrinco">Identificador do Animal:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: BR001" type="text" id="fk_Animal_CodigoBrinco" v-model="Producao.fk_Animal_CodigoBrinco" required />
        </div>

        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="tipoProducao">Tipo da Produção:</label>
          <select class="w-full font-bold p-1 border border-gray-500/50 h-9 rounded-md" id="tipoProducao" v-model="Producao.TipoProducao" required>
            <option disabled value="">Selecionar</option>
            <option value="leite">Leite</option>
            <option value="carne">Carne</option>
            <option value="esterco">Esterco</option>
            <option value="outros">Outros</option>
          </select>
        </div>
      </div>

      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="quantidadeProduzida">Quantidade Produzida:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: 30" type="text" step="0.01" id="quantidadeProduzida" v-model="Producao.QuantidadeProduzida" required />
        </div>

        <div class="w-[44%]">
          <label class="font-bold block" for="dataProducao">Data da Produção:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            type="date" id="dataProducao" v-model="Producao.Data" required />
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

  
   const producoes = ref<any[]>([])
    const fetchProducao = () => 
    api.get("/producao").then((response) => (producoes.value = response.data.producoes
      
    )
  
  );
   
  onMounted(fetchProducao)
  const modoEdicao = ref(false)
  const formCadastro = ref<HTMLFormElement | null>(null)
    const CadastroModal = ref(false)
    const abrirCadastro = () =>{
      CadastroModal.value = true;
       modoEdicao.value = false;
    } 

    const abrirEdicao = (producaoSelecionado: any) => {
      modoEdicao.value = true;
       CadastroModal.value = true;
       Producao.value={...producaoSelecionado}

    }
    
    const fecharCadastro = () =>{
    CadastroModal.value = false
    formCadastro.value?.reset()
    Producao.value = {
     Id : null,
    TipoProducao: '',
    Data: '',
    QuantidadeProduzida: '',
    fk_Animal_CodigoBrinco: null,
   
  }
    } 

    watch(CadastroModal,(valor) => {
      document.body.style.overflow = valor ? 'hidden':''
    })
    

    const Producao = ref({
    Id : null,
    TipoProducao: '',
    Data: '',
    QuantidadeProduzida: '',
    fk_Animal_CodigoBrinco: null,
 

   
    });
   
const cadastrarProducao = async () => {
  try {

       const { Id, ...dadosProducao } = Producao.value;

    if(modoEdicao.value){
       console.log('Payload correto:', Producao.value)
  
       await api.put(`/producao/${Producao.value.Id}`, dadosProducao)
    }else{
       await api.post('/producao', dadosProducao)
    }

    await fetchProducao()
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
  
const ExcluirProducao = async (producaoSelecionado: any) => {
  try {

    console.log('Payload correto:', Producao.value)

   await api.delete(`/producao/${producaoSelecionado.Id}`)

    await fetchProducao()
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