<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto mt-8"
    @keydown.esc="closeModal"
    tabindex="0"
    ref="modalRef"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="bg-white rounded-xl shadow-lg relative z-10 lg:w-6/12 max-h-screen overflow-y-auto"
    >
      <!-- Scrollable Content -->
      <div class="flex flex-col">
        <!-- Video/Image Background Container -->
        <div class="w-full h-96">
          <SharedCardsVideoPlayer
            :videoUrl="course.videoUrl"
            :title="course.title"
            :autoplay="true"
          />
        </div>
        <!-- Title with Background -->
        <div
          class="bg-blue-500 text-white text-lg text-center py-2 whitespace-nowrap text-ellipsis font-semibold"
        >
          {{ course.title }}
        </div>
        <div class="p-6">
          <!-- Two Column Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Left Column -->
            <div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:currency-usd"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Price</p>
                </div>
                <p class="font-semibold">{{ course.price }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:certificate"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Certification</p>
                </div>
                <p class="font-semibold">{{ course.certification }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:book-open-variant"
                    class="text-gray-700 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Subject</p>
                </div>
                <p class="font-semibold">{{ course.subject }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon name="mdi:timer-sand" class="text-gray-800 font-bold" />
                  <p class="text-gray-600 ml-3">Duration</p>
                </div>
                <p class="font-semibold">{{ course.duration }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:book-outline"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Self-learning material</p>
                </div>
                <p class="font-semibold">{{ course.selfLearningMaterial }}</p>
              </div>
            </div>
            <!-- Right Column -->
            <div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:calendar-start"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Start date</p>
                </div>
                <p class="font-semibold">{{ course.startDate }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:calendar-end"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">End date</p>
                </div>
                <p class="font-semibold">{{ course.endDate }}</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-600">{{ course.extraInformation }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:signal-cellular-3"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Difficulty</p>
                </div>
                <p class="font-semibold">{{ course.difficulty }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:clock-outline"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Time Commitment</p>
                </div>
                <p class="font-semibold">{{ course.timeCommitment }}</p>
              </div>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:timer-outline"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">Lectures Duration</p>
                </div>
                <p class="font-semibold">{{ course.lecturesDuration }}</p>
              </div>
            </div>
          </div>
          <!-- Lecturer Section -->
          <div
            class="border-t-2 border-gray-200 flex justify-between items-center gap-x-12 mt-6"
          >
            <!-- LEFT column -->
            <div class="flex items-center justify-between w-1/2 text-lg">
              <div class="flex items-center">
                <Icon name="mdi:account-tie" class="text-gray-800 font-bold" />
                <p class="text-gray-600 ml-2">Lecturer</p>
              </div>
              <div class="flex items-end">
                <p class="font-semibold">{{ course.lecturer }}</p>
              </div>
            </div>
            <!-- RIGHT column -->
            <div class="flex items-center justify-between w-1/2 text-lg">
              <div class="flex items-center">
                <p class="text-gray-600 font-semibold mr-4">
                  {{ course.lecturerTitle }}
                </p>
              </div>
              <div>
                <img
                  v-if="course.lecturerImg"
                  class="w-16 h-16 rounded-full"
                  :src="course.lecturerImg"
                  :alt="course.lecturer"
                />
              </div>
            </div>
          </div>
          <!-- Biography -->
          <div class="mt-6" v-if="formattedBiography">
            <p class="text-gray-800 mb-2 text-xl">Biography</p>
            <div class="tracking-wider" v-html="formattedBiography"></div>
          </div>
          <!-- Course Description -->
          <div
            class="mt-6 border-t-2 border-gray-200 pt-6"
            v-if="formattedDescription"
          >
            <p class="text-gray-800 mb-2 text-xl">Course description</p>
            <div class="tracking-wider" v-html="formattedDescription"></div>
            <div class="flex justify-center mt-6">
              <button
                class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Enrol Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="absolute top-0 right-0 m-2 text-white hover:text-gray-300"
      @click="closeModal"
    >
      <Icon name="ic:baseline-close" size="24" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const modalRef = ref(null);

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

const formatText = (text) => {
  return text
    ? text.replace(/\n\n/g, "<br/><br/>").replace(/\n/g, "<br/>")
    : "";
};

const formattedBiography = computed(() =>
  formatText(props.course.lecturerBiography)
);
const formattedDescription = computed(() =>
  formatText(props.course.description)
);

watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        if (modalRef.value) {
          modalRef.value.focus();
        }
      });
    }
  }
);

onMounted(() => {
  if (modalRef.value) {
    modalRef.value.focus();
  }
});
</script>

<style scoped>
/* Modal-specific styles */
</style>
