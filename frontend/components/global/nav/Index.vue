<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      class="bg-gray-800 dark:bg-white shadow flex justify-between font-semibold items-center p-4 fixed top-0 w-full z-50 transition-colors duration-300"
      style="position: fixed; top: 0; z-index: 50"
    >
      <!-- Left nav: Logo + Logo Text and Home button -->
      <nav class="flex items-center space-x-12 text-xl">
        <NuxtLink to="#" class="flex items-center">
          <Icon
            name="fluent:hat-graduation-24-regular"
            class="mr-2 h-10 w-10 text-white dark:text-black"
            alt="Graduation hat icon"
          />
          <span class="text-3xl font-semibold text-white dark:text-black"
            >Scrolle</span
          >
        </NuxtLink>
        <!-- Navigation Links -->
        <NuxtLink
          :to="localePath('/')"
          class="text-white dark:text-black hover:underline"
          >{{ $t("nav_home_btn") }}</NuxtLink
        >
      </nav>
      <!-- Right nav: Language toggler, Login button, Light/Dark theme toggler -->
      <nav class="flex items-center gap-4">
        <IndexLangSwitcher class="text-white dark:text-black hover:underline" />
        <NuxtLink
          :to="localePath('/login')"
          class="text-white dark:text-black hover:underline"
          >{{ $t("nav_login_btn") }}</NuxtLink
        >
        <ColorModeToggle class="bg-gray-800 dark:bg-white" />
      </nav>
    </header>
    <!-- Page content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
</script>
