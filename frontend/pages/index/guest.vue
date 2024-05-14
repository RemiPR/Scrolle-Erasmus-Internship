<template>
  <div class="relative min-h-screen">
    <BackgroundVideoComponent ref="backgroundVideo" videoSource="/test.mp4" />
    <OverlayContentComponent />
    <VideoControlsComponent
      :videoRef="videoRef"
      :videoPlaying="videoPlaying"
      @toggleVideo="toggleVideo"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackgroundVideoComponent from "@/components/shared/video/BackgroundVideo.vue";
import OverlayContentComponent from "@/components/shared/video/VideoOverlay.vue";
import VideoControlsComponent from "@/components/shared/video/VideoControls.vue";

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
</script>

<style scoped>
/* Page-specific styles */
</style>
