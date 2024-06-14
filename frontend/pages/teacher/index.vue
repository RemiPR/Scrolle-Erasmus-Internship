<!-- pages/teacher.vue -->
<template>
  <div class="relative min-h-screen ml-4">
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
    icon: "mdi:book-open-variant",
  },
  {
    label: "Groups",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },
  {
    label: "Assignments",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },
  {
    label: "Tests",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },
  {
    label: "Student grading",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },

  {
    label: "My digital library",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },
  {
    label: "My Erasmus",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },
  {
    label: "Calendar",
    component: markRaw(CoursesComponent),
    icon: "mdi:book-open-variant",
  },
  // Add more sidebar links as needed
]);

provideSidebar(sidebarLinks.value, sidebarLinks.value[0].component);

definePageMeta({
  layout: "nav",
  navigation: "teacher",
  enableScrollStyling: true,
});
</script>
