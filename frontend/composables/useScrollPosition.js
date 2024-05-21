// useScrollPosition.js

export const useScrollPosition = () => {
  const hasScrolled = ref(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      hasScrolled.value = true;
    } else {
      hasScrolled.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { hasScrolled };
};
