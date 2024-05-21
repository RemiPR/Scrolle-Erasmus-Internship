<template>
  <div class="relative w-full h-48 overflow-hidden">
    <img
      v-if="imageUrl"
      class="w-full h-full object-cover"
      :src="imageUrl"
      :alt="title"
      :class="{
        'opacity-0': videoPlaying,
      }"
    />
    <video
      v-else
      class="w-full h-full object-cover"
      :src="videoUrl"
      :autoplay="autoplay"
      muted
      loop
      ref="videoRef"
    ></video>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    default: "",
  },
  videoUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
});

const videoRef = ref(null);
const videoPlaying = ref(false);

const handleVideoPlaying = () => {
  videoPlaying.value = true;
};

const handleVideoPaused = () => {
  videoPlaying.value = false;
};

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.addEventListener("playing", handleVideoPlaying);
    videoRef.value.addEventListener("pause", handleVideoPaused);
  }
});

onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.removeEventListener("playing", handleVideoPlaying);
    videoRef.value.removeEventListener("pause", handleVideoPaused);
  }
});

watch(
  () => props.autoplay,
  (newValue) => {
    if (newValue && videoRef.value) {
      videoRef.value.play();
    } else if (videoRef.value) {
      videoRef.value.pause();
    }
  }
);
</script>
