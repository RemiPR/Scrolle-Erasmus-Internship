<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-10">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32">
      <h2 class="text-3xl font-bold mt-10 mb-16">
        Which year's grades would you like to see?
      </h2>
      <DynamicTab :tabs="newTabs" />
    </main>
  </div>
</template>

<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import FirstYear from "@/components/guest/myCourses/grades/FirstYear.vue";
import SecondYear from "@/components/guest/myCourses/grades/SecondYear.vue";
import ThirdYear from "@/components/guest/myCourses/grades/ThirdYear.vue";
import FourthYear from "@/components/guest/myCourses/grades/FourthYear.vue";
const newTabs = [
  {
    name: "course info",
    label: "First year",
    component: FirstYear,
  },
  {
    name: "current assignments",
    label: "Second year",
    component: SecondYear,
  },
  {
    name: "grades",
    label: "Third year",
    component: ThirdYear,
  },
  {
    name: "lecturer contacts",
    label: "Fourth year",
    component: FourthYear,
  },
];
</script>
