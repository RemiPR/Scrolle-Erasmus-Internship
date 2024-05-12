<template>
  <div class="flex items-center justify-center relative gap-x-20">
    <!-- Text content, conditionally placed before or after the vertical line -->
    <div
      :class="[
        'border-l-8',
        'flex-1',
        'p-4',
        'bg-white',
        'dark:bg-gray-700',
        'shadow-lg',
        'rounded-lg',
        'overflow-hidden',
        `${circleBorderColor}`,
        props.textOnLeft ? 'order-1' : 'order-3',
        'max-w-[470px]',
      ]"
    >
      <!-- Index circle moved up to be in the same row as the title -->
      <div class="flex items-center space-x-8 max-w-[500px] min-h-[128px]">
        <div
          :class="`flex items-center justify-center min-w-[65px] h-[65px] rounded-full text-white font-bold text-3xl ${circleColorClass}`"
        >
          {{ formattedIndex }}
        </div>
        <div class="flex flex-col">
          <h2
            class="text-3xl font-bold text-gray-700 dark:text-white text-left mb-3"
          >
            {{ props.title }}
          </h2>
          <p class="text-gray-600 text-left text-xl dark:text-white">
            {{ props.content }}
          </p>
        </div>
      </div>
    </div>

    <!-- Vertical dashed line with circle and horizontal lines to text -->
    <div class="relative flex flex-col items-center mx-4 order-2">
      <div
        v-for="i in 4"
        :key="'upper' + i"
        class="w-0.5 h-6 bg-gray-400 mb-2"
      ></div>
      <div
        class="circle-with-line w-6 h-6 rounded-full mb-2 relative bg-white"
        :class="[
          `border-2 ${circleBorderColor}`,
          props.textOnLeft ? 'line-left' : '',
        ]"
      ></div>
      <div
        v-for="i in 4"
        :key="'lower' + i"
        class="w-0.5 h-6 bg-gray-400 mb-2"
      ></div>
    </div>

    <!-- Image section, conditionally placed before or after the vertical line -->
    <div
      :class="[
        { 'order-3': props.textOnLeft, 'order-1': !props.textOnLeft },
        'flex-1 max-w-custom',
      ]"
    >
      <img
        :src="props.imageSrc"
        alt="Description Image"
        class="w-[470px] h-[160px] object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Define props
const props = defineProps({
  title: String,
  content: String,
  imageSrc: String,
  textOnLeft: Boolean,
  index: Number,
  borderColor: String,
  circleColorClass: String, // Full bg color class for index circle
  circleBorderColor: String, // Border color class for the middle vertical circle
});

const formattedIndex = computed(() => {
  if (typeof props.index === "number") {
    return (props.index + 1).toString().padStart(2, "0");
  }
  return "00";
});
</script>

<style scoped>
.flex-1.max-w-custom {
  max-width: 470px; /* Match text card width */
}
.circle-with-line::after {
  content: "";
  position: absolute;
  top: 50%; /* Center it vertically to the circle */
  left: 100%; /* Start from the right edge of the circle */
  width: 100px; /* Length of the horizontal line */
  height: 0.5px; /* Thickness of the line to match vertical lines */
  background-color: #a0aec0; /* Tailwind gray-400 color */
  transform: translateY(-50%); /* Ensures it remains centered */
}

.circle-with-line.line-left::after {
  left: auto; /* Remove the left positioning */
  right: 100%; /* Start from the left edge of the circle */
}
</style>
