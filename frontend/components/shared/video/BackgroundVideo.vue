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
import { ref } from "vue";

const props = defineProps({
  videoSource: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);

defineExpose({ videoRef });
</script>
