<template>
  <div class="pb-64">
    <div class="relative min-h-screen">
      <SharedVideoBackground
        ref="backgroundVideo"
        :videoSource="videoSource"
        :videoPlaying="videoPlaying"
        @update:videoPlaying="updateVideoPlaying"
      />
      <SharedVideoOverlay
        title="Welcome, Emīlija!"
        description="You currently have no unfinished assignments."
        freeCoursesText="Check lectures timetable"
        accreditedProgramsText="Check my assignments"
        checkFreeCoursesLink="/free-courses"
        checkProgramsLink="/accredited-programmes"
      >
        <template #extra-text>
          <div class="space-y-4 mb-6 text-2xl text-white">
            <h4 class="text-white font-semibold">
              Your next lecture:
              <span class="italic font-bold"
                >Advanced Aesthetic Cosmetology</span
              >
            </h4>
            <h4 class="font-semibold">
              Location: <span class="italic font-bold">308 aud.</span>
            </h4>
            <h4 class="font-semibold">
              Starts at: <span class="italic font-bold">14:00</span>,
              <span class="italic font-bold">2024/05/20</span>
            </h4>
          </div>
        </template>
      </SharedVideoOverlay>
      <SharedVideoControls
        :videoRef="videoRef"
        :videoPlaying="videoPlaying"
        @toggleVideo="toggleVideo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "nav",
  navigation: "student",
  enableScrollStyling: true,
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

const updateVideoPlaying = (isPlaying) => {
  videoPlaying.value = isPlaying;
};

onMounted(() => {
  setVideoRef();
});

const videoSource = "/student_bg_video.mp4";
</script>
