<template>
  <div>
    <component
      :is="navigationComponent"
      :enableScrollStyling="enableScrollStyling"
    />
  </div>
</template>

<script setup>
import { useNavigation } from "@/composables/useNavigation";

const { navigationComponent, enableScrollStyling } = useNavigation();
</script>
