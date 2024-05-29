<template>
  <div>
    <h2 class="text-4xl font-bold mt-10 mb-16">
      {{ $t("fees_and_costs_title") }}
    </h2>
    <SharedUiDynamicTab :tabs="feesTabs" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"; // Import useI18n
import TuitionFees from "@/components/guest/admission/fees/TuitionFees.vue";
import ApplicationFees from "@/components/guest/admission/fees/ApplicationFees.vue";

const { t } = useI18n(); // Access the translation function through useI18n

const feesTabs = [
  {
    name: "tuitionFees",
    label: t("tuition_tab_name"), // Use t function to translate
    component: TuitionFees,
  },
  {
    name: "applicationFees",
    label: t("application_tab_name"), // Translate other tabs if needed
    component: ApplicationFees,
  },
];
</script>
