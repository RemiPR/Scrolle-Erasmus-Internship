<template>
  <div class="relative">
    <div
      class="flex items-center cursor-pointer p-2"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      :class="{
        'text-white': !hasScrolled,
        'text-white dark:text-gray-700': hasScrolled,
      }"
    >
      <Icon name="clarity:avatar-solid" class="h-8 w-8" />
      <Icon
        name="ph:caret-down-bold"
        class="ml-2 transition-transform"
        :class="{ 'rotate-180': showMenu }"
      />
    </div>
    <div
      v-if="showMenu"
      class="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50 dark:text-white"
      @mouseover="clearMenuTimeout"
      @mouseout="handleMouseOut"
    >
      <ul>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
        >
          <TextColorModeToggle />
        </li>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
        >
          <Icon name="ic:outline-settings" class="h-5 w-5 mr-2 text-gray-400" />
          Account Settings
        </li>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
        >
          <Icon
            name="material-symbols:help-outline-rounded"
            class="h-5 w-5 mr-2 text-gray-400"
          />
          Help & Support
        </li>
      </ul>
      <div class="border-b border-gray-200 dark:border-gray-700"></div>
      <div
        class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-red-500 dark:text-red-400 flex items-center"
      >
        <Icon name="ic:outline-logout" class="h-5 w-5 mr-2" />
        Sign out
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextColorModeToggle from "@/components/global/TextColorModeToggle.vue";
import { useScrollPosition } from "@/composables/useScrollPosition";

const showMenu = ref(false);
let menuTimeout = null;
const { hasScrolled } = useScrollPosition();

const handleMouseOver = () => {
  clearMenuTimeout();
  showMenu.value = true;
};

const handleMouseOut = () => {
  menuTimeout = setTimeout(() => {
    showMenu.value = false;
  }, 500);
};

const clearMenuTimeout = () => {
  clearTimeout(menuTimeout);
};
</script>
