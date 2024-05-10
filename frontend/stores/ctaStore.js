// stores/ctaStore.js
import { defineStore } from "pinia";

export const useCtaStore = defineStore("cta", {
  state: () => ({
    email: "",
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
    clearEmail() {
      this.email = "";
    },
  },
});
