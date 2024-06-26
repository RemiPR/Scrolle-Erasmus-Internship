<template>
  <label
    class="flex items-center space-x-2 cursor-pointer select-none rounded-full"
  >
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      @change="toggleColorMode"
      :checked="isHydrated && colorMode === 'light'"
    />
    <div
      class="relative w-16 h-8 peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:bg-gray-400 border border-transparent hover:border-blue-400"
    >
      <span
        class="absolute inset-y-0 inset-x-0 flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-md transition-all transform peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
      >
        <Icon
          v-if="isHydrated && colorMode === 'light'"
          name="ph:sun-fill"
          class="transition-opacity duration-300 sun-icon text-yellow-300"
          alt="Sun"
          aria-label="Switch to Dark Mode"
        />
        <Icon
          v-else
          name="ph:moon"
          class="transition-opacity duration-300 moon-icon text-white"
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
  document.documentElement.classList.add("color-transition");
  colorModeState.preference =
    colorModeState.preference === "dark" ? "light" : "dark";
  setTimeout(() => {
    document.documentElement.classList.remove("color-transition");
  }, 300); // This duration should match the CSS transition duration
}
</script>

<style scoped>
/* Separate styles for the sun and moon outlines */
input[type="checkbox"] + div > span {
  position: absolute;
  inset: 0.125rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Transform effect for the checked state */
input[type="checkbox"]:checked + div > span {
  transform: translateX(1.75rem);
}

/* Outline styles for sun and moon icons */
input[type="checkbox"]:has(~ div > span > .sun-icon) + div > span {
  background-color: white;
}

input[type="checkbox"]:has(~ div > span > .moon-icon) + div > span {
  background-color: black;
}
.sun-icon,
.moon-icon {
  transition: opacity 0.3s ease;
}
</style>
