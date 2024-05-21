import Guest from "@/components/global/nav/Guest.vue";
import Index from "@/components/global/nav/Index.vue";

export const useNavigation = () => {
  const route = useRoute();

  const navigationComponent = computed(() => {
    const navType = route.meta.navigation || "index";
    switch (navType) {
      case "guest":
        return Guest;
      case "index":
      default:
        return Index;
    }
  });

  const enableScrollStyling = computed(() => route.meta.enableScrollStyling);

  return {
    navigationComponent,
    enableScrollStyling,
  };
};
