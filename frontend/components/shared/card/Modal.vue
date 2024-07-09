<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-hidden pt-4 mt-6 outline-none nav-scrollbar-light"
    @keydown.esc="closeModal"
    tabindex="0"
    ref="modalRef"
  >
    <div class="fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
    <div
      class="bg-white rounded-xl shadow-lg relative z-10 lg:w-6/12 max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 p-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full shadow-md transition-colors duration-200 z-20"
        @click="closeModal"
      >
        <Icon name="ic:baseline-close" size="24" />
      </button>

      <!-- Scrollable Content -->
      <div class="flex flex-col">
        <!-- Video/Image Background Container -->
        <div class="w-full h-96">
          <SharedCardVideoPlayer
            :videoUrl="data.videoUrl"
            :title="data.title"
            :autoplay="true"
          />
        </div>
        <!-- Title with Background -->
        <div
          class="bg-blue-500 text-white text-lg text-center py-2 whitespace-nowrap text-ellipsis font-semibold"
        >
          {{ data.title }}
        </div>
        <div class="p-6 pb-10">
          <!-- Two Column Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Left Column -->
            <div>
              <div v-if="data.price" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:currency-usd"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">{{ $t("modal.price") }}</p>
                </div>
                <p class="font-semibold">{{ data.price }}</p>
              </div>
              <div v-if="data.certification" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:certificate"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">
                    {{ $t("modal.certification") }}
                  </p>
                </div>
                <p class="font-semibold">€{{ data.certification }}</p>
              </div>
              <div v-if="data.subject" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:book-open-variant"
                    class="text-gray-700 font-bold"
                  />
                  <p class="text-gray-600 ml-3">{{ $t("modal.subject") }}</p>
                </div>
                <p class="font-semibold">{{ data.subject }}</p>
              </div>
              <div v-if="data.duration" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon name="mdi:timer-sand" class="text-gray-800 font-bold" />
                  <p class="text-gray-600 ml-3">{{ $t("modal.duration") }}</p>
                </div>
                <p class="font-semibold">{{ data.duration }} weeks</p>
              </div>
              <div
                v-if="data.selfLearningMaterial"
                class="flex justify-between mb-4"
              >
                <div class="flex items-center">
                  <Icon
                    name="mdi:book-outline"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">
                    {{ $t("modal.self_learning_material") }}
                  </p>
                </div>
                <p class="font-semibold">{{ data.selfLearningMaterial }}</p>
              </div>
              <div v-if="data.language" class="flex justify-between mt-8 mb-4">
                <div class="flex items-center">
                  <Icon
                    name="material-symbols:language"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3 italic font-medium">
                    <span class="text-gray-700 font-bold mr-2">{{
                      $t("modal.important")
                    }}</span
                    >{{ $t("modal.warning") }}
                    <span class="text-gray-700 font-bold">{{
                      data.language
                    }}</span>
                    {{ $t("modal.language") }}
                  </p>
                </div>
              </div>
            </div>
            <!-- Right Column -->
            <div>
              <div v-if="data.startDate" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:calendar-start"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">{{ $t("modal.start_date") }}</p>
                </div>
                <p class="font-semibold">{{ data.startDate }}</p>
              </div>
              <div v-if="data.endDate" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:calendar-end"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">{{ $t("modal.end_date") }}</p>
                </div>
                <p class="font-semibold">{{ data.endDate }}</p>
              </div>
              <div v-if="data.extraInformation" class="mb-4">
                <p class="text-gray-600">{{ data.extraInformation }}</p>
              </div>
              <div v-if="data.difficulty" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:signal-cellular-3"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">{{ $t("modal.difficulty") }}</p>
                </div>
                <p class="font-semibold">{{ data.difficulty }}</p>
              </div>
              <div v-if="data.timeCommitment" class="flex justify-between mb-4">
                <div class="flex items-center">
                  <Icon
                    name="mdi:clock-outline"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">
                    {{ $t("modal.time_commitment") }}
                  </p>
                </div>
                <p class="font-semibold">{{ data.timeCommitment }}</p>
              </div>
              <div
                v-if="data.lecturesDuration"
                class="flex justify-between mb-4"
              >
                <div class="flex items-center">
                  <Icon
                    name="mdi:timer-outline"
                    class="text-gray-800 font-bold"
                  />
                  <p class="text-gray-600 ml-3">
                    {{ $t("modal.lectures_duration") }}
                  </p>
                </div>
                <p class="font-semibold">{{ data.lecturesDuration }}</p>
              </div>
            </div>
          </div>
          <!-- Lecturer Section -->
          <div
            class="border-t-2 border-gray-200 flex justify-between items-center gap-x-12 mt-6"
          >
            <!-- LEFT column -->
            <div
              v-if="data.lecturer"
              class="flex items-center justify-between w-1/2 text-lg mt-3"
            >
              <div class="flex items-center">
                <Icon name="mdi:account-tie" class="text-gray-800 font-bold" />
                <p class="text-gray-600 ml-2">{{ $t("modal.lecturer") }}</p>
              </div>
              <div class="flex items-end">
                <p class="font-semibold">{{ data.lecturer }}</p>
              </div>
            </div>
            <!-- RIGHT column -->
            <div
              v-if="data.lecturerTitle"
              class="flex items-center justify-between w-1/2 text-lg mt-3"
            >
              <div class="flex items-center">
                <p class="text-gray-600 font-semibold mr-4">
                  {{ data.lecturerTitle }}
                </p>
              </div>
              <div>
                <NuxtImg
                  v-if="data.lecturerImg"
                  class="w-16 h-16 rounded-full"
                  :src="data.lecturerImg"
                  :alt="data.lecturer"
                />
              </div>
            </div>
          </div>
          <!-- Biography -->
          <div class="mt-6" v-if="formattedBiography">
            <div class="border-b-2 border-gray-200 mb-4">
              <p class="text-gray-800 mb-2 text-2xl">
                {{ $t("modal.biography") }}
              </p>
            </div>
            <div class="tracking-wider" v-html="formattedBiography"></div>
          </div>
          <!-- Course Description -->
          <div class="mt-6 pt-6" v-if="formattedDescription">
            <div class="border-b-2 border-gray-200 mb-4">
              <p class="text-gray-800 mb-2 text-2xl">
                {{ $t("modal.course_description") }}
              </p>
            </div>
            <div class="tracking-wider" v-html="formattedDescription"></div>
            <div class="flex justify-center mt-6">
              <button
                @click="enrollNow"
                class="text-white font-semibold py-3 px-5 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
              >
                {{ $t("modal.enrol") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from "#imports";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const localePath = useLocalePath();
const userStore = useAuthStore();

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
  formatText(props.data.lecturerBiography)
);
const formattedDescription = computed(() => formatText(props.data.description));

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
const enrollNow = () => {
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn) {
    closeModal();
    navigateTo(localePath("/login")); // redirect to login page
  } else if (!authStore.isConfirmed) {
    closeModal();
    navigateTo(localePath("/guest/enrolment")); // redirect to enrolment page
  } else {
    authStore.enrollCourse(props.data.id);
    closeModal();
  }
};
</script>

<style scoped>
/* Modal-specific styles */
</style>
