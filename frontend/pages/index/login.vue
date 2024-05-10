<template>
  <div>
    <div
      class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800"
    >
      <!-- Form container -->
      <div
        class="relative bg-white p-8 rounded-xl shadow-lg max-w-sm w-full dark:bg-gray-700 dark:text-white"
      >
        <!-- Header Section with Back Button and Title -->
        <div class="flex items-center justify-between mb-6">
          <button
            v-if="currentForm === 'register' || currentForm === 'forgot'"
            @click="setCurrentForm('guest')"
            class="flex items-center justify-center w-12 h-12 bg-transparent rounded-full transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white"
          >
            <span
              class="text-4xl text-blue-500 hover:text-blue-600 dark:text-white"
              >&#x2190;</span
            >
          </button>
          <h1
            class="text-center font-bold text-xl flex-grow text-gray-800 dark:text-white"
          >
            {{ titleText }}
          </h1>
        </div>

        <!-- Toggle Buttons Section -->
        <div v-if="currentForm !== 'register'" class="mb-6 flex justify-center">
          <div
            class="border rounded-lg overflow-hidden w-full dark:border-gray-700"
          >
            <div class="flex">
              <button
                @click="setCurrentForm('org')"
                :class="{
                  'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700':
                    currentForm === 'org',
                  'bg-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300':
                    currentForm !== 'org',
                }"
                class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500 select-none"
              >
                Organisation
              </button>
              <button
                @click="setCurrentForm('guest')"
                :class="{
                  'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700':
                    currentForm === 'guest',
                  'bg-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300':
                    currentForm !== 'guest',
                }"
                class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500 select-none"
              >
                Guest
              </button>
            </div>
          </div>
        </div>

        <!-- Forms Section -->
        <SharedLoginForm
          v-if="['org', 'guest'].includes(currentForm)"
          :key="currentForm"
          :initialEmail="prefilledEmail"
          @submit="handleLogin"
        >
          <!-- Remember Me and Forgot Password -->
          <div class="flex justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2 rounded-lg border-2" />
              <span class="select-none">Remember me</span>
            </label>
            <a
              href="#"
              class="text-blue-600 hover:font-semibold hover:underline dark:font-medium dark:text-blue-400 dark:hover:text-blue-500"
              @click.prevent="setCurrentForm('forgot')"
            >
              Forgot password?
            </a>
          </div>
          <!-- Sign In Button -->
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
          >
            Sign in
          </button>

          <!-- Guest-Specific Section -->
          <template v-if="currentForm === 'guest'">
            <button
              class="group text-gray-700 mt-6 dark:text-white"
              @click.prevent="setCurrentForm('register')"
              type="button"
            >
              Don't have an account yet?
              <span
                class="font-medium text-blue-500 group-hover:underline group-hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                >Sign up</span
              >
            </button>

            <!-- Social Media Options -->
            <div class="flex items-center my-6">
              <hr class="text-black flex-grow" />
              <p class="mx-4 font-semibold">Or continue with</p>
              <hr class="text-black flex-grow" />
            </div>
            <div class="mt-1 flex justify-between">
              <button
                class="group text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center dark:bg-white dark:hover:bg-gray-200"
                @click="loginWithGoogle"
                type="button"
              >
                <Icon name="logos:google-icon" class="mr-2" alt="Google Logo" />
                <span class="font-semibold group-hover:text-black select-none"
                  >Google</span
                >
              </button>
              <button
                class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center dark:bg-white dark:hover:bg-gray-200"
              >
                <Icon name="logos:facebook" class="mr-2" alt="Facebook Logo" />
                <span class="font-semibold group-hover:text-black select-none"
                  >Facebook</span
                >
              </button>
            </div>
          </template>
        </SharedLoginForm>
        <RegisterForm
          v-else-if="currentForm === 'register'"
          :initialEmail="prefilledEmail"
        />
        <ForgotPasswordForm v-else @login="setCurrentForm('org')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import SharedLoginForm from "@/components/login/SharedLoginForm.vue";
import RegisterForm from "@/components/login/RegisterForm.vue";
import ForgotPasswordForm from "@/components/login/ForgotPasswordForm.vue";

const formTitles = {
  org: "Organisation Login",
  guest: "Guest Login",
  register: "Register a new account",
  forgot: "Forgot Password",
};

const route = useRoute();
const prefilledEmail = ref(route.query.email || "");
const currentForm = ref(route.query.register === "true" ? "register" : "guest");

const titleText = computed(() => formTitles[currentForm.value]);

function setCurrentForm(form) {
  currentForm.value = form;
}

function handleLogin(values) {
  console.log("Login Attempt for", currentForm.value, values);
}

function loginWithGoogle() {
  console.log("Google Login Triggered");
  window.location.href = "http://localhost/auth/google";
}
</script>
