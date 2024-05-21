<!-- components/VisasPermits.vue -->
<template>
  <div>
    <h2 class="text-4xl font-bold mt-10 mb-16">
      Useful information before you go
    </h2>
    <SharedTabsTab :tabs="visaTabs" />
  </div>
</template>

<script setup>
import EUPermit from "@/components/guest/admission/visas/EUPermit.vue";
import NonEUPermit from "@/components/guest/admission/visas/NonEUPermit.vue";
import VisaPermit from "@/components/guest/admission/visas/VisaPermit.vue";
const visaTabs = [
  {
    name: "eu",
    label: "EU, EEA/Switzerland citizens",
    component: EUPermit,
  },
  {
    name: "non-eu",
    label: "NON-EU nationals",
    component: NonEUPermit,
  },
  {
    name: "visa",
    label: "Visas countries",
    component: VisaPermit,
  },
];
</script>
