<template>
  <footer class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Logo (Replace with your actual logo) -->
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

      <!-- Text Links -->
      <div class="flex space-x-6">
        <!-- First Column -->
        <div>
          <h3 class="text-gray-700 font-semibold mb-2">About Riga, Latvia</h3>
          <a href="#" class="text-gray-500 hover:text-blue-500">History</a>
          <!-- Add more links as needed -->
        </div>

        <!-- Second Column -->
        <div>
          <h3 class="text-gray-700 font-semibold mb-2">
            About Turiba University
          </h3>
          <a href="#" class="text-gray-500 hover:text-blue-500">Mission</a>
          <!-- Add more links as needed -->
        </div>
      </div>
    </div>
  </footer>
</template>
