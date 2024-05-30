<!-- components/VisasPermits.vue -->
<template>
  <div>
    <h2 class="text-4xl font-bold mt-10 mb-16">
      {{ $t("visas_and_permits_title") }}
    </h2>
    <SharedUiDynamicTab :tabs="visaTabs" />
  </div>
</template>

<script setup>
import EUPermit from "@/components/guest/admission/visas/EUPermit.vue";
import NonEUPermit from "@/components/guest/admission/visas/NonEUPermit.vue";
import VisaPermit from "@/components/guest/admission/visas/VisaPermit.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const visaTabs = [
  {
    name: "eu",
    label: t("visas_and_permits_tag_name_first"),
    component: EUPermit,
  },
  {
    name: "non-eu",
    label: t("visas_and_permits_tag_name_second"),
    component: NonEUPermit,
  },
  {
    name: "visa",
    label: t("visas_and_permits_tag_name_third"),
    component: VisaPermit,
  },
];
</script>
