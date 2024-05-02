<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
      <div class="mb-6 relative">
        <div class="flex justify-center">
          <div
          class="border rounded-lg overflow-hidden"
          style="border-color: #ddd"
        >
          <div class="flex">
            <button
              @click="toggleForm('login')"
              :class="{
                'bg-blue-500 text-white hover:bg-blue-600': isLogin,
                'bg-white text-gray-700 hover:bg-gray-100 hover:font-semibold':
                  !isLogin,
              }"
              class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
            >
              Login
            </button>
            <button
              @click="toggleForm('register')"
              :class="{
                'bg-blue-500 text-white hover:bg-blue-600': !isLogin,
                'bg-white text-gray-700 hover:bg-gray-100 hover:font-semibold':
                  isLogin,
              }"
              class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
            >
              Register
            </button>
          </div>
        </div>
        <span
          v-if="!isLogin"
          class="absolute inset-y-0 bg-blue-500 transition-opacity duration-300"
          :class="{ 'left-0': isLogin, 'right-0': !isLogin }"
        ></span>
      </div>
      <form @submit.prevent="handleSubmit">
        <div v-if="isLogin">
          <!-- Login form -->
          <label class="font-semibold">Email address</label>
          <input
            type="email"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
            required
          />
          <label class="font-semibold">Password</label>
          <input
            type="password"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
            required
          />
          <div class="flex justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2 rounded-lg border-2" />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              class="text-sm text-blue-600 hover:font-semibold"
              @click.prevent="toggleForm('forgot')"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign in
          </button>
          <div class="flex items-center my-6">
            <hr class="text-black flex-grow" />
            <p class="mx-4 font-semibold">Or continue with</p>
            <hr class="text-black flex-grow" />
          </div>
          <div class="mt-1 flex justify-between">
            <button
              class="bg-transparent text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-400 hover:text-gray-900 flex items-center"
            >
              <img src="@/public/google_logo.png" alt="" class="h-5 mr-2" />
              <span class="font-semibold">Google</span>
            </button>
            <button
              class="bg-transparent text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-400 hover:text-gray-900 flex items-center"
            >
              <img src="@/public/facebook_logo.png" alt="" class="h-5 mr-2" />
              <span class="font-semibold">Facebook</span>
            </button>
          </div>
        </div>
        <div v-else-if="isRegister">
          <!-- Register form -->
          <label class="font-semibold">Name</label>
          <input
            type="text"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
            required
          />
          <label class="font-semibold">Email address</label>
          <input
            type="email"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
            required
          />
          <label class="font-semibold">Password</label>
          <input
            type="password"
            class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
            required
          />
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
          <div class="flex items-center my-6">
            <hr class="text-black flex-grow" />
            <p class="mx-4 font-semibold">Or continue with</p>
            <hr class="text-black flex-grow" />
          </div>
          <div class="mt-1 flex justify-between">
            <button
              class="bg-transparent text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-400 hover:text-gray-900 flex items-center"
            >
              <img src="@/public/google_logo.png" alt="" class="h-5 mr-2" />
              <span class="font-semibold">Google</span>
            </button>
            <button
              class="bg-transparent text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-400 hover:text-gray-900 flex items-center"
            >
              <img src="@/public/facebook_logo.png" alt="" class="h-5 mr-2" />
              <span class="font-semibold">Facebook</span>
            </button>
          </div>
        </div>
        <div v-else class="flex flex-col">
          <div class="text-center mb-6">
            <h1
              class="block text-2xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Forgot password?
            </h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <a
                href="#"
                class="text-sm text-blue-600 hover:font-semibold"
                @click.prevent="toggleForm('login')"
              >
                Login here
              </a>
            </p>
          </div>

          <div>
            <label class="font-semibold">Email address</label>
            <input
              type="email"
              class="block w-full px-4 py-2 border border-gray-300 rounded my-5 hover:border-blue-500"
              required
            />
            <button
              type="submit"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLogin = ref(true);
const isRegister = ref(false);
const isForgotPassword = ref(false);

const toggleForm = (form) => {
  if (form === "login") {
    isLogin.value = true;
    isRegister.value = false;
    isForgotPassword.value = false;
  } else if (form === "register") {
    isLogin.value = false;
    isRegister.value = true;
    isForgotPassword.value = false;
  } else if (form === "forgot") {
    isLogin.value = false;
    isRegister.value = false;
    isForgotPassword.value = true;
  }
};

const handleSubmit = () => {
  // Handle form submission
};
</script>
