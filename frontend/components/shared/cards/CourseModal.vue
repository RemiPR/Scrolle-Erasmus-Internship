<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-scroll mt-32"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="bg-white rounded-lg shadow-lg overflow-y-auto relative z-10 lg:w-8/12"
    >
      <!-- Video/Image Background Container -->
      <VideoPlayer
        :imageUrl="course.imageUrl"
        :videoUrl="course.videoUrl"
        :title="course.title"
        :autoplay="true"
      />
      <!-- Title with Background -->
      <div
        class="bg-blue-500 text-white text-lg text-center py-2 overflow-hidden whitespace-nowrap text-ellipsis"
      >
        {{ course.title }}
      </div>
      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <!-- Left Column -->
        <div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:currency-usd" />
            <p class="text-gray-600">Price</p>
            <p class="font-semiboldbold">{{ course.price }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:certificate" />

            <p class="text-gray-600">Certification</p>
            <p class="font-semibold">£{{ course.certification }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:book-open-variant" />

            <p class="text-gray-600">Subject</p>
            <p class="font-semibold">{{ course.subject }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:timer-sand" />

            <p class="text-gray-600">Duration</p>
            <p class="font-semibold">{{ course.duration }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:book-outline" />

            <p class="text-gray-600">Self-learning material</p>
            <p class="font-semibold">{{ course.selfLearningMaterial }}</p>
          </div>
        </div>
        <!-- Right Column -->
        <div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:calendar-start" />

            <p class="text-gray-600">Start date</p>
            <p class="font-semibold">{{ course.startDate }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:calendar-end" />

            <p class="text-gray-600">End date</p>
            <p class="font-semibold">{{ course.endDate }}</p>
          </div>
          <div class="mb-4">
            <p class="text-gray-600">{{ course.extraInformation }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon
              name="ic:baseline-signal-cellular-alt"
              size="24"
              class="text-gray-500"
            />

            <p class="text-gray-600">Difficulty</p>
            <div class="flex items-center">
              <p class="font-semibold ml-2">{{ course.difficulty }}</p>
            </div>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:clock-outline" />

            <p class="text-gray-600">Time Commitment</p>
            <p class="font-semibold">{{ course.timeCommitment }}</p>
          </div>
          <div class="flex justify-between mb-4">
            <Icon name="mdi:timer-outline" />

            <p class="text-gray-600">Lectures Duration</p>
            <p class="font-semibold">{{ course.lecturesDuration }}</p>
          </div>
        </div>
      </div>
      <!-- Lecturer Row -->
      <div class="flex items-center p-6 border-t border-gray-200">
        <img
          v-if="course.lecturerImg"
          class="w-16 h-16 rounded-full mr-4"
          :src="course.lecturerImg"
          :alt="course.lecturer"
        />
        <div>
          <p class="text-lg font-semibold">{{ course.lecturer }}</p>
          <p class="text-sm text-gray-500">{{ course.lecturerTitle }}</p>
        </div>
      </div>
      <!-- Lecturer Biography -->
      <div class="p-6">
        <p class="text-gray-600 mb-2">Biography</p>
        <p class="text-sm text-gray-500">{{ course.lecturerBiography }}</p>
      </div>
      <!-- Course Description -->
      <div class="p-6 border-t border-gray-200">
        <p class="text-gray-600 mb-2">Course description</p>
        <p class="text-sm text-gray-500">{{ course.description }}</p>
        <div class="flex justify-center mt-6">
          <button
            class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Enrol Now
          </button>
        </div>
      </div>
    </div>
    <button
      class="absolute top-0 right-0 m-2 text-white hover:text-gray-300"
      @click="closeModal"
    >
      <Icon name="ic:baseline-close" size="24" />
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import VideoPlayer from "@/components/shared/cards/CardVideoPlayer.vue";

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
