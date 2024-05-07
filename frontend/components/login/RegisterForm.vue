<template>
  <form @submit.prevent="onSubmit">
    <!-- Form Input fields -->
    <label for="FirstName" class="font-semibold">First Name</label>
    <input
      type="text"
      class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
      required
    />
    <label for="LastName" class="font-semibold">Last Name</label>
    <input
      type="text"
      class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
      required
    />
    <label for="email" class="font-semibold">Email address</label>
    <input
      type="email"
      class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
      required
    />
    <label for="password" class="font-semibold">Password</label>
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
        required
      />
      <!-- Shows hide/show text for password field-->
      <span
        class="absolute inset-y-0 right-0 pr-3 pl-6 flex items-center text-sm leading-5 cursor-pointer"
        @click="showPassword = !showPassword"
        style="user-select: none"
      >
        {{ showPassword ? "Hide" : "Show" }}
      </span>
    </div>
    <label for="ConfirmPassword" class="font-semibold">Confirm Password</label>
    <div class="relative">
      <input
        :type="showConfirmPassword ? 'text' : 'password'"
        class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
        required
      />
      <!-- Shows hide/show text for confirm password field-->
      <span
        class="absolute inset-y-0 right-0 pr-3 pl-6 flex items-center text-sm leading-5 cursor-pointer"
        @click="showConfirmPassword = !showConfirmPassword"
        style="user-select: none"
      >
        {{ showConfirmPassword ? "Hide" : "Show" }}
      </span>
    </div>
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
        class="group text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center"
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
</template>

<script setup>
import { ref } from "vue";
const onSubmit = () => {
  // Implement registration logic here
};
const showPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
