<template>
  <div>
    <component :is="navigationComponent" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import GuestNav from "@/components/global/nav/GuestNav.vue";
import IndexNav from "@/components/global/nav/IndexNav.vue";

// Access the current route
const route = useRoute();

// Define the navigation component based on the route metadata
const navigationComponent = computed(() => {
  const navType = route.meta.navigation || "index";

  switch (navType) {
    case "guest":
      return GuestNav;
    case "index":
    default:
      return IndexNav;
  }
});
</script>
