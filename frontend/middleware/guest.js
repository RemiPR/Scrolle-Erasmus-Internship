import { useLocalePath } from "#imports";
import { useAuthStore } from "@/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath();
  const authStore = useAuthStore();

  //console.log("Guest middleware is ran, value is:", authStore.user.type);
  if (authStore.user.type != "UserGuest") {
    return navigateTo(localePath("/login"));
  }
});
