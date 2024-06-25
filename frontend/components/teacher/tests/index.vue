<template>
  <div class="my-6">
    <DynamicTab :tabs="tabs" />
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import TestsBuilder from "@/components/teacher/tests/builder/Index.vue";
import CreatedTests from "@/components/teacher/tests/created/Index.vue";

const tabs = [
  { name: "builder", label: "Tests Builder", component: TestsBuilder },
  { name: "tests", label: "My Tests", component: CreatedTests },
];
</script>
