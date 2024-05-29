<template>
  <div
    class="bg-white rounded overflow-hidden relative w-72 transition-transform duration-300 origin-top-center"
    :class="{
      'border border-gray-300': hoveredTileIndex === course.id,
      'scale-105': hoveredTileIndex === course.id,
    }"
    @mouseenter="handleMouseEnter(course.id)"
    @mouseleave="handleMouseLeave"
    @click="openModal"
  >
    <!-- Video/Image Background Container -->
    <div class="relative w-full h-48 overflow-hidden">
      <NuxtImg
        preload
        :placeholder="course.imageUrlLowRes"
        class="w-full h-full object-cover"
        :src="course.imageUrl"
        :alt="course.title"
        :class="{
          'opacity-0': videoPlayingIndex === course.id,
        }"
      />
      <transition name="slide-fade" mode="out-in">
        <video
          v-if="videoPlayingIndex === course.id"
          class="w-full h-full object-cover absolute top-0 left-0"
          :autoplay="hoveredTileIndex === course.id"
          muted
          loop
          ref="videoRef"
          :key="course.videoUrl"
        >
          <source :src="course.videoUrl" type="video/mp4" />
        </video>
      </transition>
    </div>
    <!-- Title with Tooltip -->
    <div
      class="bg-blue-500 text-white text-lg text-center py-2 px-5 overflow-hidden whitespace-nowrap text-ellipsis"
      style="max-height: 40px"
      :title="course.title"
    >
      {{ course.title }}
    </div>
    <!-- Hidden Content Below the Title -->
    <div
      class="transition-opacity duration-500 overflow-hidden"
      :class="{
        'opacity-100': hoveredTileIndex === course.id,
        'opacity-0': hoveredTileIndex !== course.id,
      }"
    >
      <div class="px-4 py-2 text-sm text-gray-700">
        <div class="flex flex-col gap-5 mt-2">
          <div class="flex items-center">
            <Icon name="mdi:speaking" class="text-black text-2xl" />
            <p class="ml-2">{{ course.language }}</p>
          </div>
          <div class="flex items-center">
            <Icon name="fluent-mdl2:health-solid" class="text-black text-2xl" />
            <p class="ml-2">{{ course.subject }}</p>
          </div>
          <div class="flex items-center">
            <Icon name="carbon:user-avatar" class="text-black text-2xl" />
            <p class="ml-2">{{ course.lecturer }}</p>
          </div>
          <div class="flex items-center">
            <Icon name="carbon:calendar" class="text-black text-2xl" />
            <p class="ml-2">
              <span class="font-bold">{{ course.duration }}</span> Weeks long
            </p>
          </div>
          <div
            class="flex flex-col sm:flex-row justify-between items-center my-2"
          >
            <button
              @click.stop="openModal"
              class="px-4 py-2 bg-blue-500 rounded-xl font-bold text-white"
            >
              Read more
            </button>

            <div class="w-full sm:w-auto sm:ml-4 text-right">
              <p>Start date:</p>
              <p class="font-bold">{{ course.startDate }}</p>
              <p class="font-bold">{{ course.startTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});

const hoveredTileIndex = ref(null);
const videoPlayingIndex = ref(null);
const videoRef = ref(null);
const videoPlayingTimeout = ref(null);

const emit = defineEmits(["openModal"]);

const handleMouseEnter = (id) => {
  hoveredTileIndex.value = id;
  videoPlayingIndex.value = id;

  videoPlayingTimeout.value = setTimeout(() => {
    if (videoRef.value) {
      videoRef.value.play();
    }
  }, 500);
};

const handleMouseLeave = () => {
  hoveredTileIndex.value = null;
  videoPlayingIndex.value = null;

  clearTimeout(videoPlayingTimeout.value);
  if (videoRef.value) {
    videoRef.value.pause();
  }
};

const openModal = () => {
  emit("openModal", props.course);
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
}
</style>
