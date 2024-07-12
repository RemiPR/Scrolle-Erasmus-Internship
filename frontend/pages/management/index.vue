<!-- pages/management.vue -->
<template>
  <div class="relative min-h-screen bg-gray-100">
    <SharedNavSidebar />
  </div>
</template>

<script setup>
import { ref, markRaw } from "vue";
// Sidebar
import { provideSidebar } from "@/composables/useSidebar";
// Misc
import DashboardHome from "@/components/management/dashboard/index.vue";
import Events from "@/components/management/events/upcoming/index.vue";
import Balance from "@/components/management/balance/index.vue";
import Calendar from "@/components/teacher/calendar/index.vue";
import Certificates from "@/components/management/certificates/index.vue";
import Erasmus from "@/components/management/erasmus/index.vue";
import Payments from "@/components/management/payments/index.vue";
import Projects from "@/components/management/projects/index.vue";
import Reports from "@/components/management/reports/index.vue";
import CampusLayout from "@/components/management/campus/layout/index.vue";
// Staff
import Staff from "@/components/management/staff/index.vue";
// Students
import Students from "@/components/management/students/index.vue";
// Help & Settings
import HelpComponent from "@/components/Help.vue";
import SettingsComponent from "@/components/Settings.vue";

const sidebarLinks = ref([
  {
    label: "Dashboard",
    component: markRaw(DashboardHome),
    icon: "ri:home-3-fill",
    title: "Have a wonderful day, Elīna!",
  },
  {
    label: "Events",
    component: markRaw(Events),
    icon: "mdi:video",
    title: "View and manage upcoming events",
  },
  {
    label: "Balance",
    component: markRaw(Balance),
    icon: "mdi:currency-usd",
    title: "Manage your financial balance",
  },
  {
    label: "Reports",
    component: markRaw(Reports),
    icon: "mdi:file-document-outline",
    title: "View and generate reports",
  },
  {
    label: "Payments",
    component: markRaw(Payments),
    icon: "mdi:credit-card-outline",
    title: "Manage and track payments",
  },
  {
    label: "Certificates",
    component: markRaw(Certificates),
    icon: "mdi:certificate-outline",
    title: "View and issue certificates",
  },
  {
    label: "Projects",
    component: markRaw(Projects),
    icon: "mdi:projector-screen",
    title: "Manage projects",
  },
  {
    label: "Erasmus",
    component: markRaw(Erasmus),
    icon: "mdi:earth",
    title: "Manage Erasmus activities",
  },
  {
    label: "Calendar",
    component: markRaw(Calendar),
    icon: "mdi:calendar-outline",
    title: "View and manage calendar events",
  },
  {
    label: "Campus Layout",
    component: markRaw(CampusLayout),
    icon: "mdi:map-outline",
    title: "View and manage campus layout",
  },
  {
    label: "Staff",
    component: markRaw(Staff),
    icon: "mdi:account-tie",
    title: "Manage staff information",
  },
  {
    label: "Students",
    component: markRaw(Students),
    icon: "mdi:account-check",
    title: "Manage student information",
  },
]);

const additionalLinks = ref([
  {
    label: "Help & Support",
    component: markRaw(HelpComponent),
    icon: "mdi:help-circle-outline",
    title: "Access help and support",
  },
  {
    label: "Settings",
    component: markRaw(SettingsComponent),
    icon: "mdi:cog-outline",
    title: "Change account settings",
  },
]);

const managementInfo = {
  name: "Elīna Bērziņa",
  email: "elina.berzina@example.com",
};

provideSidebar(
  sidebarLinks.value,
  additionalLinks.value,
  sidebarLinks.value[0].component,
  managementInfo
);

definePageMeta({
  layout: "nav",
  navigation: "management",
  enableScrollStyling: true,
});
</script>
