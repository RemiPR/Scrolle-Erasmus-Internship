<template>
  <div>
    <form @submit.prevent="onSubmit" class="space-y-6">
      <div>
        <label for="email" class="font-semibold">Email address</label>
        <Field
          id="email"
          name="email"
          type="email"
          v-model="email"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
          :rules="rules.email"
          :class="{ 'border-red-500': errors.email }"
        />
        <ErrorMessage
          name="email"
          class="flex items-center text-red-500 mt-1"
          v-if="errors.email"
          v-slot="{ message }"
        >
          <Icon name="material-symbols:error" class="text-red-500 mr-1" />
          <span class="text-sm">{{ message }}</span>
        </ErrorMessage>
      </div>

      <div class="relative">
        <label for="password" class="font-semibold">Password</label>
        <Field
          :type="showPassword ? 'text' : 'password'"
          name="password"
          v-model="password"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
          :rules="rules.password"
          :class="{ 'border-red-500': errors.password }"
        />
        <span
          class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          @click="showPassword = !showPassword"
        >
          <span class="material-icons">{{
            showPassword ? "visibility_off" : "visibility"
          }}</span>
        </span>
        <ErrorMessage
          name="password"
          class="flex items-center text-red-500 mt-1"
          v-if="errors.password"
          v-slot="{ message }"
        >
          <Icon name="material-symbols:error" />
          <span class="text-sm">{{ message }}</span>
        </ErrorMessage>
      </div>

      <div class="flex justify-between mb-6">
        <label class="flex items-center">
          <input type="checkbox" class="mr-2 rounded-lg border-2" />
          <span>Remember me</span>
        </label>
        <a
          href="#"
          class="text-sm text-blue-600 hover:font-semibold"
          @click.prevent="$emit('forgot-password')"
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
          class="group text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center"
          @click="loginWithGoogle"
          type="button"
        >
          <Icon name="logos:google-icon" class="mr-2" alt="Google Logo" />
          <span class="font-semibold group-hover:text-black">Google</span>
        </button>
        <button
          class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center hover:font-thin"
        >
          <Icon name="logos:facebook" class="mr-2" alt="Google Logo" />
          <span class="font-semibold group-hover:text-black">Facebook</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useForm, Field, ErrorMessage } from "vee-validate";
import { required, email as emailRule } from "@vee-validate/rules";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const { handleSubmit, errors, validateField } = useForm(); // Include validateField

const rules = {
  email: [required, emailRule],
  password: [required],
};

const loginWithGoogle = () => {
  window.location.href = "http://localhost/auth/google"; // Initiates the Google OAuth flow
};

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // Implement login logic here
});
</script>
