// useNavigation
import guest from "@/components/shared/nav/guest.vue";
import index from "@/components/shared/nav/index.vue";
import student from "@/components/shared/nav/student.vue";
import teacher from "@/components/shared/nav/teacher.vue";
import management from "@/components/shared/nav/management.vue";

export const useNavigation = (sidebarLinks) => {
  const route = useRoute();

  const navigationComponent = computed(() => {
    const navType = route.meta.navigation || "index";
    switch (navType) {
      case "guest":
        return guest;
      case "student":
        return student;
      case "teacher":
        return teacher;
      case "management":
        return management;
      case "index":
      default:
        return index;
    }
  });

  const enableScrollStyling = computed(() => route.meta.enableScrollStyling);

  return {
    navigationComponent,
    enableScrollStyling,
  };
};
