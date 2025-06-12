<template>
<div class="bg-gray-300 flex h-screen ">

        <div class="ml-40 lg:ml-52 p-8 w-full">

        <div class="flex mb-4">
            <input type="text" placeholder="Buscar animal..." class="w-4/5 font-semibold bg-white/70 drop-shadow-sm h-12 px-4 focus:border-green-600 focus:border-[2px] focus:outline-none border border-gray-700/50 rounded-xl">
            <div class="w-3"></div>
           <a class="flex w-1/5  h-12 justify-center items-center bg-green-600 drop-shadow-md shadow-neutral-600/50 font-bold text-white rounded-xl hover:bg-green-700" href="/cadastrarAnimal"> Cadastrar Animal </a>
        </div>

        <div class="overflow-x-auto bg-white drop-shadow-md shadow-neutral-600/50 rounded-2xl ">


            <table class=" w-full">
                <thead class="gap-2">
                    <tr class="bg-green-600  text-white text-left">
                        <th class=" rounded-tl-lg  py-4 pl-4">Código</th>
                        <th class=" p-4">Raça</th>
                        <th class=" p-4">Peso</th>
                        <th class=" p-4">Sexo</th>
                        <th class=" p-4">Idade</th>


                        <th class="rounded-tr-lg   w-[12%] text-center p-4">Ações</th>
                    </tr>
                </thead>
                <tbody>

                    <tr  class="">

                        <td class="  rounded-tl-xl rounded-bl-xl font-semibold py-4 pl-4"></td>
                        <td class="  font-semibold p-4"></td>
                        <td class=" font-semibold p-4">-kg</td>
                        <td class="  font-semibold p-4"></td>
                        <td class="  font-semibold p-4"> anos</td>

                        <td class=" font-semibold text-center items-center p-2">
                            <button onclick="abrirModal('{{this.CodigoBrinco}}', '{{this.Raca}}', '{{this.Peso}}', '{{this.Sexo}}', '{{this.Idade}}')" class=" drop-shadow-lg  hover:underline"></button>
                            <button onclick="deleteAnimal('{{this.CodigoBrinco}}')" class="  hover:underline ml-2"> </button>
                        </td>

                    </tr>

                    <!-- Adicione mais linhas conforme necessário -->
                </tbody>
            </table>
        </div>
    </div>
</div>


</template>
<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Animal',

});
</script>
