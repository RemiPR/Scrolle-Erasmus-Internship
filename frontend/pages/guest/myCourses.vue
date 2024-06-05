<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32">
      <h2 class="text-4xl font-bold mb-14">My courses</h2>
      <DynamicTab :tabs="admissionTabs" />
    </main>
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import EntranceRequirements from "@/components/guest/myCourses/CourseInfo.vue";
import Permits from "@/components/guest/myCourses/CurrentAssignments.vue";
import Fees from "@/components/guest/myCourses/Grades.vue";
import Application from "@/components/guest/myCourses/LecturerContacts.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});

const admissionTabs = [
  {
    name: "entrance",
    label: "Course info",
    component: EntranceRequirements,
  },
  {
    name: "visas",
    label: "Current assignments",
    component: Permits,
  },
  {
    name: "fees",
    label: "Grades",
    component: Fees,
  },
  {
    name: "application",
    label: "Lecturer contacts",
    component: Application,
  },
];
</script>
