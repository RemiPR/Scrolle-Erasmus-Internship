<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      class="flex justify-between items-center p-4 bg-gray-800 dark:bg-white shadow sticky top-0 z-10"
      style="position: sticky; top: 0; z-index: 500"
    >
      <!-- Left nav: Logo + Logo Text and Home button -->
      <nav class="flex items-center">
        <NuxtLink to="#" class="flex items-center">
          <Icon
            name="fluent:hat-graduation-24-regular"
            class="mr-2 h-10 w-10 text-white dark:text-black"
            alt="Graduation hat icon"
          />
          <span class="text-3xl text-white dark:text-black font-semibold"
            >Scroll</span
          >
        </NuxtLink>
        <NuxtLink
          :to="localePath('/')"
          class="text-white ml-5 dark:text-black hover:underline"
          >{{ $t("home_btn") }}</NuxtLink
        >
      </nav>
      <!-- Right nav: Language toggler, Login button, Light/Dark theme toggler -->
      <nav class="flex items-center gap-4">
        <LangSwitcher class="text-white dark:text-black hover:underline" />
        <NuxtLink
          :to="localePath('/login')"
          class="text-white dark:text-black hover:underline"
          >{{ $t("login_btn") }}</NuxtLink
        >
        <ColorModeToggle class="bg-gray-800 dark:bg-white" />
      </nav>
    </header>
    <!-- Page content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import LangSwitcher from "~/components/index/LangSwitcher.vue";
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
</script>
