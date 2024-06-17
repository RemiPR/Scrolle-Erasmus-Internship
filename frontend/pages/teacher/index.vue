<!-- pages/teacher.vue -->
<template>
  <div class="relative min-h-screen bg-gray-100">
    <Sidebar />
  </div>
</template>

<script setup>
import { ref, markRaw } from "vue";
import { provideSidebar } from "@/composables/useSidebar";
import Sidebar from "@/components/global/nav/Sidebar.vue";
import DashboardComponent from "@/components/DashboardComponent.vue";
import OnlineClassesComponent from "@/components/OnlineClassesComponent.vue";
import CoursesComponent from "@/components/CoursesComponent.vue";

const sidebarLinks = ref([
  {
    label: "Dashboard",
    component: markRaw(DashboardComponent),
    icon: "ri:home-3-fill",
  },
  {
    label: "Online Classes",
    component: markRaw(OnlineClassesComponent),
    icon: "mdi:video",
  },
  {
    label: "Courses",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-outline",
  },
  {
    label: "Groups",
    component: markRaw(CoursesComponent),
    icon: "mdi:account-group-outline",
  },
  {
    label: "Assignments",
    component: markRaw(CoursesComponent),
    icon: "mdi:clipboard-text-outline",
  },
  {
    label: "Tests",
    component: markRaw(CoursesComponent),
    icon: "mdi:file-document-outline",
  },
  {
    label: "Student grading",
    component: markRaw(CoursesComponent),
    icon: "mdi:chart-bar",
  },

  {
    label: "My digital library",
    component: markRaw(CoursesComponent),
    icon: "clarity:library-solid",
  },
  {
    label: "My Erasmus",
    component: markRaw(CoursesComponent),
    icon: "mdi:earth",
  },
  {
    label: "Calendar",
    component: markRaw(CoursesComponent),
    icon: "mdi:calendar-outline",
  },
  // Add more sidebar links as needed
]);

const additionalLinks = ref([
  {
    label: "Help & Support",
    component: markRaw(CoursesComponent),
    icon: "mdi:help-circle-outline",
  },
  {
    label: "Settings",
    component: markRaw(CoursesComponent),
    icon: "mdi:cog-outline",
  },
]);

const teacherInfo = {
  name: "Elīna Bērziņa",
  email: "elina.berzina@example.com",
};

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
