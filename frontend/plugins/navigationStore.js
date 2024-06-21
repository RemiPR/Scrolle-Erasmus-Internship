// plugins/navigationStore.js
import { defineNuxtPlugin } from "#imports";
import { useNavigationStore } from "@/stores/navigationStore";

export default defineNuxtPlugin(({ store }) => {
  const navigationStore = useNavigationStore(store);
  navigationStore.setTitle("");
});
