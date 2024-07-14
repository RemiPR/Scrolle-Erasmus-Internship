<template>
  <footer class="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Empowering Students</h3>
          <p class="text-base">
            At Scrolle, we're dedicated to revolutionizing education through
            innovative learning solutions. Our platform combines cutting-edge
            technology with expert-led courses to provide an unparalleled
            learning experience.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
          <p class="text-base">
            We aim to help students achieve their academic and professional
            goals by offering a comprehensive and engaging educational
            experience. Our focus is on empowering learners with the tools and
            knowledge they need to succeed in today's rapidly evolving world.
          </p>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
        <div class="text-center">
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4">
            Legal
          </h4>
          <div class="flex justify-center space-x-8">
            <NuxtLink
              v-for="item in legal"
              :key="item.name"
              :to="item.to"
              class="text-base cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-700 pt-8">
        <div class="flex justify-center items-center">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Copyright © {{ new Date().getFullYear() }}
            <span class="font-semibold text-gray-700 dark:text-gray-300 mx-1"
              >Scrolle</span
            >
            | All rights reserved. Empowering education through innovation.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const legal = ref([{ name: "Privacy Policy" }, { name: "Terms of Service" }]);
</script>
