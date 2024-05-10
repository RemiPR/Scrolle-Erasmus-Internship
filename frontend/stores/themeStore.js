// stores/themeStore.js
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isTransitioning: false,
  }),
  actions: {
    startTransition() {
      this.isTransitioning = true;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 600); // Adjust duration as per the CSS animation
    },
  },
});
