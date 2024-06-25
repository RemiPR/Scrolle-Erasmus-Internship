// useNavigation
import Guest from "@/components/global/nav/guest.vue";
import Index from "@/components/global/nav/index.vue";
import Student from "@/components/global/nav/student.vue";
import Teacher from "@/components/global/nav/teacher.vue";
import Management from "@/components/global/nav/management.vue";

export const useNavigation = (sidebarLinks) => {
  const route = useRoute();

  const navigationComponent = computed(() => {
    const navType = route.meta.navigation || "index";
    switch (navType) {
      case "guest":
        return Guest;
      case "student":
        return Student;
      case "teacher":
        return Teacher;
      case "management":
        return Management;
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
