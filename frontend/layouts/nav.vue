<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      class="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow sticky top-0 z-10"
      style="position: sticky; top: 0; z-index: 500"
    >
      <nav class="flex items-center">
        <NuxtLink to="#" class="flex items-center">
          <Icon
            name="fluent:hat-graduation-24-regular"
            class="mr-2 h-10 w-10 text-black dark:text-white"
            alt="Graduation hat icon"
          />
          <span class="text-3xl text-black dark:text-white font-semibold"
            >Scroll</span
          >
        </NuxtLink>
        <NuxtLink
          to="/"
          class="text-gray-800 ml-5 dark:text-white hover:underline"
          >Home</NuxtLink
        >
      </nav>
      <nav class="flex items-center gap-4">
        <LangSwitcher class="text-gray-800 dark:text-white hover:underline" />
        <NuxtLink
          to="/login"
          class="text-gray-800 dark:text-white hover:underline"
          >Login</NuxtLink
        >
        <ColorModeToggle />
      </nav>
    </header>
    <!-- Page content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import LangSwitcher from "~/components/index/LangSwitcher.vue";
</script>
