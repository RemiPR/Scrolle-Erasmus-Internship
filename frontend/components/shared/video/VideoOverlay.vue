<template>
  <div
    class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center"
  >
    <div class="ml-24 max-w-2xl">
      <h1 class="text-white text-6xl font-bold">Welcome to Scroll</h1>
      <p class="text-white text-2xl my-10 leading-8">
        We offer a wide variety of accredited programmes and lecturer guided
        free online courses with available certification for everyone
      </p>
      <div class="flex items-center space-x-8">
        <button
          class="px-6 py-5 font-semibold bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Check free courses
        </button>
        <p class="text-white text-2xl">or</p>
        <button
          class="px-6 py-5 font-semibold bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Check our accredited programmes
        </button>
      </div>
    </div>
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <ArrowIcon @click="scrollToSection" />
    </div>
  </div>
</template>

<script setup>
import ArrowIcon from "~/components/shared/ui/ArrowIcon.vue";

const firstSection = ref(null);

// Arrow function to scroll to the first section
const scrollToSection = async () => {
  await nextTick();
  if (firstSection.value) {
    firstSection.value.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
