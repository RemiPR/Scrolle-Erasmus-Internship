<template>
  <div class="flex items-center justify-between relative">
    <!-- Text content, conditionally placed before or after the vertical line -->
    <div
      :class="[
        'flex-1',
        'p-4',
        'bg-white',
        'shadow-lg',
        'rounded-lg',
        'overflow-hidden',
        borderColor,
        props.textOnLeft ? 'order-1' : 'order-3',
        'max-w-[470px]',
      ]"
    >
      <!-- Index circle moved up to be in the same row as the title -->
      <div class="flex items-center space-x-4">
        <div
          :class="`flex items-center justify-center min-w-[65px] h-[65px] rounded-full text-white font-bold text-2xl ${circleColorClass}`"
        >
          {{ formattedIndex }}
        </div>
        <div class="flex flex-col">
          <h2 class="text-xl font-bold text-gray-800 text-left">
            {{ props.title }}
          </h2>
          <p class="text-gray-600 text-left">{{ props.content }}</p>
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
        class="w-3 h-3 rounded-full mb-2 relative bg-white"
        :class="`border-2 ${circleBorderColor}`"
      ></div>
      <div
        v-for="i in 4"
        :key="'lower' + i"
        class="w-0.5 h-6 bg-gray-400 mb-2"
      ></div>
    </div>

    <!-- Image section, conditionally placed before or after the vertical line -->
    <div
      :class="{ 'order-3': props.textOnLeft, 'order-1': !props.textOnLeft }"
      class="flex-1 max-w-sm"
    >
      <img
        :src="props.imageSrc"
        alt="Description Image"
        class="w-full h-auto"
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
