<template>
  <div>
    <div
      class="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800"
    >
      <!-- Back Button outside and top-left aligned -->
      <button
        v-if="currentForm === 'register' || currentForm === 'forgot'"
        @click="setCurrentForm('guest')"
        class="absolute top-0 left-0 m-4 text-blue-500 hover:text-blue-600 transition duration-300 text-lg flex items-center"
      >
        <span class="text-2xl">&#x2190;</span>
        <span class="ml-2">Go back to login</span>
      </button>

      <!-- Form container -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full dark:bg-gray-700 dark:text-white"
      >
        <div v-if="currentForm !== 'forgot'" class="relative">
          <!-- Title Section -->
          <h1 class="text-center font-bold text-xl mb-6 dark:font-semibold">
            {{ titleText }}
          </h1>

          <!-- Toggle Buttons Section -->
          <div class="mb-6 flex justify-center">
            <div
              v-if="currentForm !== 'register'"
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
                  class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
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
                  class="font-semibold px-4 py-2 w-full focus:outline-none transition-colors duration-500"
                >
                  Guest
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Forms Section -->
        <SharedLoginForm
          v-if="['org', 'guest'].includes(currentForm)"
          :key="currentForm"
          @submit="handleLogin"
        >
          <!-- Remember Me and Forgot Password -->
          <div class="flex justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2 rounded-lg border-2" />
              <span>Remember me</span>
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
            class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
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
                <span class="font-semibold group-hover:text-black">Google</span>
              </button>
              <button
                class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center dark:bg-white dark:hover:bg-gray-200"
              >
                <Icon name="logos:facebook" class="mr-2" alt="Facebook Logo" />
                <span class="font-semibold group-hover:text-black"
                  >Facebook</span
                >
              </button>
            </div>
          </template>
        </SharedLoginForm>
        <RegisterForm v-else-if="currentForm === 'register'" />
        <ForgotPasswordForm v-else @login="setCurrentForm('org')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SharedLoginForm from "@/components/login/SharedLoginForm.vue";
import RegisterForm from "@/components/login/RegisterForm.vue";
import ForgotPasswordForm from "@/components/login/ForgotPasswordForm.vue";

definePageMeta({
  layout: "nav",
});

const formTitles = {
  org: "Organisation Login",
  guest: "Guest Login",
  register: "Register a new account",
  forgot: "Forgot Password",
};

const currentForm = ref("org");

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

<style scoped>
/* .test {
  color: rgb(64, 129, 233);
} */
</style>
