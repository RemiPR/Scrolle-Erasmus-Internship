<template>
  <div
    class="relative bg-white rounded w-72 transition-transform duration-300 origin-top-center"
    @mouseenter="handleMouseEnter(data.id, playVideo)"
    @mouseleave="handleMouseLeave"
  >
    <!-- Video/Image Background Container -->
    <div class="relative w-full h-48 overflow-hidden">
      <NuxtImg
        preload
        :placeholder="data.imageUrlLowRes"
        class="w-full h-full object-cover transition-all duration-500"
        :src="data.imageUrl"
        :alt="data.title"
        :class="{
          'opacity-0 invisible': videoPlayingIndex === data.id,
          'opacity-100 visible': videoPlayingIndex !== data.id,
          'scale-150': hoveredTileIndex === data.id,
          'scale-100': hoveredTileIndex !== data.id,
        }"
      />
      <transition name="slide-fade" mode="out-in">
        <video
          v-if="videoPlayingIndex === data.id"
          class="w-full h-full object-cover absolute top-0 left-0"
          :autoplay="hoveredTileIndex === data.id"
          muted
          loop
          ref="videoRef"
          :key="data.videoUrl"
        >
          <source :src="data.videoUrl" type="video/mp4" />
        </video>
      </transition>
    </div>
    <!-- Title with Tooltip -->
    <div
      class="bg-blue-500 text-white text-lg text-center py-2 px-5 overflow-hidden whitespace-nowrap text-ellipsis"
      style="max-height: 40px"
      :title="data.title"
    >
      {{ data.title }}
    </div>
    <!-- Hidden Content Below the Title -->
    <div
      v-if="hiddenContent"
      class="absolute border border-gray-300 transition-all duration-500 overflow-hidden z-20 bg-white w-full"
      :class="{
        'opacity-0 invisible': hoveredTileIndex !== data.id,
        'opacity-100 visible': hoveredTileIndex === data.id,
      }"
    >
      <!-- Edit Button -->
      <div class="relative p-4 bg-gray-200 rounded-b text-gray-700">
        <!-- Edit Button -->
        <div class="absolute top-4 right-4 mt-2">
          <button
            @click="handleStudiumClick"
            class="text-lg text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Icon name="fa-solid:edit" class="mr-1" />
            Edit
          </button>
        </div>

        <!-- Text Elements -->
        <p class="text-lg font-semibold text-gray-900 mt-2">{{ data.ects }}</p>
        <p class="text-base text-gray-700 mt-4">
          {{ data.courseDescription }}
        </p>

        <div class="flex justify-between mt-4">
          <div>
            <p class="text-sm text-gray-600">{{ data.startDateText }}</p>
            <p class="text-sm text-gray-900">{{ data.startDate }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">{{ data.endDateText }}</p>
            <p class="text-sm text-gray-900">{{ data.endDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  hiddenContent: Boolean,
  playVideo: Boolean,
});

const hoveredTileIndex = ref(null);
const videoPlayingIndex = ref(null);
const videoRef = ref(null);
const videoPlayingTimeout = ref(null);

const emit = defineEmits(["openMyCourses"]);

const handleMouseEnter = (id, playVideo) => {
  hoveredTileIndex.value = id;
  if (playVideo) {
    videoPlayingIndex.value = id;

    videoPlayingTimeout.value = setTimeout(() => {
      if (videoRef.value) {
        videoRef.value.play();
      }
    }, 500);
  }
};

const handleMouseLeave = () => {
  hoveredTileIndex.value = null;
  videoPlayingIndex.value = null;

  clearTimeout(videoPlayingTimeout.value);
  if (videoRef.value) {
    videoRef.value.pause();
  }
};

const handleStudiumClick = () => {
  emit("openMyCourses", props.data);
};
</script>

<style scoped>
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
