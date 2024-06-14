// stores/dashboardStore.js
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("component", {
  state: () => ({
    activeComponent: null,
  }),
  actions: {
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
});
