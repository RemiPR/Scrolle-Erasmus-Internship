<template>
  <div :key="forceUpdate" @click="toggleTheme" class="cursor-pointer">
    Appearance: {{ isDark ? "Light" : "Dark" }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useThemeStore } from "@/stores/themeStore";
const { isDark, toggleTheme, initializeTheme } = useThemeStore();

const forceUpdate = ref(0);

onMounted(() => {
  initializeTheme();
});

function toggleThemeAndUpdate() {
  toggleTheme();
  forceUpdate.value++; // Increment to force re-render
}
</script>
