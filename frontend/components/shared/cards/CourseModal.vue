<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="bg-white rounded-lg shadow-lg p-6 w-3/4 max-h-screen overflow-y-auto relative z-10"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">{{ course.title }}</h2>
        <button class="text-gray-600 hover:text-gray-800" @click="closeModal">
          <Icon name="ic:baseline-close" size="24" />
        </button>
      </div>
      <p class="text-gray-700 mb-4">{{ course.description }}</p>
      <!-- Add more course details here -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
