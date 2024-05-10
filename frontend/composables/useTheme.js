// composables/useTheme.js
import { ref } from "vue";

const isTransitioning = ref(false);

export function useTheme() {
  const colorMode = useColorMode();

  function toggleTheme() {
    isTransitioning.value = true;
    colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";

    setTimeout(() => {
      isTransitioning.value = false;
    }, 600);
  }

  return {
    isTransitioning,
    colorMode,
    toggleTheme,
  };
}
