<template>
<div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32 mx">
      <h2 class="text-4xl font-bold mb-14">Frequently Asked Questions</h2>
      <DynamicTab :tabs="faqTypeTabs" />
    </main>
  </div>
</template>
<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import SharedUiFaq from "@/components/shared/ui/faq.vue";

const faqTypeTabs = [
  {
    name: "freecourses",
    label: "About free online courses",
    component: SharedUiFaq,
  },
  {
    name: "admission",
    label: "About admission",
    //component: EntranceRequirements,
  },
];
</script>
