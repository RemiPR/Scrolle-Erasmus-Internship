<template>
  <form @submit.prevent="onSubmit">
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
        class="group text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-200 hover:text-gray-900 flex items-center"
      >
        <img src="@/public/google_logo.png" alt="Google" class="h-5 mr-2" />
        <span class="font-semibold group-hover:text-black">Google</span>
      </button>
      <button
        class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-200 hover:text-gray-900 flex items-center hover:font-thin"
      >
        <img src="@/public/facebook_logo.png" alt="Facebook" class="h-5 mr-2" />
        <span class="font-semibold group-hover:text-black">Facebook</span>
      </button>
    </div>
  </form>
</template>

<script setup>
const onSubmit = () => {
  // Implement registration logic here
};
</script>
