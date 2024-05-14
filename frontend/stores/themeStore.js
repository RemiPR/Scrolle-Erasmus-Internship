// themeStore.js
import { defineStore } from "pinia";
import { nextTick } from "vue";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isDark: false,
  }),
  actions: {
    initializeTheme() {
      if (typeof window !== "undefined") {
        this.isDark =
          window.document.documentElement.classList.contains("dark");
      }
    },
    async toggleTheme() {
      this.isDark = !this.isDark;
      if (typeof window !== "undefined") {
        window.document.documentElement.classList.toggle("dark", this.isDark);
        await nextTick(); // Ensures UI updates happen immediately after state change
      }
    },
  },
});
