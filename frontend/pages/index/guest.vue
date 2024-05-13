<template>
  <div class="relative min-h-screen">
    <!-- Background Video -->
    <video
      autoplay
      loop
      muted
      playsinline
      ref="videoRef"
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="@/public/test.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay Content -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center"
    >
      <div class="ml-10 max-w-md">
        <h1 class="text-white text-4xl font-bold mb-2">Welcome to Scroll</h1>
        <p class="text-white text-lg mb-4">
          We offer a wide variety of free online courses for everyone
        </p>
        <button
          class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Check free courses
        </button>
        <!-- Video Controls -->
        <button
          @click="toggleVideo"
          class="mt-4 bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
        >
          {{ videoPlaying ? "Pause" : "Play" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const videoRef = ref(null);
const videoPlaying = ref(true);

const toggleVideo = () => {
  if (videoPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }
  videoPlaying.value = !videoPlaying.value;
};
definePageMeta({
  navigation: "guest",
});
</script>

<style></style>
