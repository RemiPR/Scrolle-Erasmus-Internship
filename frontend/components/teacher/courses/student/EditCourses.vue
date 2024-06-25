<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32">
      <h2 class="text-4xl font-bold mb-14">My courses</h2>
      <DynamicTab :tabs="EditCoursesTabs" />
    </main>
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import CourseInfo from "@/components/guest/myCourses/CourseInfo.vue";
import LecturerContacts from "@/components/guest/myCourses/LecturerContacts.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

definePageMeta({
  layout: "nav",
  navigation: "teacher",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});

const EditCoursesTabs = [
  {
    name: "course info",
    label: "Course info",
    component: CourseInfo,
  },
  {
    name: "lecturer contacts",
    label: "Lecturer contacts",
    component: LecturerContacts,
  },
];
</script>
