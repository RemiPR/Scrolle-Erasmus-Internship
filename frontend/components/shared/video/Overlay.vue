<template>
  <div
    class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center"
  >
    <div class="ml-24 max-w-2xl">
      <h1 class="text-white text-6xl font-bold">{{ title }}</h1>
      <p class="text-white text-2xl my-10 leading-8">{{ description }}</p>
      <span class="text-white text-2xl my-10 leading-8">
        <slot name="extra-text"></slot>
      </span>
      <div class="flex items-center space-x-8">
        <button
          class="px-6 py-5 font-semibold bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
          @click="handleButtonClick(checkFreeCoursesLink)"
        >
          {{ freeCoursesText }}
        </button>
        <p class="text-white text-2xl">
          {{ $t("shared_video_overlay") }}
        </p>
        <button
          class="px-6 py-5 font-semibold bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
          @click="handleButtonClick(checkProgramsLink)"
        >
          {{ accreditedProgramsText }}
        </button>
      </div>

      <div class="flex items-center space-x-8 mt-4">
        <slot name="extra-content"></slot>
      </div>
    </div>
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <SharedIconArrow use-scroll @click="scrollToSection" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";

const props = defineProps({
  title: String,
  description: String,
  freeCoursesText: String,
  accreditedProgramsText: String,
  checkFreeCoursesLink: String,
  checkProgramsLink: String,
  scrollToElement: Object,
});


const scrollToSection = async () => {
  if (props.scrollToElement) {
    await nextTick();
    props.scrollToElement.scrollIntoView({ behavior: "smooth" });
  }
};

const handleButtonClick = (link) => {
  if (link) {
    window.location.href = link;
  }
};

onMounted(() => {
  // Client-only logic, if any
});
</script>
