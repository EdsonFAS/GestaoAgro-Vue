<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Rebanho</h1>
      <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" @click="abrirCadastro">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Novo Grupo
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Total de Grupos</p>
            <h3 class="text-2xl font-bold text-green-600">{{ rebanhos.length }}</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Animais no Rebanho</p>
            <h3 class="text-2xl font-bold text-blue-600">-</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Média por Grupo</p>
            <h3 class="text-2xl font-bold text-yellow-600">-</h3>
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
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tipo</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Destino</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="rebanho in rebanhos" :key="rebanho.IdRebanho" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ rebanho.Tipo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ rebanho.Destino }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button @click="abrirEdicao(rebanho)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button @click="excluirRebanho(rebanho)" class="text-red-600 hover:text-red-900">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal de Cadastro/Edição -->
    <div v-if="CadastroModal" class="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <div class="w-[76%] p-6 h-[88%] mt-18 top-12 flex flex-col bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
        <button type="button" @click="fecharCadastro" class="self-end mr-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
          </svg>
        </button>
        
        <h1 class="font-bold my-6 text-center text-3xl text-green-600">
          {{ modoEdicao ? 'Editar Rebanho' : 'Cadastrar Rebanho' }}
        </h1>
        
        <form @submit.prevent="cadastrarRebanho" ref="formCadastro" class="flex flex-col gap-10 w-full mt-4 p-6">
          <div class="flex justify-center gap-6">
            <div class="w-[44%]">
              <label class="font-bold ml-0.5 mb-0.5 block" for="tipo">Tipo do Rebanho:</label>
              <input 
                class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" 
                placeholder="Ex: Produção de Leite" 
                type="text" 
                id="tipo" 
                v-model="rebanho.Tipo" 
                required 
              />
            </div>
            <div class="w-[44%]">
              <label class="font-bold ml-0.5 mb-0.5 block" for="destino">Destino:</label>
              <input 
                class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" 
                placeholder="Ex: Fazenda A" 
                type="text" 
                id="destino" 
                v-model="rebanho.Destino" 
                required 
              />
            </div>
          </div>

          <div class="flex justify-center">
            <button 
              class="w-48 self-center font-semibold justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" 
              type="submit"
            >
              {{ modoEdicao ? 'Salvar alterações' : 'Cadastrar' }}
            </button>
          </div>
        </form>
      </div>
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
import { ref, onMounted, watch } from 'vue';

const rebanhos = ref<any[]>([]);
const fetchRebanhos = () => 
  api.get('/rebanhos').then((response) => (rebanhos.value = response.data.Rebanho));


onMounted(fetchRebanhos)
const modoEdicao = ref(false)
const formCadastro = ref<HTMLFormElement | null>(null)
const CadastroModal = ref(false)


const abrirCadastro = () => {
  CadastroModal.value = true;
  modoEdicao.value = false;
};

const abrirEdicao = (rebanhoSelecionado: any) => {
  modoEdicao.value = true;
  CadastroModal.value = true;
  rebanho.value = { ...rebanhoSelecionado }

}

const fecharCadastro = () => {
  CadastroModal.value = false;

  if (!modoEdicao.value) {
    formCadastro.value?.reset();
    rebanho.value = {
      IdRebanho: '',
      Tipo: '',
      Destino: ''
    };
  }
};


watch(CadastroModal,(valor) => {
      document.body.style.overflow = valor ? 'hidden':''
    })

 const rebanho = ref({
    IdRebanho: '',
    Tipo: '',
    Destino: ''
   
})

const cadastrarRebanho = async () => {
  try {
    const payload = { ...rebanho.value };

    if (modoEdicao.value) {

      await api.put(`/rebanhos/${payload.IdRebanho}`, {
        Tipo: payload.Tipo,
        Destino: payload.Destino
      });
    } else {

      delete (payload as any).IdRebanho;
      await api.post('/rebanhos', payload);
    }

    await fetchRebanhos();
    fecharCadastro();
  } catch (error: any) {
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Erro da API:', error.response.data);
      alert('Erro ao salvar: ' + JSON.stringify(error.response.data));
    } else {
      console.error(error);
      alert('Erro ao conectar com o servidor');
    }
  }
};

const mostrarConfirmacao = ref(false)
const RegistroParaExcluir = ref<any>(null)

const excluirRebanho = (RegistroSelecionado: any) => {
  RegistroParaExcluir.value = RegistroSelecionado
  mostrarConfirmacao.value = true
}

const confirmarExclusao = async () => {
  try {
    await api.delete(`/rebanhos/${ RegistroParaExcluir.value.IdRebanho}`)
    await fetchRebanhos()
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