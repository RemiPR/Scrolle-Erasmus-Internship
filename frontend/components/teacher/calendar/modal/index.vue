<!-- components/teacher/calendar/modal/index.vue -->
<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div
        class="bg-white p-6 rounded-lg max-w-2xl w-full shadow-xl overflow-hidden"
      >
        <div class="flex justify-between items-start mb-4 pb-2 border-b">
          <h2 class="text-2xl font-bold">{{ event.title }}</h2>
          <span
            class="text-sm font-medium px-2 py-1 rounded-full"
            :class="getTagClass('eventType', event.eventType)"
          >
            {{ event.eventType }}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-8 mb-4">
          <div>
            <div class="flex items-center mb-4">
              <Icon name="mdi:calendar" class="w-6 h-6 mr-4 text-gray-500" />
              <div>
                <p class="text-sm text-gray-500">Date</p>
                <p class="font-medium">{{ formatDate(event.date) }}</p>
              </div>
            </div>

            <div class="flex items-center mb-4">
              <Icon name="mdi:account" class="w-6 h-6 mr-4 text-gray-500" />
              <div>
                <p class="text-sm text-gray-500">Teacher</p>
                <p class="font-medium">{{ event.teacher }}</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <Icon
                name="mdi:clock-time-four"
                class="w-6 h-6 mr-4 text-gray-500"
              />
              <div>
                <p class="text-sm text-gray-500">Time</p>
                <p class="font-medium">
                  {{ formatTime(event.startTime) }} -
                  {{ formatTime(event.endTime) }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-4">
              <Icon
                name="mdi:office-building"
                class="w-6 h-6 mr-4 text-gray-500"
              />
              <div>
                <p class="text-sm text-gray-500">Classroom</p>
                <p class="font-medium">
                  <span
                    class="px-2 py-1 rounded-full text-sm font-semibold"
                    :class="getTagClass('classroom', event.classroom)"
                  >
                    {{ event.classroom }}
                  </span>
                </p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <Icon
                name="mdi:account-group"
                class="w-6 h-6 mr-4 text-gray-500"
              />
              <div>
                <p class="text-sm text-gray-500">Group</p>
                <p class="font-medium">
                  <span
                    class="px-2 py-1 rounded-full text-sm font-semibold"
                    :class="getTagClass('group', event.group)"
                  >
                    {{ event.group }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <Icon
            name="mdi:file-document-outline"
            class="w-6 h-6 mr-4 text-gray-500 inline-block"
          />
          <strong>Description:</strong> {{ event.description }}
        </div>
        <div class="mt-6 flex justify-end">
          <button
            @click="$emit('close')"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { format } from "date-fns";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const isVisible = ref(false);

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = "hidden";
      // Use nextTick to ensure the DOM has updated before showing the modal
      nextTick(() => {
        isVisible.value = true;
      });
    } else {
      isVisible.value = false;
      document.body.style.overflow = "";
    }
  }
);

const closeModal = () => {
  isVisible.value = false;
  emit("close");
};

onMounted(() => {
  document.addEventListener("keydown", handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscKey);
  document.body.style.overflow = "";
});

const handleEscKey = (event) => {
  if (event.key === "Escape" && isVisible.value) {
    closeModal();
  }
};
const formatDate = (date) => format(new Date(date), "EEEE, MMMM d, yyyy");
const formatTime = (time) => time;

const getTagClass = (type, value) => {
  const colorMap = {
    classroom: "bg-yellow-100 text-yellow-800 ",
    eventType: "bg-orange-100 text-orange-800",
    group: "bg-blue-100 text-blue-800",
  };
  return colorMap[type] || "bg-gray-100 text-gray-800";
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
