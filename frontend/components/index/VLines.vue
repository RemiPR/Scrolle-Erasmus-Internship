<template>
  <div class="relative flex flex-col items-center mx-2 md:mx-4">
    <div
      v-for="i in numLines"
      :key="'upper' + i"
      class="w-0.5 h-4 md:h-6 bg-gray-400 mb-1 md:mb-2"
    ></div>
    <div
      v-if="showCircleWithLine"
      class="circle-with-line md:min-w-4 md:min-h-4 lg:min-w-6 lg:min-h-6 rounded-full mb-1 md:mb-2 relative bg-white"
      :class="[`border-2 ${circleBorderColor}`, textOnLeft ? 'line-left' : '']"
    ></div>
    <div
      v-for="i in numLines"
      :key="'lower' + i"
      class="w-0.5 h-4 md:h-6 bg-gray-400 mb-1 md:mb-2"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  textOnLeft: Boolean,
  circleBorderColor: String, // Border color class for the middle vertical circle
  showCircleWithLine: Boolean, // Boolean to show circle with line
  numLines: {
    type: Number,
    default: 4, // Default to 4 lines if not provided
  },
});

const upperLines = computed(() => Array.from({ length: props.numLines }));
const lowerLines = computed(() => Array.from({ length: props.numLines }));
</script>

<style scoped>
.circle-with-line::after {
  content: "";
  position: absolute;
  top: 50%; /* Center it vertically to the circle */
  left: 100%; /* Start from the right edge of the circle */
  width: 50px; /* Length of the horizontal line */
  height: 0.5px; /* Thickness of the line to match vertical lines */
  background-color: #a0aec0; /* Tailwind gray-400 color */
  transform: translateY(-50%); /* Ensures it remains centered */
}

.circle-with-line.line-left::after {
  left: auto; /* Remove the left positioning */
  right: 100%; /* Start from the left edge of the circle */
}

@media (min-width: 768px) {
  .circle-with-line::after {
    width: 100px; /* Length of the horizontal line for larger screens */
  }
}
</style>
