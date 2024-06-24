<template>
  <div class="my-6">
    <DynamicTab :tabs="tabs" />
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import MyGroups from "@/components/teacher/groups/my/index.vue";
import AllGroups from "@/components/teacher/groups/all/index.vue";

const tabs = [
  {
    name: "myGroups",
    label: "My Groups",
    component: MyGroups,
  },
  {
    name: "allGroups",
    label: "All Groups",
    component: AllGroups,
  },
];
</script>
