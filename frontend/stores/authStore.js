import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  persist: true,
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
  },
  actions: {
    setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    },
    async loginGuest(email, password, redirectPath, authBaseUrl) {
      try {
        const response = await $fetch(
          `${authBaseUrl}/api/auth/guest/loginUser`,
          {
            method: "POST",
            body: {
              email: email,
              password: password,
            },
            credentials: "include",
          }
        );
        console.log(response);
        this.setUser(response.user);
        console.log("SetUser is done running");
        navigateTo(redirectPath);
      } catch (error) {
        if (error.data && error.status == 401) {
          console.log("Login failed:", error.data.message);
          this.clearUser();
        } else {
          this.clearUser();
          console.error(error);
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
  },
});
