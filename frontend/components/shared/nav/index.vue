<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      class="bg-gray-800 dark:bg-white shadow flex justify-between font-semibold items-center p-4 fixed top-0 w-full z-50 transition-colors duration-300"
      style="position: fixed; top: 0; z-index: 50"
    >
      <!-- Left nav: Logo + Logo Text and Home button -->
      <nav class="flex items-center space-x-12 text-xl">
        <NuxtLink
          to="#"
          class="group flex items-center justify-center space-x-2 px-2 py-2"
        >
          <Icon
            name="fluent:hat-graduation-24-regular"
            class="h-8 w-8 3xl:h-10 3xl:w-10 group-hover:-rotate-[25deg] transition-all duration-500 group-hover:text-blue-400 text-white dark:text-black"
            alt="Graduation hat icon"
          />
          <span
            class="text-3xl font-semibold group-hover:text-blue-200 dark:group-hover:text-blue-400 transition-all duration-700 text-white dark:text-black"
            >Scrolle</span
          >
        </NuxtLink>
        <!-- Navigation Links -->
        <button
          @click="scrollTop"
          class="text-white dark:text-black hover:underline"
          >{{ $t("nav_home_btn") }}</button
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
        <SharedThemeColorModeToggle class="bg-gray-800 dark:bg-white" />
      </nav>
    </header>
    <!-- Page content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { useLocalePath } from "#imports";

const scrollTop = () => {
  window.scrollTo({top:0, behavior: 'smooth'})
}

const localePath = useLocalePath();
</script>
