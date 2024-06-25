<template>
  <div class="my-6">
    <DynamicTab :tabs="tabs" />
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import AssignmentsBuilder from "~/components/teacher/assignments/builder/Index.vue";
import CreatedAssignments from "@/components/teacher/assignments/created/index.vue";

const tabs = [
  {
    name: "builder",
    label: "Assignments Builder",
    component: AssignmentsBuilder,
  },
  {
    name: "assignments",
    label: "My Assignments",
    component: CreatedAssignments,
  },
];
</script>
