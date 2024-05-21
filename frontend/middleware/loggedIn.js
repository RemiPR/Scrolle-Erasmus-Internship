import { useLocalePath } from "#imports";
import { useAuthStore } from "@/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath();
  const authStore = useAuthStore();

  try {
    if (authStore.isAuthenticated) {
      const userType = !!authStore.user.type;
      if (userType) {
        switch (authStore.user.type) {
          case "UserGuest":
            return navigateTo(localePath("/guest"));
          case "UserStudent":
            return navigateTo(localePath("/student"));
          case "null":
          default:
            return navigateTo(localePath("/"));
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});
