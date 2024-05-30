<template>
  <div
    v-if="isMessengerOpen"
    class="fixed top-24 right-0 h-[calc(100%-7rem)] w-96 bg-white shadow-lg z-49 flex flex-col mr-4 rounded-lg"
  >
    <div class="p-4 flex-shrink-0">
      <h2 class="text-2xl text-gray-700 font-semibold mb-4">Chats</h2>
      <!-- Search bar -->
      <div class="relative mb-2">
        <input
          type="text"
          placeholder="Search Messenger"
          class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-600 focus:outline-none focus:bg-white focus:shadow-md"
        />
        <svg
          class="absolute left-3 top-3 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.95 1.8l4.75 4.75a1 1 0 01-1.415 1.414l-4.75-4.75A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <!-- Messenger content -->
    <div class="overflow-y-auto flex-grow p-2 pt-0">
      <!-- Example messages -->
      <div
        v-for="n in 30"
        :key="n"
        class="flex items-center p-2 hover:bg-gray-100 transition-colors duration-200"
      >
        <img
          src="https://via.placeholder.com/40"
          alt="User avatar"
          class="rounded-full w-10 h-10 mr-4"
        />
        <div class="flex-1">
          <p class="text-gray-900 font-semibold">User {{ n }}</p>
          <div class="flex items-center text-gray-500 text-sm">
            <p class="truncate">Message content...</p>
            <span class="mx-1">&middot;</span>
            <p>6 d</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMessengerState } from "@/composables/useMessenger";

const { isMessengerOpen } = useMessengerState();
</script>

<style scoped>
/* Add your styles here */
</style>
