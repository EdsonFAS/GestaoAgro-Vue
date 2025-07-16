<template>
  <div class="ml-40 bg-neutral-200 flex justify-center h-screen lg:ml-52 p-8">
    <div class="w-[80%] p-6 abs bg-white drop-shadow-lg shadow-neutral-600/50 rounded-2xl">
      <h1 class="font-bold my-6 text-center text-3xl text-green-600">Cadastrar Rebanho</h1>
      <form class="flex flex-col gap-10 w-full mt-4 p-6" @submit.prevent="cadastrarRebanho">
        <div class="flex justify-center gap-6">
          <div class="w-[44%]">
            <label class="font-bold ml-0.5 mb-0.5 block" for="tipo">Tipo do Rebanho:</label>
            <input
              class="w-full font-semibold bg-white drop-shadow-sm h-9 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-500/50 rounded-md mb-1"
              placeholder="Ex: Produção de Leite"
              type="text"
              id="tipo"
              v-model="rebanho.tipo"
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
              v-model="rebanho.destino"
              required
            />
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="bg-green-600 text-white font-bold px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CadastrarRebanho',
  data() {
    return {
      rebanho: {
        idrebanho_ani: '',
        tipo_ani: '',
        destino_ani: ''
      }
    };
  },
  methods: {
    async cadastrarRebanho() {
      try {
        const response = await fetch('http://localhost:3000/rebanho', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.rebanho)
        });
        if (response.ok) {
          alert('Rebanho cadastrado com sucesso!');
          this.limparCampos();
        } else {
          alert('Erro ao cadastrar rebanho.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
      }
    },
    limparCampos() {
      this.rebanho = {
        idrebanho: '',
        tipo: '',
        destino: ''
      };
    }
  }
});
</script>
