<template>
  <div class="my-6">
    <DynamicTab :tabs="tabs" />
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import CoursesBuilder from "@/components/teacher/courses/builder/Index.vue";
import StudentCourses from "@/components/teacher/courses/student/Index.vue";
import FreeCourses from "@/components/teacher/courses/free/Index.vue";

const tabs = [
  { name: "builder", label: "Courses Builder", component: CoursesBuilder },
  { name: "student", label: "My student courses", component: StudentCourses },
  { name: "free", label: "My free courses", component: FreeCourses },
];
</script>
