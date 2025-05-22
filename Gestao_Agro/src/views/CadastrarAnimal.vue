<template>
  <div class="ml-40 bg-neutral-200 h-screen lg:ml-52 p-8 ">

   <div class="p-6 mt-8 bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
     <h1 class="font-bold text-center
      text-2xl text-green-600">Cadastrar Animal</h1>
     <form class="flex flex-col gap-6 w-full  p-6 " id="animal-form">
      <div class="flex flex-col gap-2">
        <label class="font-bold ml-0.5 mb-0.5 block" for="codigo_brinco">Identificador do Animal:</label>
        <input  class=" font-semibold bg-white drop-shadow-sm h-8 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"  type="text" id="codigo_brinco" v-model="animal.codigo_brinco" required />
        <label class="font-bold block" for="peso">Peso do Animal:</label>
        <input class="font-semibold bg-white drop-shadow-sm h-8 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="number" id="peso" v-model="animal.peso" required />
      </div>
      <div class="flex w-1/2 flex-col gap-2">
        <label class="font-bold block" for="Idade">Idade do Animal:</label>
        <div class=" flex w-full gap-2">
          <input class="font-semibold w-[80%] bg-white drop-shadow-sm h-8 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="number" id="Idade" v-model="animal.Idade" required />
          <select class="w-[20%] font-bold p-1 border border-gray-500/50  h-8 rounded-sm" name="tipo_idade" id="tipo_idade">
            <option value="dias">Dias</option>
            <option value="semanas">Anos</option>
            <option value="meses">Meses</option>
            <option value="anos">Anos</option>
          </select>
        </div>
        <label class="font-bold  block" for="sexo">Sexo do Animal:</label>
        <select class="font-bold p-1 border border-gray-500/50  h-8 rounded-sm mb-1" name="sexo" id="sexo">
          <option value="Macho">Macho</option>
          <option value="Femea">Fêmea</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label class="font-bold block" for="origem_paterna">Identificador Paterna:</label>
        <input class="font-semibold bg-white drop-shadow-sm h-8 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="origem_paterna" v-model="animal.origem_paterna" required />
        <label class="font-bold block" for="origem_materna">Identificador Materna:</label>
        <input class="font-semibold bg-white drop-shadow-sm h-8 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1" type="text" id="origem_materna" v-model="animal.origem_materna" required />
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
        codigo_brinco: '',
        peso: null,
        Idade: null,
        tipo_idade: '',
        raca: '',
        sexo: '',
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
