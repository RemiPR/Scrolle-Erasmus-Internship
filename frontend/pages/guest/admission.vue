<template>
  <div class="px-4 bg-white dark:bg-gray-800 mt-20">
    <main class="text-center text-black dark:text-white w-3/5 mx-auto pb-32">
      <h1 class="text-4xl font-bold mb-14 mt-32">Admission</h1>
      <Tab :tabs="admissionTabs" />
    </main>
  </div>
</template>

<script setup>
import Tab from "@/components/shared/tabs/Tab.vue";
import EntranceRequirements from "@/components/guest/admission/EntranceRequirements.vue";
import VisasPermits from "@/components/guest/admission/VisasPermits.vue";
import Fees from "@/components/guest/admission/Fees.vue";
import Application from "@/components/guest/admission/Application.vue";

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});

const admissionTabs = [
  {
    name: "entrance",
    label: "Entrance Requirements",
    component: EntranceRequirements,
  },
  { name: "visas", label: "Visas & Permits", component: VisasPermits },
  { name: "fees", label: "Fees & Cost", component: Fees },
  {
    name: "application",
    label: "Start Online Application",
    component: Application,
  },
];
</script>
