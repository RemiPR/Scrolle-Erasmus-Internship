<!-- components/ColorModeToggle.vue -->
<template>
  <button
    @click="toggleColorMode"
    class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded focus:outline-none focus:ring"
  >
    <span v-if="colorMode === 'dark'" aria-label="Switch to Light Mode"
      >🌞</span
    >
    <span v-else aria-label="Switch to Dark Mode">🌜</span>
  </button>
</template>

<script setup>
const colorModeState = useColorMode();

const colorMode = computed(() => colorModeState.value);

function toggleColorMode() {
  colorModeState.preference =
    colorModeState.preference === "dark" ? "light" : "dark";
}
</script>
