import { useLocalePath } from "#imports";
import { useAuthStore } from "@/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath();
  const authStore = useAuthStore();

  try {
    if (!authStore.isAuthenticated && to.path !== localePath("/login")) {
      return navigateTo(localePath("/login"));
    }
  } catch (error) {
    console.log(errpr);
  }
});
