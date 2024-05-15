<template>
  <div>
    <div class="mb-4">
      <span class="font-bold">{{ title }}</span>
      <input
        type="text"
        class="ml-2 border border-gray-300 rounded-md px-2 py-1"
        placeholder="Search..."
      />
    </div>
    <div class="flex gap-4 mb-8">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import CourseCard from "@/components/shared/cards/CourseCard.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  courses: {
    type: Array,
    required: true,
  },
});
</script>
