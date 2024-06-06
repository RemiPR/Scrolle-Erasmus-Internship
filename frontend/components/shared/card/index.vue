<template>
  <div
    class="relative bg-white rounded w-72 transition-transform duration-300 origin-top-center"
    @mouseenter="handleMouseEnter(data.id, playVideo)"
    @mouseleave="handleMouseLeave"
  >
    <!-- Video/Image Background Container -->
    <div class="relative w-full h-48 overflow-hidden" @click="openModal">
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
      <div class="px-4 py-2 text-sm text-gray-700">
         <!-- Div with two child div collumns -->
        <div class="mt-2 flex flex-row">
          <!-- Collumn left -->
          <div  class="flex flex-col gap-5">
            <div v-if="data.language" class="flex items-center">
              <Icon name="mdi:speaking" class="text-black text-2xl" />
              <p class="ml-2">{{ data.language }}</p>
            </div>
            <div v-if="data.subject" class="flex items-center">
              <Icon name="fluent-mdl2:health-solid" class="text-black text-2xl" />
              <p class="ml-2">{{ data.subject }}</p>
            </div>
            <div v-if="data.lecturer" class="flex items-center">
              <Icon name="carbon:user-avatar" class="text-black text-2xl" />
              <p class="ml-2">{{ data.lecturer }}</p>
            </div>
            <div v-if="data.duration" class="flex items-center">
              <Icon name="carbon:calendar" class="text-black text-2xl" />
              <p class="ml-2">
                <span class="font-bold">{{ data.duration }}</span>
                {{ $t("index.weeks") }}
              </p>
            </div>
            <div v-if="data.assignments" class="flex items-center">
              <Icon name="carbon:calendar" class="text-black text-2xl" />
              <p class="ml-2">
                 {{ $t("index.assignments") }}
                <span class="font-bold">{{ data.assignments.length }}</span>
              </p>
            </div>
          </div>
          <!-- Collumn right -->
          <div  class="flex flex-col w-2/4 text-right items-end gap-5">
            <div v-if="data.ects" class="items-end flex flex-col">
              <p>{{data.ects}} ECTS</p>
            </div>
            <div v-if="data.assignDeadlineDate" class="items-end flex flex-col">
              <span>{{ $t("index.assign_deadline") }}</span>
              <span class="font-bold">{{data.assignDeadlineDate}}</span>
              <span class="font-bold">{{data.assignDeadlineTime}}</span>
            </div>
            <div class="flex-grow"></div>
            <div v-if="data.assignments" class="items-end flex flex-col">
              <p>{{$t("index.deadline")}}</p>
            </div>
          </div>
        </div>
        <!-- Div with middle content -->
        <div
          v-if="data.assignments"
          class="flex flex-col items-center my-2"
        >
          <div v-for="(assignment, index) in data.assignments" :key="index" class="flex flex-row border-t-2 border-gray-200"> 
            <p class="font-bold mx-2">{{index + 1}}</p>
            <p>{{assignment.title}}</p>
            <p class="font-bold text-right w-fit">{{assignment.assignDeadlineDate}}</p>
          </div>
        </div>
        <!-- Div with row child divs -->
        <div
          class="flex flex-col sm:flex-row justify-between items-center my-2"
        >
          <button
            @click.stop="openModal"
            class="px-4 py-2 bg-blue-500 mt-4 rounded-xl font-bold text-white"
          >
            {{ $t("index.read_more") }}
          </button>
          <div
            v-if="data.startDate"
            class="w-full sm:w-auto sm:ml-4 text-right"
          >
            <p>{{ $t("index.start_date") }}</p>
            <p class="font-bold">{{ data.startDate }}</p>
            <p class="font-bold">{{ data.startTime }}</p>
          </div>
           <div v-if="data.nextLectureDate" class="items-end flex flex-col">
              <span>{{ $t("index.next_lecture") }}</span>
              <span class="font-bold">{{data.nextLectureDate}}</span>
              <span class="font-bold">{{data.nextLectureTime}}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  hiddenContent: {
    type: Boolean,
    default: true,
  },
  playVideo: {
    type: Boolean,
    default: true,
  },
});

const hoveredTileIndex = ref(null);
const videoPlayingIndex = ref(null);
const videoRef = ref(null);
const videoPlayingTimeout = ref(null);

const emit = defineEmits(["openModal"]);

const debugData = (data) => {
  console.log(data);
}

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

const openModal = () => {
  emit("openModal", props.data);
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
