<template>
  <div
    class="relative"
    @mouseenter="showMenu = true"
    @mouseleave="showMenu = false"
  >
    <div class="flex items-center cursor-pointer border border-red-500">
      <!-- Existing avatar icon setup -->
      <Icon name="clarity:avatar-solid" class="h-8 w-8 mr-2" />
      <Icon
        name="ph:caret-down-bold"
        class="ml-2 transition-transform"
        :class="{ 'rotate-180': showMenu }"
      />
    </div>
    <div
      v-if="showMenu"
      class="absolute right-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50"
    >
      <ul>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          <TextColorModeToggle />
          <!-- Use the renamed TextColorModeToggle component -->
        </li>
        <!-- Other dropdown menu items -->
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Language: British English
        </li>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Restricted Mode: Off
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextColorModeToggle from "@/components/global/TextColorModeToggle.vue"; // Ensure the correct import path

const showMenu = ref(false);
</script>
