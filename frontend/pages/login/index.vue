<!-- pages/login.vue -->
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
                  'bg-white text-gray-700 dark:text-white dark:bg-gray-600 font-bold hover:bg-gray-100 dark:hover:bg-gray-500':
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
                  'bg-white text-gray-700 dark:text-white dark:bg-gray-600 font-bold hover:bg-gray-100 dark:hover:bg-gray-500':
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
        <Transition name="fade" mode="out-in">
          <div :key="currentForm">
            <LoginShared
              v-if="['org', 'guest'].includes(currentForm)"
              :key="currentForm"
              :initialEmail="prefilledEmail"
              @submit="handleLogin"
            >
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
                <!-- Social Media Options, available in guest form and registration form-->
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
                    <Icon
                      name="logos:google-icon"
                      class="mr-2"
                      alt="Google Logo"
                    />
                    <span
                      class="font-semibold group-hover:text-black select-none"
                      >Google</span
                    >
                  </button>
                  <button
                    class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center dark:bg-white dark:hover:bg-gray-200"
                    @click="loginWithFacebook"
                    type="button"
                  >
                    <Icon
                      name="logos:facebook"
                      class="mr-2"
                      alt="Facebook Logo"
                    />
                    <span
                      class="font-semibold group-hover:text-black select-none"
                      >Facebook</span
                    >
                  </button>
                </div>
              </template>
            </LoginShared>
            <LoginRegister
              v-else-if="currentForm === 'register'"
              :initialEmail="prefilledEmail"
              :prefilledEmail="ctaStore.email"
            />
            <LoginForgotPassword v-else @login="setCurrentForm('org')" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCtaStore } from "@/stores/ctaStore";
import { useAuthStore } from "@/stores/authStore";
import {useLocalePath} from "#imports"

const {loginGuest} = useAuthStore();
const config = useRuntimeConfig();
const localePath = useLocalePath();

const formTitles = {
  org: "Organisation Login",
  guest: "Guest Login",
  register: "Register a new account",
  forgot: "Forgot Password",
};

const ctaStore = useCtaStore();
const route = useRoute();

const prefilledEmail = ref(ctaStore.email || route.query.email || "");

const currentForm = ref(route.query.register === "true" ? "register" : "guest");

const titleText = computed(() => formTitles[currentForm.value]);

function setCurrentForm(form) {
  currentForm.value = form;
}
// Login funkcija
async function handleLogin(values) {
  console.log("Login Attempt for", currentForm.value, values);
  await loginGuest(values.email, values.password, localePath("/guest"), config.public.authBaseUrl);
}

function loginWithGoogle() {
  window.location.href = `${config.public.authBaseUrl}/api/oauth/google`;
}
function loginWithFacebook() {
  window.location.href = `${config.public.authBaseUrl}/api/oauth/facebook`;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0.2;
}
</style>
