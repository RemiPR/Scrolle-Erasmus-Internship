<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <div class="mb-6">
        <button
          @click="toggleForm"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Toggle to {{ toggleLabel }}
        </button>
      </div>
      <form @submit.prevent="handleSubmit">
        <label class="font-semibold">Email address</label>
        <div v-if="isLogin">
          <input
            type="email"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7"
            required
          />
          <label class="font-semibold">Password</label>
          <input
            type="password"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7"
            required
          />
          <div class="flex justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2 rounded-lg border-2" />
              <span>Remember me</span>
            </label>

            <a href="#" class="text-sm text-blue-600 hover:underline"
              >Forgot password?</a
            >
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign in
          </button>
          <div class="flex items-center mt-4">
            <hr class="text-black flex-grow my-6" />
            <p class="mx-4">Continue with</p>
            <hr class="text-black flex-grow my-6" />
          </div>
          <div class="mt-1 flex justify-between">
            <button
              class="bg-transparent text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-400 hover:text-gray-900 flex items-center"
            >
              <img src="@/public/google_logo.png" alt="" class="h-5 mr-2" />
              <span>Google</span>
            </button>
            <button
              class="bg-transparent text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-400 hover:text-gray-900"
            >
              GitHub
            </button>
          </div>
        </div>
        <div v-else>
          <input
            type="text"
            placeholder="Name"
            class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded my-5"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded my-5"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="block w-full px-4 py-2 mb-4 border border-gray-300 rounded my-5"
            required
          />
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLogin = ref(true);

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};

const toggleLabel = computed(() => (isLogin.value ? "Register" : "Login"));

const handleSubmit = () => {
  alert(isLogin.value ? "Login" : "Register");
};
</script>
