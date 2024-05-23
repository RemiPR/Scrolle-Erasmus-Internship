<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32">
      <h2 class="text-4xl font-bold mb-14">Admission</h2>
      <DynamicTab :tabs="admissionTabs" />
    </main>
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import EntranceRequirements from "@/components/guest/admission/EntranceRequirements.vue";
import Permits from "@/components/guest/admission/visas/Permits.vue";
import Fees from "@/components/guest/admission/fees/Fees.vue";
import Application from "@/components/guest/admission/Application/Application.vue";

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
  { name: "visas", label: "Visas & Permits", component: Permits },
  { name: "fees", label: "Fees & Cost", component: Fees },
  {
    name: "application",
    label: "Start Online Application",
    component: Application,
  },
];
</script>
