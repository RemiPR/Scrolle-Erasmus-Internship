<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
      <div v-if="currentForm !== 'forgot'" class="relative">
        <h1 class="text-center font-bold text-xl mb-6">
          {{ titleText }}
        </h1>
        <div class="mb-6 flex justify-center">
          <div
            v-if="currentForm !== 'register'"
            class="border rounded-lg overflow-hidden w-full"
          >
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
          <div v-else class="w-full text-center">
            <button
              @click="setCurrentForm('guest')"
              class="hover:text-blue-600 transition duration-300 text-lg"
            >
              <span class="text-2xl text-blue-500">&#x2190;</span> Go back to
              login
            </button>
          </div>
        </div>
      </div>

      <!-- The rest remains the same -->
      <SharedLoginForm
        v-if="['org', 'guest'].includes(currentForm)"
        :key="currentForm"
        @submit="handleLogin"
      >
        <!-- Remember me/Forgot password -->
        <div class="flex justify-between mb-6">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded-lg border-2" />
            <span>Remember me</span>
          </label>
          <a
            href="#"
            class="text-sm text-blue-600 hover:font-semibold"
            @click.prevent="setCurrentForm('forgot')"
          >
            Forgot password?
          </a>
        </div>
        <!-- Sign in button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign in as {{ currentForm === "org" ? "Organization" : "Guest" }}
        </button>

        <!-- Guest specific content -->
        <template v-if="currentForm === 'guest'">
          <!-- Registration redirect button -->
          <button
            class="group text-gray-700 mt-6"
            @click.prevent="setCurrentForm('register')"
            type="button"
          >
            Don't have an account yet?
            <span
              class="font-medium text-blue-500 group-hover:underline group-hover:text-blue-600"
              >Sign up</span
            >
          </button>

          <!-- Social media login options -->
          <div class="flex items-center my-6">
            <hr class="text-black flex-grow" />
            <p class="mx-4 font-semibold">Or continue with</p>
            <hr class="text-black flex-grow" />
          </div>
          <div class="mt-1 flex justify-between">
            <button
              class="group text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center"
              @click="loginWithGoogle"
              type="button"
            >
              <Icon name="logos:google-icon" class="mr-2" alt="Google Logo" />
              <span class="font-semibold group-hover:text-black">Google</span>
            </button>
            <button
              class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center"
            >
              <Icon name="logos:facebook" class="mr-2" alt="Facebook Logo" />
              <span class="font-semibold group-hover:text-black">Facebook</span>
            </button>
          </div>
        </template>
      </SharedLoginForm>
      <RegisterForm v-else-if="currentForm === 'register'" />
      <ForgotPasswordForm v-else @login="setCurrentForm('org')" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SharedLoginForm from "@/components/login/SharedLoginForm.vue";
import RegisterForm from "@/components/login/RegisterForm.vue";
import ForgotPasswordForm from "@/components/login/ForgotPasswordForm.vue";

// Define available forms and their corresponding titles in an object for easier management
const formTitles = {
  org: "Organisation Login",
  guest: "Guest Login",
  register: "Register a new account",
  forgot: "Forgot Password",
};

// Reactive state to keep track of the current form
const currentForm = ref("org");

// Computed property to dynamically set the page title based on the current form
const titleText = computed(() => formTitles[currentForm.value]);

// Function to change the current form
function setCurrentForm(form) {
  currentForm.value = form;
}

// Function to determine button classes dynamically
function buttonClass(form) {
  return {
    "bg-blue-500 text-white hover:bg-blue-600": currentForm.value === form,
    "bg-white text-gray-700 hover:bg-gray-100 hover:font-semibold":
      currentForm.value !== form,
  };
}

// Function to handle form submission, could be expanded with real logic
function handleLogin(values) {
  console.log("Login Attempt for", currentForm.value, values);
}

// Function to initiate login with Google, consider using a more abstracted auth service
function loginWithGoogle() {
  console.log("Google Login Triggered");
  window.location.href = "http://localhost/auth/google"; // Ideally, use vue-router or an auth service
}
</script>
