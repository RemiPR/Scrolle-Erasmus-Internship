<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32">
      <h2 class="text-4xl font-bold mb-14">My courses</h2>
      <DynamicTab :tabs="myCoursesTabs" />
    </main>
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import CourseInfo from "@/components/guest/myCourses/CourseInfo.vue";
import CurrentAssignments from "@/components/guest/myCourses/CurrentAssignments.vue";
import Grades from "@/components/guest/myCourses/grades/Grades.vue";
import LecturerContacts from "@/components/guest/myCourses/LecturerContacts.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});

const myCoursesTabs = [
  {
    name: "course info",
    label: "Course info",
    component: CourseInfo,
  },
  {
    name: "current assignments",
    label: "Current assignments",
    component: CurrentAssignments,
  },
  {
    name: "grades",
    label: "Grades",
    component: Grades,
  },
  {
    name: "lecturer contacts",
    label: "Lecturer contacts",
    component: LecturerContacts,
  },
];
</script>
