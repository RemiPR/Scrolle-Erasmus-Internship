<template>
  <div class="max-w-lg bg-white">
    <h2 class="text-2xl font-semibold text-gray-700">Personal Settings</h2>
    <hr class="w-2/3 border-t-2 border-gray-200 mt-4 mb-6" />

    <form @submit.prevent="updateFullName">
      <div class="mb-8">
        <label for="fullName" class="text-gray-700 font-medium mb-2"
          >Display Name</label
        >
        <input
          type="text"
          id="fullName"
          v-model="fullName"
          class="block w-2/3 px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          required
        />
      </div>

      <div class="mb-4">
        <button
          type="submit"
          class="w-2/3 font-semibold text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Save changes
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("");

function updateFullName() {
  // Add your full name update logic here, e.g., API call
  alert(`Full name updated to: ${fullName.value}`);
}
</script>

<style scoped>
/* You can add scoped styles here if necessary */
</style>
