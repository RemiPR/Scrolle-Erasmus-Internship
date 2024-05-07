<template>
  <div>
    <form @submit.prevent="onSubmit" class="space-y-6">
      <!-- Email input -->
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

        <!-- Email validation error-->
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

      <!-- Password input -->
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

        <!-- Hide/show password -->
        <span
          class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          @click="showPassword = !showPassword"
        >
          <span class="material-icons">{{
            showPassword ? "visibility_off" : "visibility"
          }}</span>
        </span>

        <!-- Password validation error -->
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
      <!-- Remember me/Forgot password -->
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
      <!-- Sign in -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Sign in
      </button>
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

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // Implement login logic here
});
</script>
