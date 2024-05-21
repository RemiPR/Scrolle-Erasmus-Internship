import { useLocalePath } from "#imports";
import { useAuthStore } from "@/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath();
  const authStore = useAuthStore();

  //console.log("Auth middleware is ran, value is:", authStore.isAuthenticated);
  if (!authStore.isAuthenticated && to.path !== localePath("/login")) {
    return navigateTo(localePath("/login"));
  }
});
