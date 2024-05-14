<template>
  <button
    @click="$emit('toggleVideo')"
    class="text-lg absolute bottom-4 right-6 bg-transparent border-2 border-white text-white p-2 rounded hover:bg-gray-800 flex items-center"
  >
    <span class="ml-2">{{ videoPlaying ? "Pause" : "Play" }}</span>
    <Icon
      :name="
        videoPlaying ? 'material-symbols:pause' : 'material-symbols:play-arrow'
      "
      class="h-8 w-8 text-white dark:text-white transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-400"
      style="filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  videoRef: {
    type: Object,
    default: () => null, // Provide a default value to prevent the warning
  },
  videoPlaying: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["toggleVideo"]);
</script>
