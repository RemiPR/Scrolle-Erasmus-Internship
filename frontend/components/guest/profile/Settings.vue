<template>
  <div class="max-w-lg bg-white">
    <h2 class="text-2xl font-semibold text-gray-700">Change Password</h2>
    <hr class="border-t-2 border-gray-200 mt-4 mb-6" />

    <form @submit.prevent="updatePassword">
      <div class="mb-4">
        <label
          for="currentPassword"
          class="block text-gray-700 font-medium mb-2"
          >Current Password</label
        >
        <input
          type="password"
          id="currentPassword"
          v-model="currentPassword"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="newPassword" class="block text-gray-700 font-medium mb-2"
          >New Password</label
        >
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label
          for="confirmNewPassword"
          class="block text-gray-700 font-medium mb-2"
          >Confirm New Password</label
        >
        <input
          type="password"
          id="confirmNewPassword"
          v-model="confirmNewPassword"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
        >
          Update Password
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentPassword = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");

function updatePassword() {
  if (newPassword.value !== confirmNewPassword.value) {
    alert("New passwords do not match.");
    return;
  }

  // Add your password update logic here, e.g., API call
  alert("Password updated successfully!");
}
</script>

<style scoped>
/* You can add scoped styles here if necessary */
</style>
