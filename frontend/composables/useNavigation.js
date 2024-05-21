import { computed } from "vue";
import { useRoute } from "vue-router";
import GuestNav from "@/components/global/nav/GuestNav.vue";
import IndexNav from "@/components/global/nav/IndexNav.vue";

export const useNavigation = () => {
  const route = useRoute();

  const navigationComponent = computed(() => {
    const navType = route.meta.navigation || "index";
    switch (navType) {
      case "guest":
        return GuestNav;
      case "index":
      default:
        return IndexNav;
    }
  });

  const enableScrollStyling = computed(() => route.meta.enableScrollStyling);

  return {
    navigationComponent,
    enableScrollStyling,
  };
};
