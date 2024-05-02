<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
      <div v-if="currentForm !== 'forgot'" class="relative">
        <h1 class="text-center font-bold text-xl mb-6">
          {{
            currentForm === "login"
              ? "Enter your login details"
              : "Register a new account"
          }}
        </h1>
        <div class="mb-6 flex justify-center">
          <div class="border rounded-lg overflow-hidden w-full">
            <div class="flex">
              <button
                @click="setCurrentForm('login')"
                :class="buttonClass('login')"
                class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
              >
                Login
              </button>
              <button
                @click="setCurrentForm('register')"
                :class="buttonClass('register')"
                class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <LoginForm
        v-if="currentForm === 'login'"
        @forgot-password="setCurrentForm('forgot')"
      />
      <RegisterForm v-else-if="currentForm === 'register'" />
      <ForgotPasswordForm v-else @login="setCurrentForm('login')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "@/components/index/forms/LoginForm.vue";
import RegisterForm from "@/components/index/forms/RegisterForm.vue";
import ForgotPasswordForm from "@/components/index/forms/ForgotPasswordForm.vue";

const currentForm = ref("login");

function setCurrentForm(form) {
  currentForm.value = form;
}

function buttonClass(form) {
  return {
    "bg-blue-500 text-white hover:bg-blue-600": currentForm.value === form,
    "bg-white text-gray-700 hover:bg-gray-100 hover:font-semibold":
      currentForm.value !== form,
  };
}
</script>
