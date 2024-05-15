// useScrollPosition.js
import { ref, onMounted, onUnmounted } from "vue";

export const useScrollPosition = () => {
  const hasScrolled = ref(false);

  const isHydrated = ref(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 0) {
      hasScrolled.value = true;
    } else {
      hasScrolled.value = false;
    }
  };

  onMounted(() => {
    isHydrated.value = true;

    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    isHydrated.value = false;
    window.removeEventListener("scroll", handleScroll);
  });

  return { hasScrolled };
};
