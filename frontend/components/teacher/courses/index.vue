<template>
  <div class="my-6">
    <DynamicTab :tabs="tabs" />
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import CoursesBuilder from "@/components/teacher/courses/builder/index.vue";
import StudentCourses from "@/components/teacher/courses/student/index.vue";
import FreeCourses from "@/components/teacher/courses/free/index.vue";

const tabs = [
  { name: "builder", label: "Courses Builder", component: CoursesBuilder },
  { name: "student", label: "My student courses", component: StudentCourses },
  { name: "free", label: "My free courses", component: FreeCourses },
];
</script>
