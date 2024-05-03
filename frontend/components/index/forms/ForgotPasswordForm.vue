<template>
  <div>
    <div class="text-center mb-6">
      <div class="flex justify-between items-center mb-6">
        <a
          href="#"
          class="flex items-center text-black hover:text-blue-800"
          @click.prevent="$emit('login')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 12H3.75m0 0l6.364 6.364M3.75 12l6.364-6.364"
            />
          </svg>
        </a>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
          Forgot password?
        </h1>
        <span></span>
        <!-- Placeholder for flex spacing -->
      </div>
      <h3 class="text-gray-800 font-semibold text-lg spac">
        Enter your email address
        <span class="block">to reset your password</span>
      </h3>
    </div>
    <form @submit.prevent="onSubmit">
      <label class="font-semibold">Email address</label>
      <input
        type="email"
        class="block w-full px-4 py-2 border border-gray-300 rounded mt-2 mb-7 hover:border-blue-500"
        required
      />
      <button
        type="submit"
        class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset Password
      </button>
      <p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Remembered your password?
        <a
          href="#"
          class="text-sm text-blue-600 hover:font-semibold"
          @click.prevent="$emit('login')"
        >
          Login here
        </a>
      </p>
    </form>
  </div>
</template>

<script setup>
const onSubmit = () => {
  // Implement password reset logic here
};
</script>
