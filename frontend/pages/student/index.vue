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
        description="You currently have no unfinished assigments."
        freeCoursesText="Check lectures timetable"
        accreditedProgramsText="Check my assignments"
        checkFreeCoursesLink="/free-courses"
        checkProgramsLink="/accredited-programmes"
      >
        <template #extra-text>
          <div class="mt-8">
            <h4 class="text-white text-xl font-semibold">
              Your next lecture
              <span class="italic font-bold"
                >Advanced Aesthetic Cosmetology
              </span>
              is in <span class="italic font-bold">308 aud.</span> and starts at
              <span class="italic font-bold">14:00</span>,
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
definePageMeta({
  layout: "nav",
  navigation: "student",
  enableScrollStyling: true,
  // middleware: ['auth', 'guest'],
});

const authStore = useAuthStore();

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

const videoSource = "/student_bg_video.mp4"; // Define the video source
</script>

<style scoped></style>
