<template>
  <div @click="toggleThemeAndUpdate" class="flex items-center cursor-pointer">
    <Icon
      :name="isDark ? 'ph:moon' : 'ph:sun-fill'"
      class="h-5 w-5 mr-2 text-gray-400"
    />
    <span :key="themeKey">Appearance: {{ isDark ? "Dark" : "Light" }}</span>
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
