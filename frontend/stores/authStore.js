import { defineStore } from "pinia";
import { useLocalePath } from "#imports";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  persist: true,
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
    isConfirmed: (state) => !!state.user?.isConfirmed,
    getEnrolledCourses: (state) => !!state.user?.enrolledCourses,
  },
  actions: {
    async setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    },
    // guest section -----------------------
    async addPersonalInfo(form, authBaseUrl) {
      try {
        await $fetch(`/api/auth/guest/addPersonalInfo`, {
          method: "POST",
          body: {
            name: form.value.firstName,
            surname: form.value.lastName,
            country: form.value.country,
            phoneNumber: form.value.phone,
            birth: form.value.dob,
            education: form.value.education,
            reason: form.value.reason,
          },
          baseURL: authBaseUrl,
          credentials: "include",
        });
        this.user.isConfirmed = true;
      } catch (error) {
        console.error(error);
      }
    },

    async refreshToken(authBaseUrl) {
      const { toLogin } = useRedirectPath();
      try {
        await $fetch(`/api/auth/guest/refresh`, {
          method: "POST",
          credentials: "include",
          baseURL: authBaseUrl,
        });
      } catch (error) {
        this.clearUser();
        navigateTo(toLogin);
      }
    },

    async loginGuest(email, password, redirectPath, authBaseUrl) {
      const { parseAuthCookie } = useAuth();
      try {
        // http request to login
        await $fetch(`/api/auth/guest/login`, {
          method: "POST",
          baseURL: authBaseUrl,
          body: {
            email,
            password,
          },
          credentials: "include",
        });

        const user = await parseAuthCookie();
        await this.setUser(user);
        navigateTo(redirectPath);
      } catch (error) {
        if (error.data && error.status === 401) {
          this.clearUser();
        } else {
          console.error(error);
          this.clearUser();
        }
      }
    },
    // TODO: clear all cookies
    async logoutGuest(redirectPath, authBaseUrl) {
      try {
        await $fetch(`/api/auth/guest/logout`, {
          method: "POST",
          baseURL: authBaseUrl,
        });
        this.clearUser();
        navigateTo(redirectPath);
      } catch (error) {
        throw error;
      }
    },
    // organisation section -----------------------
    async loginOrg(email, password, authBaseUrl) {
      const { parseAuthCookie } = useAuth();
      const localePath = useLocalePath();
      try {
        // http request to login
        await $fetch(`/api/auth/organisation/login`, {
          method: "POST",
          baseURL: authBaseUrl,
          body: {
            email,
            password,
          },
          credentials: "include",
        });

        const user = await parseAuthCookie();
        this.setUser(user);
        switch (user.type) {
          case "Teacher":
            navigateTo(localePath("/teacher"));
            break;
          default:
            this.clearUser();
            navigateTo(localePath("/"));
        }
        navigateTo(localePath("/teacher"));
      } catch (error) {
        if (error.data && error.status === 401) {
          this.clearUser();
        } else {
          console.error(error);
          this.clearUser();
        }
      }
    },

    // common section -----------------------
    enrollCourse(courseId) {
      if (!this.user.enrolledCourses.includes(courseId)) {
        this.user.enrolledCourses.push(courseId);
      }
    },
  },
});
