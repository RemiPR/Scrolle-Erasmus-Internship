<template>
  <div class="max-w-lg bg-white">
    <h2 class="text-2xl font-semibold text-gray-700">Change Password</h2>
    <hr class="w-2/3 border-t-2 border-gray-200 mt-4 mb-6" />

    <form @submit.prevent="updatePassword">
      <div class="mb-4">
        <label for="currentPassword" class="text-gray-700 font-medium mb-2"
          >Current Password</label
        >
        <input
          type="password"
          id="currentPassword"
          v-model="currentPassword"
          class="block w-2/3 px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          required
        />
      </div>

      <div class="mb-4">
        <label for="newPassword" class="text-gray-700 font-medium mb-2"
          >New Password</label
        >
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          class="block w-2/3 px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          required
        />
      </div>

      <div class="mb-8">
        <label for="confirmNewPassword" class="text-gray-700 font-medium mb-2"
          >Confirm New Password</label
        >
        <input
          type="password"
          id="confirmNewPassword"
          v-model="confirmNewPassword"
          class="block w-2/3 px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          required
        />
      </div>

      <div class="mb-4">
        <button
          type="submit"
          class="w-2/3 font-semibold text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Update Password
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
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
