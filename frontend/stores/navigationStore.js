// stores/navigationStore.js
import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    title: "",
  }),
  actions: {
    setTitle(title) {
      this.title = title;
    },
  },
});
