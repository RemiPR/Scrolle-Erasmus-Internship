<template>
  <div>
    <div class="mb-12">
      <span class="font-bold">{{ title }}</span>
      <input
        type="text"
        class="ml-2 border border-gray-300 rounded-md px-2 py-1"
        placeholder="Search..."
      />
    </div>
    <div class="flex gap-4 mb-8">
      <SharedCardsCourse
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @openModal="handleOpenModal($event)"
      />
    </div>
  </div>
</template>

<script setup>
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

const emit = defineEmits(["openModal"]);

const handleOpenModal = (course) => {
  emit("openModal", course);
};
</script>
