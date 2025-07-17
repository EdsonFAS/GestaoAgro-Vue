<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Pastagem</h1>
      <button @click="abrirCadastro" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
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
            <h3 class="text-2xl font-bold text-green-600">{{ pastagens.length }}</h3>
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
            <h3 class="text-2xl font-bold text-blue-600">{{ areaTotal }} ha</h3>
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
            <p class="text-gray-500">Período Médio (dias)</p>
            <h3 class="text-2xl font-bold text-yellow-600">{{ periodoMedio }} dias</h3>
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
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Localização</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Área (ha)</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Período (dias)</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Animal</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="pastagem in pastagens" :key="pastagem.Id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ pastagem.LocalizacaoPastagem }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ pastagem.AreaPastagem }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ pastagem.Periodo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ pastagem.fk_Animal_CodigoBrinco }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button @click="abrirEdicao(pastagem)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button @click="excluirPastagem(pastagem)" class="text-red-600 hover:text-red-900">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal de Cadastro -->
    <!-- Modal de Cadastro - Layout 2x2 -->
<div v-if="CadastroModal" class="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
  <div class="w-[76%] p-6 h-[88%] mt-18 top-12 flex flex-col bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
    <button type="button" @click="fecharCadastro" class="self-end mr-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
      </svg>
    </button>

    <h1 class="font-bold my-6 text-center text-3xl text-green-600">
      {{ modoEdicao ? 'Editar Pastagem' : 'Cadastrar Pastagem' }}
    </h1>

    <form @submit.prevent="salvarPastagem" ref="formCadastro" class="flex flex-col gap-6 w-full mt-4 p-6">
      <!-- Linha Superior (2 campos) -->
      <div class="flex justify-center gap-6">
        <!-- Localização -->
        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="localizacao">Localização:</label>
          <input 
            class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: Fazenda Boa Vista" 
            type="text" 
            id="localizacao" 
            v-model="Pastagem.LocalizacaoPastagem" 
            required 
          />
        </div>

        <!-- Área -->
        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="area">Área (ha):</label>
          <input 
            class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" 
            placeholder="Ex: 10.5" 
            type="number"
            step="0.1"
            id="area"
            v-model="Pastagem.AreaPastagem" 
            required 
          />
        </div>
      </div>

      <!-- Linha Inferior (2 campos) -->
      <div class="flex justify-center gap-6">
        <!-- Período -->
        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="periodo">Período (dias):</label>
          <input 
            class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: 120" 
            type="number" 
            id="periodo" 
            v-model="Pastagem.Periodo" 
            required 
          />
        </div>

        <!-- Animal -->
        <div class="w-[44%]">
          <label class="font-bold ml-0.5 mb-0.5 block" for="animal">Código do Animal:</label>
          <input 
            class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
            placeholder="Ex: BR002" 
            type="text" 
            id="animal" 
            v-model="Pastagem.fk_Animal_CodigoBrinco" 
            required 
          />
        </div>
      </div>

      <button class="mt-8 w-48 self-center font-semibold justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" type="submit">
        {{ modoEdicao ? 'Salvar alterações' : 'Cadastrar' }}
      </button>
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
import { onMounted, ref, watch, computed } from 'vue';

const pastagens = ref<any[]>([]);
const animais = ref<any[]>([]);

const fetchPastagens = () => 
  api.get("/pastagem").then((response) => (pastagens.value = response.data.pastagens));

const fetchAnimais = () =>
  api.get("/animais").then((response) => (animais.value = response.data.animais));

onMounted(() => {
  fetchPastagens();
  fetchAnimais();
});

// Cálculos para os cards
const areaTotal = computed(() => {
  return pastagens.value.reduce((total, pastagem) => {
    return total + (parseFloat(pastagem.AreaPastagem) || 0);
  }, 0).toFixed(1);
});

const periodoMedio = computed(() => {
  if (pastagens.value.length === 0) return 0;
  const total = pastagens.value.reduce((sum, pastagem) => sum + (parseInt(pastagem.Periodo) || 0, 0));
  return Math.round(total / pastagens.value.length);
});

const modoEdicao = ref(false);
const formCadastro = ref<HTMLFormElement | null>(null);
const CadastroModal = ref(false);

const abrirCadastro = () => {
  Pastagem.value = {
    Id: null,
    LocalizacaoPastagem: '',
    AreaPastagem: '',
    Periodo: '',
    fk_Animal_CodigoBrinco: null
  };
  CadastroModal.value = true;
  modoEdicao.value = false;
};

const abrirEdicao = (pastagemSelecionada: any) => {
  Pastagem.value = {
    ...pastagemSelecionada,
    fk_Animal_CodigoBrinco: pastagemSelecionada.fk_Animal_CodigoBrinco
  };
  modoEdicao.value = true;
  CadastroModal.value = true;
};

const fecharCadastro = () => {
  CadastroModal.value = false;
  formCadastro.value?.reset();
  Pastagem.value = {
    Id: null,
    LocalizacaoPastagem: '',
    AreaPastagem: '',
    Periodo: '',
    fk_Animal_CodigoBrinco: null
  };
};

watch(CadastroModal, (valor) => {
  document.body.style.overflow = valor ? 'hidden' : '';
});

const Pastagem = ref({
  Id: null,
  LocalizacaoPastagem: '',
  AreaPastagem: '',
  Periodo: '',
  fk_Animal_CodigoBrinco: null
});

const salvarPastagem = async () => {
  try {
    const { Id, ...dadosPastagem } = Pastagem.value;

    if (modoEdicao.value) {
      await api.put(`/pastagem/${Pastagem.value.Id}`, dadosPastagem);
    } else {
      await api.post('/pastagem', dadosPastagem);
    }

    await fetchPastagens();
    fecharCadastro();
  } catch (error: any) {
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Erro da API:', error.response.data);
    } else {
      console.error(error);
    }
  }
};

const mostrarConfirmacao = ref(false)
const RegistroParaExcluir = ref<any>(null)

const excluirPastagem = (RegistroSelecionado: any) => {
  RegistroParaExcluir.value = RegistroSelecionado
  mostrarConfirmacao.value = true
}

const confirmarExclusao = async () => {
  try {
    await api.delete(`/pastagem/${RegistroParaExcluir.value.Id}`)
    await fetchPastagens()
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