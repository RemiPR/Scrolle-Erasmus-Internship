<!-- components/teacher/courses/ZoomMeeting.vue -->
<template>
  <div class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16">
    <h2 class="text-2xl font-bold mb-4">Zoom Meeting for {{ course.name }}</h2>
    <p class="mb-4">Preparing to connect to the Zoom meeting...</p>
    <!-- Zoom SDK integration would go here -->
    <button
      @click="startMeeting"
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      Start Meeting
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const course = ref({});

onMounted(() => {
  const courseId = route.params.id;
  const courses = JSON.parse(localStorage.getItem("courses") || "[]");
  course.value = courses.find((c) => c.id.toString() === courseId) || {};
});

function startMeeting() {
  // Here you would integrate with the Zoom SDK to start the meeting
  console.log("Starting Zoom meeting for course:", course.value.name);
}
</script>
