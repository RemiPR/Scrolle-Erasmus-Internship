<template>
  <div class="my-6">
    <DynamicTab :tabs="tabs" />
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import AllGroups from "@/components/teacher/groups/all/Index.vue";

const tabs = [
  {
    name: "myGroups",
    label: "My Groups",
    component: AllGroups,
  },
  {
    name: "allGroups",
    label: "All Groups",
    component: AllGroups,
  },
];
</script>
