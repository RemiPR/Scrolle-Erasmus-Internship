<!-- components/teacher/calendar/modal/index.vue -->
<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-lg max-w-2xl w-full shadow-xl">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-2xl font-bold">{{ event.title }}</h2>
        <span
          class="text-sm font-medium px-2 py-1 rounded-full"
          :class="getTagClass('eventType', event.eventType)"
        >
          {{ event.eventType }}
        </span>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p class="text-gray-600 mb-2">
            <strong>Date:</strong> {{ formatDate(event.date) }}
          </p>
          <p class="text-gray-600 mb-2">
            <strong>Time:</strong> {{ formatTime(event.startTime) }} -
            {{ formatTime(event.endTime) }}
          </p>
          <p class="text-gray-600 mb-2">
            <strong>Teacher:</strong> {{ event.teacher }}
          </p>
        </div>
        <div>
          <p class="text-gray-600 mb-2">
            <strong>Classroom:</strong>
            <span
              class="px-2 py-1 rounded-full text-sm font-medium"
              :class="getTagClass('classroom', event.classroom)"
            >
              {{ event.classroom }}
            </span>
          </p>
          <p class="text-gray-600 mb-2">
            <strong>Group:</strong>
            <span
              class="px-2 py-1 rounded-full text-sm font-medium"
              :class="getTagClass('group', event.group)"
            >
              {{ event.group }}
            </span>
          </p>
        </div>
      </div>
      <p class="text-gray-700 mb-4">
        <strong>Description:</strong> {{ event.description }}
      </p>
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
</template>

<script setup>
import { format } from "date-fns";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const formatDate = (date) => format(new Date(date), "EEEE, MMMM d, yyyy");
const formatTime = (time) => time;

const getTagClass = (type, value) => {
  const colorMap = {
    classroom: "bg-yellow-100 text-yellow-800",
    eventType: "bg-orange-100 text-orange-800",
    group: "bg-blue-100 text-blue-800",
  };
  return colorMap[type] || "bg-gray-100 text-gray-800";
};
</script>
