<template>
  <div class="min-h-screen flex items-center justify-center bg-[url('/bg-login.jpg')] bg-cover bg-center">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="Email" type="email" class="mt-1 w-full p-2 border rounded" required />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700">Senha</label>
          <input v-model="Senha" type="password" class="mt-1 w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Entrar
        </button>
        <p v-if="erro" class="mt-4 text-red-600 text-sm">{{ erro }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';

const Email = ref('');
const Senha = ref('');
const erro = ref('');
const router = useRouter();

const handleLogin = async () => {
  erro.value = '';

  try {
    const response = await api.post('/login', {
      Email: Email.value,
      Senha: Senha.value,
    });

    const token = response.data.access_token;
    localStorage.setItem('token', token);
    router.push('/'); // redireciona para rota protegida
  } catch (err) {
    erro.value = 'Email ou senha inválidos';
  }
};
</script>
