<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32">
      <h2 class="text-4xl font-bold mb-14">{{ $t("main_title") }}</h2>
      <DynamicTab :tabs="admissionTabs" />
    </main>
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import EntranceRequirements from "@/components/guest/admission/EntranceRequirements.vue";
import Permits from "@/components/guest/admission/visas/Permits.vue";
import Fees from "@/components/guest/admission/fees/Fees.vue";
import Application from "@/components/guest/admission/application/Application.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});

const admissionTabs = [
  {
    name: "entrance",
    label: t("admission_tabs.entrance_requirement_label"),
    component: EntranceRequirements,
  },
  {
    name: "visas",
    label: t("admission_tabs.visas_&_permits_label"),
    component: Permits,
  },
  {
    name: "fees",
    label: t("admission_tabs.fees_&_cost_label"),
    component: Fees,
  },
  {
    name: "application",
    label: t("admission_tabs.online_application_label"),
    component: Application,
  },
];
</script>
