<!-- ReusableComponent.vue -->
<template>
  <div
    class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center"
  >
    <div class="ml-24 max-w-2xl">
      <h1 class="text-white text-6xl font-bold">{{ title }}</h1>
      <p class="text-white text-2xl my-10 leading-8">
        {{ description }}
      </p>
      <div class="flex items-center space-x-8">
        <button
          class="px-6 py-5 font-semibold bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
          @click="handleButtonClick(checkFreeCoursesLink)"
        >
          {{ freeCoursesText }}
        </button>
        <p class="text-white text-2xl">or</p>
        <button
          class="px-6 py-5 font-semibold bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
          @click="handleButtonClick(checkProgramsLink)"
        >
          {{ accreditedProgramsText }}
        </button>
      </div>
    </div>
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <SharedIconArrow use-scroll @click="scrollToSection" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

// Define props for the text content
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  freeCoursesText: {
    type: String,
    required: true,
  },
  accreditedProgramsText: {
    type: String,
    required: true,
  },
  checkFreeCoursesLink: {
    type: String,
    required: true,
  },
  checkProgramsLink: {
    type: String,
    required: true,
  },
});

const firstSection = ref(null);

// Arrow function to scroll to the first section
const scrollToSection = async () => {
  await nextTick();
  if (firstSection.value) {
    firstSection.value.scrollIntoView({ behavior: "smooth" });
  }
};

const handleButtonClick = (link) => {
  if (link) {
    window.location.href = link;
  }
};
</script>
