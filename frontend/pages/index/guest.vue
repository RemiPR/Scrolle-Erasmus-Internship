<template>
  <div>
    <div class="relative min-h-screen">
      <BackgroundVideoComponent ref="backgroundVideo" videoSource="/test.mp4" />
      <OverlayContentComponent />
      <VideoControlsComponent
        :videoRef="videoRef"
        :videoPlaying="videoPlaying"
        @toggleVideo="toggleVideo"
      />
    </div>
    <!-- <div class="container mx-auto p-4">
      <CoursesSection title="My Courses" :courses="myCourses" />
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackgroundVideoComponent from "@/components/shared/video/BackgroundVideo.vue";
import OverlayContentComponent from "@/components/shared/video/VideoOverlay.vue";
import VideoControlsComponent from "@/components/shared/video/VideoControls.vue";
import CoursesSection from "@/components/shared/cards/CoursesSection.vue";

definePageMeta({
  navigation: "guest",
});

const backgroundVideo = ref(null);
const videoPlaying = ref(true);

const videoRef = ref(null);
const setVideoRef = () => {
  videoRef.value = backgroundVideo.value?.$refs.videoRef;
};

const toggleVideo = () => {
  if (videoPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }
  videoPlaying.value = !videoPlaying.value;
};

onMounted(() => {
  setVideoRef();
});

const myCourses = [
  { id: 1, name: "Course 1", progress: 25 },
  { id: 2, name: "Course 2", progress: 50 },
  // Add more courses as needed
];

const freeCourses = [
  { id: 3, name: "Free Course 1", progress: 0 },
  { id: 4, name: "Free Course 2", progress: 75 },
  // Add more courses as needed
];
</script>

<style scoped>
/* Page-specific styles */
</style>
