<template>
  <div class="">
    <div class="my-12 flex items-center justify-between">
      <span class="text-gray-700 text-3xl font-bold">{{ title }}</span>
      <StudentWorkloadMeter
        v-if="workloadMeter"
        :coefficient="workloadCoefficient(dataArray.length, 10)"
      />
      <input
        type="text"
        class="ml-2 border-2 border-gray-300 rounded-md px-4 py-1"
        :placeholder="$t('section.input')"
      />
    </div>
    <div v-if="dataArray.length > 0" class="flex gap-4">
      <SharedCard
        v-for="data in dataArray"
        :key="data.id"
        :data="data"
        :hiddenContent="hiddenContent"
        :playVideo="playVideo"
        @openModal="handleOpenModal($event)"
      />
    </div>
    <div
      v-else
      class="flex items-center justify-center h-48 border-dashed border-4 border-gray-300 rounded-lg w-72"
    >
      <button v-if="currentPage == '/guest' "
        @click="redirectToAvailableCourses"
        class="text-blue-500 text-lg flex justify-center items-center w-full h-full"
      >
        <Icon name="mdi:plus" class="text-3xl mr-2" />
        {{ $t("section.enrol") }}
      </button>
      <span v-else
        class="text-blue-500 text-lg flex justify-center items-center w-full h-full"
      >
        {{ $t("section.empty") }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from "#imports";
import { useRoute } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    default: "Courses",
  },
  dataArray: {
    type: Array,
    required: true,
  },
  workloadMeter: {
    type: Boolean,
    default: false,
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

const route = useRoute();
const localePath = useLocalePath();
const emit = defineEmits(["openModal"]);

const handleOpenModal = (data) => {
  emit("openModal", data);
};

const workloadCoefficient = (assignmenttAmount, maxAmount) => {
  return assignmenttAmount / maxAmount;
};

const currentPage = computed(() => {
  const result = route.path.substring(6);
  return result;
  });

const redirectToAvailableCourses = () => {
  const section = document.getElementById("available-free-courses");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
