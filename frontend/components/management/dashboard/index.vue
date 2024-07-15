<template>
  <div class="relative min-h-[85vh]">
    <SharedVideoBackground
      ref="backgroundVideo"
      :videoSource="videoSource"
      :videoPlaying="videoPlaying"
      @update:videoPlaying="updateVideoPlaying"
    />
    <SharedVideoOverlay
      :scrollToElement="$refs.scrollToElement"
      :title="$t('shared_video_overlay.title')"
      :description="$t('shared_video_overlay.description')"
      :freeCoursesText="$t('shared_video_overlay.free_courses_text')"
      :accreditedProgramsText="
        $t('shared_video_overlay.accredited_programs_text')
      "
      checkFreeCoursesLink="/free-courses"
      checkProgramsLink="/accredited-programmes"
    />
    <SharedVideoControls
      :videoRef="videoRef"
      :videoPlaying="videoPlaying"
      @toggleVideo="toggleVideo"
    />
  </div>
</template>

<script setup>
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
const videoSource = "/management_bg_video.mp4";
</script>

<style scoped></style>
