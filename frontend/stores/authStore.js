import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
    enrolledCourses: [],
  }),
  persist: true,
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
    hasCompletedEnrollment: (state) => !!state.user?.completedEnrollment,
    getEnrolledCourses: (state) => state.enrolledCourses,
  },
  actions: {
    async setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
      this.enrolledCourses = [];
    },
    async loginGuest(email, password, redirectPath, authBaseUrl) {
      try {
        // http request to login
        await $fetch(`${authBaseUrl}/api/auth/guest/loginUser`, {
          method: "POST",
          body: {
            email,
            password,
          },
          credentials: "include",
        });

        // retrieves cookie with user info, this one doesn't have JWT token.
        const userCookie = useCookie("auth").value;
        if (userCookie) {
          const parsedUser = JSON.parse(
            userCookie.startsWith("j:") ? userCookie.slice(2) : userCookie
          );
          this.setUser(parsedUser);
        }
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
    async logoutGuest(redirectPath, authBaseUrl) {
      try {
        await $fetch(`${authBaseUrl}/api/auth/guest/logoutUser`, {
          method: "POST",
        });
        this.clearUser();
        navigateTo(redirectPath);
      } catch (error) {
        throw error;
      }
    },
    enrollCourse(courseId) {
      if (!this.enrolledCourses.includes(courseId)) {
        this.enrolledCourses.push(courseId);
      }
    },
  },
});
