<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Alimentação</h1>
      <button @click="abrirCadastro" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Nova Alimentação
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Consumo Diário (kg)</p>
            <h3 class="text-2xl font-bold text-green-600">120</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Estoque Atual (kg)</p>
            <h3 class="text-2xl font-bold text-blue-600">1,200</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Custo Médio Diário</p>
            <h3 class="text-2xl font-bold text-yellow-600">R$ 240,00</h3>
          </div>
          <div class="bg-yellow-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow overflow-hidden mb-8">
    
      
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fornecedor</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade (kg)</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validade</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Entrega</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="Alimentacao in alimentacao" :key="Alimentacao.IdAlimentacao" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Alimentacao.Nome}}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Alimentacao.Fornecedor }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Alimentacao.QuantidadeEstoque }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ (Alimentacao.DataValidade)}}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ (Alimentacao.DataEntrega) }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button @click="abrirEdicao(Alimentacao)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button @click="ExcluirAlimentacao(Alimentacao)" class="text-red-600 hover:text-red-900">Excluir</button>
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

    <h1 class="font-bold my-6 text-center text-3xl text-green-600">Cadastrar Alimentação</h1>

    <form @submit.prevent="cadastrarAlimentacao" ref="formCadastro" class="flex flex-col gap-10 w-full mt-4 p-6" id="alimentacao-form">
      
      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="nome">Nome do Alimento:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: Ração Bovina" type="text" id="nome" v-model="Alimentacao.Nome" required />
        </div>

        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="fornecedor">Fornecedor:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: Agropecuária Boa Vista" type="text" id="fornecedor" v-model="Alimentacao.Fornecedor" required />
        </div>
      </div>

      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="quantidade">Quantidade em Estoque (kg):</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            type="number" step="0.01" id="quantidade" v-model="Alimentacao.QuantidadeEstoque" required />
        </div>

        <div class="w-[44%]">
          <label class="font-bold block" for="dataValidade">Data de Validade:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            type="date" id="dataValidade" v-model="Alimentacao.DataValidade" required />
        </div>
      </div>

      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="dataEntrega">Data da Entrega:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            type="date" id="dataEntrega" v-model="Alimentacao.DataEntrega" required />
        </div>
      </div>

      <button class="w-48 self-center font-semibold justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" type="submit">
        {{ modoEdicao ? 'Salvar alterações' : 'Cadastrar' }}
      </button>
    </form>
  </div>
</div>

  <div v-if="mostrarConfirmacao" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
  <div class="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
    <h2 class="text-xl font-bold text-red-600 mb-4">Confirmar Exclusão</h2>
    <p class="text-gray-700 mb-6">Tem certeza que deseja excluir este registro? Essa ação não pode ser desfeita.</p>
    <div class="flex justify-center gap-4">
      <button @click="confirmarExclusao" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Sim, excluir</button>
      <button @click="cancelarExclusao" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">Cancelar</button>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">

import api from '@/services/api';
import { onMounted, ref, watch, } from 'vue';

  
   const alimentacao = ref<any[]>([])
    const fetchAlimentacao = () => 
    api.get("/alimentacao").then((response) => (alimentacao.value = response.data.Alimentacao) 
    ).catch((error) => 
      console.error('Erro ao buscar dados de alimentação:', error.message
      
    )
  
  );




  onMounted(fetchAlimentacao)
  const modoEdicao = ref(false)
  const formCadastro = ref<HTMLFormElement | null>(null)
    const CadastroModal = ref(false)
    const abrirCadastro = () =>{
      CadastroModal.value = true;
       modoEdicao.value = false;
    } 

    const abrirEdicao = (alimentacaoSelecionado: any) => {
      modoEdicao.value = true;
       CadastroModal.value = true;
       Alimentacao.value={...alimentacaoSelecionado}

    }
    
    const fecharCadastro = () =>{
    CadastroModal.value = false
    formCadastro.value?.reset()
    Alimentacao.value = {
     IdAlimentacao : null,
    Nome: '',
    Fornecedor: '',
    QuantidadeEstoque: null,
    DataValidade: '',
    DataEntrega: '',
   
  }
    } 

    watch(CadastroModal,(valor) => {
      document.body.style.overflow = valor ? 'hidden':''
    })
    

    const Alimentacao = ref({
    IdAlimentacao : null,
    Nome: '',
    Fornecedor: '',
    QuantidadeEstoque: null,
    DataValidade: '',
    DataEntrega: '',
    });
   
const cadastrarAlimentacao = async () => {
  try {

       const { IdAlimentacao, ...dadosAlimentacao } = Alimentacao.value;

    if(modoEdicao.value){
       console.log('Payload correto:', Alimentacao.value)
       // Exclui o Id do objeto para evitar conflito na API
      try{
       await api.put(`/alimentacao/${Alimentacao.value.IdAlimentacao}`,dadosAlimentacao)
      }catch(error: any){
        console.error('Erro ao atualizar alimentação:', error.message)
        throw error
      }



    }else{
       await api.post('/alimentacao', dadosAlimentacao)
    }

    await fetchAlimentacao()
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
  
const mostrarConfirmacao = ref(false)
const RegistroParaExcluir = ref<any>(null)

const ExcluirAlimentacao = (RegistroSelecionado: any) => {
  RegistroParaExcluir.value = RegistroSelecionado
  mostrarConfirmacao.value = true
}

const confirmarExclusao = async () => {
  try {
    await api.delete(`/alimentacao/${RegistroParaExcluir.value.IdAlimentacao}`)
    await fetchAlimentacao()
  } catch (error: any) {
    if (error.response) {
      console.error('Erro da API:', error.response.data)
    } else {
      console.error(error)
    }
  } finally {
    mostrarConfirmacao.value = false
    RegistroParaExcluir.value = null
  }
}

const cancelarExclusao = () => {
  mostrarConfirmacao.value = false
  RegistroParaExcluir.value = null
}






</script>