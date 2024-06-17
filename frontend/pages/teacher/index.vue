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
import GroupsComponent from "@/components/GroupsComponent.vue";
import AssignmentsComponent from "@/components/AssignmentsComponent.vue";
import TestsComponent from "@/components/TestsComponent.vue";
import StudentGradingComponent from "@/components/StudentGradingComponent.vue";
import DigitalLibraryComponent from "@/components/DigitalLibraryComponent.vue";
import ErasmusComponent from "@/components/ErasmusComponent.vue";
import Calendar1Component from "@/components/Calendar1Component.vue";
import Calendar2Component from "@/components/Calendar2Component.vue";
import Calendar3Component from "@/components/Calendar3Component.vue";
import Calendar4Component from "@/components/Calendar4Component.vue";
import Calendar5Component from "@/components/Calendar5Component.vue";
import Calendar6Component from "@/components/Calendar6Component.vue";
import Calendar7Component from "@/components/Calendar7Component.vue";
import Calendar8Component from "@/components/Calendar8Component.vue";
import Calendar9Component from "@/components/Calendar9Component.vue";
import HelpComponent from "@/components/Help.vue";
import SettingsComponent from "@/components/Settings.vue";
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
    component: markRaw(GroupsComponent),
    icon: "mdi:account-group-outline",
  },
  {
    label: "Assignments",
    component: markRaw(AssignmentsComponent),
    icon: "mdi:clipboard-text-outline",
  },
  {
    label: "Tests",
    component: markRaw(TestsComponent),
    icon: "mdi:file-document-outline",
  },
  {
    label: "Student grading",
    component: markRaw(StudentGradingComponent),
    icon: "mdi:chart-bar",
  },
  {
    label: "My digital library",
    component: markRaw(DigitalLibraryComponent),
    icon: "clarity:library-solid",
  },
  {
    label: "My Erasmus",
    component: markRaw(ErasmusComponent),
    icon: "mdi:earth",
  },
  {
    label: "Calendar1",
    component: markRaw(Calendar1Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar2",
    component: markRaw(Calendar2Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar3",
    component: markRaw(Calendar3Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar4",
    component: markRaw(Calendar4Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar5",
    component: markRaw(Calendar5Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar6",
    component: markRaw(Calendar6Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar7",
    component: markRaw(Calendar7Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar8",
    component: markRaw(Calendar8Component),
    icon: "mdi:calendar-outline",
  },
  {
    label: "Calendar9",
    component: markRaw(Calendar9Component),
    icon: "mdi:calendar-outline",
  },
  // Add more sidebar links as needed
]);

const additionalLinks = ref([
  {
    label: "Help & Support",
    component: markRaw(HelpComponent),
    icon: "mdi:help-circle-outline",
  },
  {
    label: "Settings",
    component: markRaw(SettingsComponent),
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
