import { useLocalePath } from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Access the cookie using useCookie composable

  const localePath = useLocalePath();
  const cookie = useCookie("auth");

  // Check if the cookie exists and has a value
  if (cookie.value) {
    try {
      // Parse the cookie value if it's in JSON format
      const parsedCookie = await JSON.parse(
        cookie.value.startsWith("j:") ? cookie.value.slice(2) : cookie.value
      );
      const authStore = useAuthStore();
      await authStore.setUser(parsedCookie);
      return navigateTo(localePath("/guest"));
    } catch (e) {
      console.error("Error parsing cookie", e);
      return navigateTo(localePath("/"));
    }
  } else {
    console.log("Redirect to home");
    return navigateTo(localePath("/"));
  }
});
