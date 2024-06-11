import { useLocalePath } from "#imports";

export const useRedirectPath = () => {
  const localePath = useLocalePath();

  const toLogin = computed(() => localePath("/login"));

  return {
    toLogin: toLogin.value,
  };
};
