<!-- components/teacher/courses/list.vue -->
<template>
  <div class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16">
    <h2 class="text-2xl font-bold mb-4">Your Courses</h2>
    <div v-if="courses.length === 0" class="text-gray-500">
      No courses available. Create your first course!
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="course in courses"
        :key="course.id"
        class="border p-4 rounded"
      >
        <h3 class="text-xl font-semibold">{{ course.name }}</h3>
        <p class="text-gray-600">{{ course.description }}</p>
        <p class="text-sm text-gray-500">
          Type: {{ course.courseType }}, Location:
          {{ course.courseLocationType }}, Language: {{ course.language }}
        </p>
        <div class="mt-2">
          <button
            @click="connectToMeeting(course.id)"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Connect to Meeting
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const courses = ref([]);
const router = useRouter();

onMounted(() => {
  courses.value = JSON.parse(localStorage.getItem("courses") || "[]");
});

function connectToMeeting(courseId) {
  // Navigate to a new page for the Zoom meeting
  router.push(`/courses/${courseId}/meeting`);
}
</script>
