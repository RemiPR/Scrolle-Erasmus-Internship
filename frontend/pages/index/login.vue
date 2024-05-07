<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
      <div v-if="currentForm !== 'forgot'" class="relative">
        <h1 class="text-center font-bold text-xl mb-6">
          {{
            currentForm === "org"
              ? "Organisation Login"
              : currentForm === "guest"
              ? "Guest Login"
              : "Register a new account"
          }}
        </h1>
        <div class="mb-6 flex justify-center">
          <div class="border rounded-lg overflow-hidden w-full">
            <div class="flex">
              <button
                @click="setCurrentForm('org')"
                :class="buttonClass('org')"
                class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
              >
                Organisation
              </button>
              <button
                @click="setCurrentForm('guest')"
                :class="buttonClass('guest')"
                class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
              >
                Guest
              </button>
            </div>
          </div>
        </div>
      </div>
      <OrgLoginForm
        v-if="currentForm === 'org'"
        @forgot-password="setCurrentForm('forgot')"
      />
      <GuestLoginForm v-else-if="currentForm === 'guest'" />
      <RegisterForm v-else-if="currentForm === 'register'" />
      <ForgotPasswordForm v-else @login="setCurrentForm('org')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OrgLoginForm from "@/components/login/OrgLoginForm.vue";
import GuestLoginForm from "@/components/login/GuestLoginForm.vue";
import RegisterForm from "@/components/login/RegisterForm.vue";
import ForgotPasswordForm from "@/components/login/ForgotPasswordForm.vue";

const currentForm = ref("org"); // default form when page loads

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
