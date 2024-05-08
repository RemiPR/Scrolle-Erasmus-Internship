<!-- layouts/nav.vue -->
<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      class="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow"
    >
      <NuxtLink to="#">
        <Icon
          name="fluent:hat-graduation-24-regular"
          class="mr-2 h-8 w-8"
          alt="Graduation hat icon"
        />
        <span class="text-xl">Scroll</span>
      </NuxtLink>

      <nav class="flex gap-4">
        <NuxtLink to="/" class="text-gray-800 dark:text-white hover:underline"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/login"
          class="text-gray-800 dark:text-white hover:underline"
          >About</NuxtLink
        >
        <NuxtLink
          to="/login"
          class="text-gray-800 dark:text-white hover:underline"
          >Contact</NuxtLink
        >
        <NuxtLink
          to="/login"
          class="text-gray-800 dark:text-white hover:underline"
          >Login</NuxtLink
        >
        <ColorModeToggle />
      </nav>
    </header>
    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>

<script setup></script>
