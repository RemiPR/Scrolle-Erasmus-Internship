<template>
  <div :key="themeKey" @click="toggleThemeAndUpdate" class="cursor-pointer">
    Appearance: {{ isDark ? "Light" : "Dark" }}
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useThemeStore } from "@/stores/themeStore";

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
const themeKey = ref(0);

onMounted(() => {
  themeStore.initializeTheme();
});

function toggleThemeAndUpdate() {
  themeStore.toggleTheme();
  themeKey.value++; // Increment to force re-render
}
</script>
