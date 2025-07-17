<template>
  <div class="ml-40 lg:ml-52 p-8 min-h-screen bg-gray-50">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Gestão de Animais</h1>
      <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" @click="abrirCadastro">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Novo Animal
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Total de Animais</p>
            <h3 class="text-2xl font-bold text-green-600">{{ animais.length }}</h3>
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
            <p class="text-gray-500">Média de Idade (meses)</p>
            <h3 class="text-2xl font-bold text-blue-600"></h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-2.21 0-4 1.79-4 4m8 0a4 4 0 00-4-4m0 0V4m0 8v8" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Machos / Fêmeas</p>
            <h3 class="text-2xl font-bold text-yellow-600"></h3>
          </div>
          <div class="bg-yellow-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 01-8 0 4 4 0 018 0zm2 0h4m-2-2v4M2 12h4m-2-2v4" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Brinco</th>
             <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nome</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Idade</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sexo</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Raça</th>
                 <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Cor</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr  v-for="Animal in animais" :key="Animal.CodigoBrinco" class="hover:bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ Animal.CodigoBrinco }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ Animal.Nome }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Animal.Idade }} meses</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Animal.Sexo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Animal.Raca }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ Animal.Cor }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button type="button" @click="abrirEdicao(Animal)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
              <button @click="ExcluirAnimal(Animal)" class="text-red-600 hover:text-red-900">Excluir</button>
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
      text-3xl text-green-600">Cadastrar Animal</h1>
     <form @submit.prevent="cadastrarAnimal" ref="formCadastro" class="flex flex-col gap-10 w-full  mt-4  p-6 " id="animal-form">

        <div class="flex justify-center  gap-6">
          <div class="w-[44%]">
            <label class="font-bold ml-0.5 mb-0.5 block" for="codigo_brinco">Identificador do Animal:</label>
            <input  class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: BR001"  type="text" id="codigo_brinco" v-model="animal.CodigoBrinco" required />
          </div>
          <div class="w-[44%]">
            <label class="font-bold ml-0.5 mb-0.5 block" for="codigo_brinco">Nome do Animal:</label>
            <input  class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: Mimoza"  type="text" id="codigo_brinco" v-model="animal.Nome" required />
          </div>
        </div>
    <div class="flex justify-center gap-6">

          <div class="w-[28.6%]">
            <label class="font-bold block" for="cor">Cor do Animal:</label>
            <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: Marrom" type="text" id="cor" v-model="animal.Cor"  required />
          </div>

          <div class="w-[28.6%]">
            <label class="font-bold block" for="peso">Peso do Animal (Kg):</label>
            <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: 450" type="number" id="peso" v-model="animal.Peso" required />
          </div>
          <div class="w-[28.6%]">
             <label class="font-bold  block" for="sexo">Sexo do Animal:</label>
        <select class="font-bold w-full p-1 border border-gray-500/50  h-9 rounded-md  mb-1" name="sexo" id="sexo" v-model="animal.Sexo">
           <option disabled value="">Selecionar</option>
          <option value="M">Macho</option>
          <option value="F">Fêmea</option>
        </select>
          </div>
    </div>

      <div class="flex w-full justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="Idade">Idade do Animal:</label>
          <div class=" flex w-full gap-2">
            <input class="font-semibold w-[70%] bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: 02" type="number" id="Idade" v-model="animal.Idade"  required />
            <select class="w-[30%] font-bold p-1 border border-gray-500/50  h-9 rounded-md" name="tipo_idade" id="tipo_idade">
               <option disabled value="">Selecionar</option>
              <option value="dias">Dias</option>
              <option value="semanas">Anos</option>
              <option value="meses">Meses</option>
              <option value="anos">Anos</option>
            </select>
          </div>
        </div>
        <div class="w-[44%]">
          <label class="font-bold block" for="status">Status de Saúde</label>
          <select class="w-full font-bold p-1 border border-gray-500/50  h-9 rounded-md" name="status"  id="status">
             <option disabled value="">Selecionar</option>
            <option value="saudável">Saudável</option>
            <option value="recém nascido">Recém Nascido</option>
            <option value="vaciando">Vaciando</option>
            <option value="gestante">Gestante</option>
            <option value="em observação">Em observação</option>
            <option value="doente">Doente</option>
            <option value="em tratamento">Em tratamento</option>
            <option value="recuperado">Em Recuperação</option>
            <option value="suspeita de doença">Suspeita de doença</option>
            <option value="isolado">Isolado</option>
            <option value="quarentena">Quarentena</option>
            <option value="ferido">Ferido</option>
            <option value="deficiente">Deficiente</option>
            <option value="óbito">óbito</option>
          </select>
        </div>

      </div>

      <div class=" ml-14 flex flex-col gap-2  rounded-md  w-[44%]">
          <label class="font-bold block" for="raca">Raça do Animal:</label>
      <select class="w-full font-bold p-1 border border-gray-500/50  h-9 rounded-md" v-model="animal.Raca"  name="raca" id="raca">
       <option disabled value="">Selecionar</option>
        <option value="Nelore">Nelore</option>
        <option value="Gir">Gir</option>
        <option value="Guzerá">Guzerá</option>
        <option value="Brahman">Brahman</option>
        <option value="Tabapuã">Tabapuã</option>
        <option value="Simental">Simental</option>
        <option value="Angus">Angus</option>
        <option value="Hereford">Hereford</option>
        <option value="Holandesa">Holandesa</option>
        <option value="Jersey">Jersey</option>
        <option value="Pardo">Pardo</option>
        <option value="Senepol">Senepol</option>
        <option value="Girolando">Girolando</option>
        <option value="Brangus">Brangus</option>
        <option value="Braford">Braford</option>
        <option value="Jersolando">Jersolando</option>
        <option value="Canchim">Canchim</option>
        <option value="Brahmousin">Brahmousin</option>
      </select>
      </div>

      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="origem_paterna">Identificador Paterna:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="origem_paterna" v-model="animal.IdPaterno"  required />
        </div>
        <div class="w-[44%]">
          <label class="font-bold block" for="origem_materna">Identificador Materna:</label>
          <input class="w-full  font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="origem_materna" v-model="animal.IdMatriz" required />
        </div>
      </div>
      <button  class="w-48 self-center font-semibold justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center cursor-pointer" type="submit"> {{ modoEdicao ? 'Salvar alterações' : 'Cadastrar' }}</button>
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

  
   const animais = ref<any[]>([])
    const fetchAnimais = () => 
    api.get("/animal").then((response) => (animais.value = response.data.Animais));
   
 

  onMounted(fetchAnimais)
  const modoEdicao = ref(false)
  const formCadastro = ref<HTMLFormElement | null>(null)
    const CadastroModal = ref(false)



    const abrirCadastro = () =>{
      CadastroModal.value = true;
       modoEdicao.value = false;
    }

    const abrirEdicao = (animalSelecionado: any) => {
      modoEdicao.value = true;
       CadastroModal.value = true;
       animal.value={...animalSelecionado}

    }
    
    const fecharCadastro = () =>{
    CadastroModal.value = false
    formCadastro.value?.reset()
    animal.value = {
    CodigoBrinco: '',
    Nome: '',
    Raca: '',
    Peso: null,
    Idade: null,
    Cor: '',
    Sexo: '',
    IdPaterno: '',
    IdMatriz: '',
   
  }
    } 

    watch(CadastroModal,(valor) => {
      document.body.style.overflow = valor ? 'hidden':''
    })
    

    const animal = ref({
    CodigoBrinco: '',
    Nome: '',
    Raca: '',
    Peso: null,
    Idade: null,
    Cor: '',
    Sexo: '',
    IdPaterno: '',
    IdMatriz: '',
   
})
   
const cadastrarAnimal = async () => {
  try {

    console.log('Payload correto:', animal.value)

    if(modoEdicao.value){
       await api.put(`/animal/${animal.value.CodigoBrinco}`, animal.value)
    }else{
       await api.post('/animal', animal.value)
    }

    await fetchAnimais()
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

const ExcluirAnimal = (RegistroSelecionado: any) => {
  RegistroParaExcluir.value = RegistroSelecionado
  mostrarConfirmacao.value = true
}

const confirmarExclusao = async () => {
  try {
    await api.delete(`/animal/${RegistroParaExcluir.value.CodigoBrinco}`)
    await fetchAnimais()
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