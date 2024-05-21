<template>
  <video
    autoplay
    loop
    muted
    playsinline
    ref="videoRef"
    class="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source :src="videoSource" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
const props = defineProps({
  videoSource: {
    type: String,
    required: true,
  },
  videoPlaying: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:videoPlaying"]);

const videoRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (videoRef.value) {
          if (entry.isIntersecting) {
            if (props.videoPlaying) {
              videoRef.value.play();
            }
          } else {
            videoRef.value.pause();
            emit("update:videoPlaying", false);
          }
        }
      });
    },
    { threshold: 0.5 } // Adjust this value as needed
  );

  if (videoRef.value) {
    observer.observe(videoRef.value);
  }

  onUnmounted(() => {
    if (videoRef.value) {
      observer.unobserve(videoRef.value);
    }
  });
});

watch(
  () => props.videoPlaying,
  (newVal) => {
    if (videoRef.value) {
      if (newVal) {
        videoRef.value.play();
      } else {
        videoRef.value.pause();
      }
    }
  }
);

defineExpose({ videoRef });
</script>
