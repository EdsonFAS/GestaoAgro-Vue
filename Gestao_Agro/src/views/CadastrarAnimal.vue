<template>
  <div class="ml-40 bg-neutral-200 flex justify-center h-screen lg:ml-52 p-8 ">

   <div class="w-[80%] p-6   bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
     <h1 class="font-bold my-6 text-center
      text-3xl text-green-600">Cadastrar Animal</h1>
     <form class="flex flex-col gap-10 w-full  mt-4  p-6 " id="animal-form">

        <div class="flex justify-center  gap-6">
          <div class="w-[44%]">
            <label class="font-bold ml-0.5 mb-0.5 block" for="codigo_brinco">Identificador do Animal:</label>
            <input  class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: BR001"  type="text" id="codigo_brinco" v-model="animal.codigo_brinco" required />
          </div>
          <div class="w-[44%]">
            <label class="font-bold ml-0.5 mb-0.5 block" for="codigo_brinco">Nome do Animal:</label>
            <input  class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: Mimoza"  type="text" id="codigo_brinco" v-model="animal.nome_ani" required />
          </div>
        </div>
    <div class="flex justify-center gap-6">

          <div class="w-[28.6%]">
            <label class="font-bold block" for="cor">Cor do Animal:</label>
            <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: Marrom" type="text" id="cor" v-model="animal.cor_ani" required />
          </div>

          <div class="w-[28.6%]">
            <label class="font-bold block" for="peso">Peso do Animal (Kg):</label>
            <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: 450" type="number" id="peso" v-model="animal.peso" required />
          </div>
          <div class="w-[28.6%]">
             <label class="font-bold  block" for="sexo">Sexo do Animal:</label>
        <select class="font-bold w-full p-1 border border-gray-500/50  h-9 rounded-md  mb-1" name="sexo" id="sexo">
          <option value="Macho">Macho</option>
          <option value="Femea">Fêmea</option>
        </select>
          </div>
    </div>

      <div class="flex w-full justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="Idade">Idade do Animal:</label>
          <div class=" flex w-full gap-2">
            <input class="font-semibold w-[70%] bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Ex: 02" type="number" id="Idade" v-model="animal.Idade" required />
            <select class="w-[30%] font-bold p-1 border border-gray-500/50  h-9 rounded-md" name="tipo_idade" id="tipo_idade">
              <option value="dias">Dias</option>
              <option value="semanas">Anos</option>
              <option value="meses">Meses</option>
              <option value="anos">Anos</option>
            </select>
          </div>
        </div>
        <div class="w-[44%]">
          <label class="font-bold block" for="status">Status de Saúde</label>
          <select class="w-full font-bold p-1 border border-gray-500/50  h-9 rounded-md" name="status" id="status">
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

      <div class="bg-gray-200 ml-14 flex flex-col gap-2 p-4 rounded-md  w-[60%]">
        <label class="font-bold block" for="raca">Raça do Animal:</label>
        <div class="flex items-center gap-4">
          <input class="w-[46%] font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" placeholder="Nenhuma raça selecionada" type="text" id="raca" disabled v-model="animal.raca" required />
          <input class="w-[32%] font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="raca" disabled v-model="animal.raca" required />
          <button class="bg-green-600 text-white font-bold px-4 py-1.5 rounded-md hover:bg-green-700 transition-colors"> Selecionar </button>
        </div>
      </div>

      <div class="flex justify-center gap-6">
        <div class="w-[44%]">
          <label class="font-bold block" for="origem_paterna">Identificador Paterna:</label>
          <input class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="origem_paterna" v-model="animal.origem_paterna" required />
        </div>
        <div class="w-[44%]">
          <label class="font-bold block" for="origem_materna">Identificador Materna:</label>
          <input class="w-full  font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="origem_materna" v-model="animal.origem_materna" required />
        </div>
      </div>
     </form>
   </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CadastrarAnimal',
  data() {
    return {
      animal: {
        codigo_brinco_ani: '',
        nome_ani: '',
        cor_ani: '',
        peso_ani: null,
        Idade_ani: null,
        tipo_idade_ani: '',
        raca: '',
        sexo_ani: '',
        origem_paterna: '',
        origem_materna: ''
      }
    };
  },
  methods: {
    async cadastrarAnimal() {
      try {
        const response = await fetch('http://localhost:3000/animal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.animal)
        });
        if (response.ok) {
          alert('Animal cadastrado com sucesso!');
          this.limparCampos();
        } else {
          alert('Erro ao cadastrar animal.');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    },
    limparCampos() {
      this.animal = {
        codigo_brinco: '',
        peso: '',
        Idade: '',
        tipo_idade: '',
        raca: '',
        sexo: '',
        origem_paterna: '',
        origem_materna: ''
      };
    }
  }
});

</script>
