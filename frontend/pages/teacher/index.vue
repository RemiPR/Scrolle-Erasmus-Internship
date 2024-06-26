<!-- pages/teacher.vue -->
<template>
  <div class="relative min-h-screen bg-gray-100">
    <SharedNavSidebar />
  </div>
</template>

<script setup>
import { ref, markRaw, provide } from "vue";
import { provideSidebar } from "@/composables/useSidebar";

import Dashboard from "@/components/teacher/dashboard/index.vue";

import OnlineClassesComponent from "@/components/OnlineClassesComponent.vue";

import Courses from "~/components/teacher/courses/index.vue";

import Assignments from "~/components/teacher/assignments/index.vue";

import Groups from "@/components/teacher/groups/index.vue";

import Tests from "@/components/teacher/tests/index.vue";

import StudentGradingComponent from "@/components/StudentGradingComponent.vue";
import DigitalLibraryComponent from "@/components/DigitalLibraryComponent.vue";
import ErasmusComponent from "@/components/ErasmusComponent.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";

import HelpComponent from "@/components/Help.vue";
import SettingsComponent from "@/components/Settings.vue";
import { useNavigationStore } from "@/stores/navigationStore";

const sidebarLinks = ref([
  {
    label: "Dashboard",
    component: markRaw(Dashboard),
    icon: "ri:home-3-fill",
    title: "Have a wonderful day, Elīna!",
  },
  {
    label: "Online Classes",
    component: markRaw(OnlineClassesComponent),
    icon: "mdi:video",
    title: "Online Classes",
  },
  {
    label: "Courses",
    component: markRaw(Courses),
    icon: "mdi:book-open-outline",
    title: "Courses",
  },
  {
    label: "Groups",
    component: markRaw(Groups),
    icon: "mdi:account-group-outline",
    title: "Groups",
  },
  {
    label: "Assignments",
    component: markRaw(Assignments),
    icon: "mdi:clipboard-text-outline",
    title: "Assignments",
  },
  {
    label: "Tests",
    component: markRaw(Tests),
    icon: "mdi:file-document-outline",
    title: "Tests",
  },
  {
    label: "Student grading",
    component: markRaw(StudentGradingComponent),
    icon: "mdi:chart-bar",
    title: "Student grading",
  },
  {
    label: "My Digital library",
    component: markRaw(DigitalLibraryComponent),
    icon: "clarity:library-solid",
    title: "My Digital library",
  },
  {
    label: "My Erasmus",
    component: markRaw(ErasmusComponent),
    icon: "mdi:earth",
    title: "My Erasmus",
  },
  {
    label: "Calendar",
    component: markRaw(CalendarComponent),
    icon: "mdi:calendar-outline",
    title: "Calendar",
  },
  // Add more sidebar links as needed
]);

const additionalLinks = ref([
  {
    label: "Help & Support",
    component: markRaw(HelpComponent),
    icon: "mdi:help-circle-outline",
    title: "Help & Support",
  },
  {
    label: "Settings",
    component: markRaw(SettingsComponent),
    icon: "mdi:cog-outline",
    title: "Settings",
  },
]);

const teacherInfo = {
  name: "Elīna Bērziņa",
  email: "elina.berzina@example.com",
};

const navigationStore = useNavigationStore();
navigationStore.setTitle(sidebarLinks.value[0].title);

provideSidebar(
  sidebarLinks.value,
  additionalLinks.value,
  sidebarLinks.value[0].component,
  teacherInfo
);

definePageMeta({
  layout: "nav",
  navigation: "teacher",
  enableScrollStyling: true,
});
</script>
