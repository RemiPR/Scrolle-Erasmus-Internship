<template>
  <label class="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      @change="toggleColorMode"
      :checked="isHydrated && colorMode === 'light'"
    />
    <div
      class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"
    >
      <span
        class="absolute inset-y-0.5 inset-x-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transition-all transform peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:bg-blue-600 peer-checked:text-yellow-300"
      >
        <Icon
          v-if="isHydrated && colorMode === 'light'"
          name="ph:sun-fill"
          class="transition-opacity duration-300"
          alt="Sun"
          aria-label="Switch to Dark Mode"
        />
        <Icon
          v-else
          name="ph:moon"
          class="transition-opacity duration-300"
          alt="Moon"
          aria-label="Switch to Light Mode"
        />
      </span>
    </div>
  </label>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const colorModeState = useColorMode();
const colorMode = computed(() => colorModeState.value);
const isHydrated = ref(false);

onMounted(() => {
  isHydrated.value = true;
});

function toggleColorMode() {
  colorModeState.preference =
    colorModeState.preference === "dark" ? "light" : "dark";
}
</script>

<style scoped>
/* Ensure smooth sliding effect for the toggle knob */
input[type="checkbox"] + div > span {
  position: absolute;
  inset: 0.125rem; /* inset-y and inset-x combined */
  width: 1.5rem; /* Make sure this matches your actual icon size */
  height: 1.5rem;
  background-color: #fff;
  border-radius: 9999px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="checkbox"]:checked + div > span {
  transform: translateX(1.75rem);
}
</style>
