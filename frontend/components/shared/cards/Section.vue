<template>
  <div class="">
    <div class="my-12 flex items-center justify-between">
      <span class="text-gray-700 text-3xl font-bold">{{ title }}</span>
      <input
        type="text"
        class="ml-2 border-2 border-gray-300 rounded-md px-4 py-1"
        placeholder="Search..."
      />
    </div>
    <div v-if="courses.length > 0" class="flex gap-4 mb-8">
      <SharedCardsCourse
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @openModal="handleOpenModal($event)"
      />
    </div>
    <div
      v-else
      class="flex items-center justify-center h-48 border-dashed border-4 border-gray-300 rounded-lg w-72"
    >
      <button
        @click="redirectToAvailableCourses"
        class="text-blue-500 text-lg flex justify-center items-center w-full h-full"
      >
        <Icon name="mdi:plus" class="text-3xl mr-2" />
        Enroll in a course
      </button>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from "#imports";
const props = defineProps({
  title: {
    type: String,
    default: "Courses",
  },
  courses: {
    type: Array,
    required: true,
  },
});

const localePath = useLocalePath();
const emit = defineEmits(["openModal"]);

const handleOpenModal = (course) => {
  emit("openModal", course);
};

const redirectToAvailableCourses = () => {
  const section = document.getElementById("available-free-courses");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
