<!-- components/VisasPermits.vue -->
<template>
  <div>
    <h2 class="text-4xl font-bold mt-10 mb-16">
      Useful information before you go
    </h2>
    <SharedUiDynamicTab :tabs="feesTabs" />
  </div>
</template>

<script setup>
import TuitionFees from "@/components/guest/admission/fees/TuitionFees.vue";
import ApplicationFees from "@/components/guest/admission/fees/ApplicationFees.vue";
const feesTabs = [
  {
    name: "tuitionFees",
    label: "Tuition Fees",
    component: TuitionFees,
  },
  {
    name: "applicationFees",
    label: "Application Fees",
    component: ApplicationFees,
  },
];
</script>
