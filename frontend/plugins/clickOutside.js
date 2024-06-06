// plugins/clickOutside.js
import { defineNuxtPlugin } from "#app";
import clickOutside from "@/composables/clickOutside";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el, binding) {
      clickOutside(el, binding.value);
    },
    unmounted(el) {
      removeClickOutside(el);
    },
  });
});
