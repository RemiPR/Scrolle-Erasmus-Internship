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
    async setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    },

    async loginGoogle(redirectPath, authBaseUrl) {
      try {
        await $fetch(`${authBaseUrl}/api/oauth/google`, {
          method: "POST",
          credentials: "include",
        });
      } catch (error) {
        if (error.data && error.status == 401) {
          this.clearUser();
        } else {
          console.error(error);
          this.clearUser();
        }
      }
    },

    async loginGuest(email, password, redirectPath, authBaseUrl) {
      try {
        // http request to login
        await $fetch(`${authBaseUrl}/api/auth/guest/loginUser`, {
          method: "POST",
          body: {
            email: email,
            password: password,
          },
          credentials: "include",
        });

        // retrieves cookie with user info, this one doesnt have JWT token.
        const userCookie = useCookie("auth").value;
        // might need to put this into a function later, could be reused
        if (userCookie) {
          const parsedUser = JSON.parse(
            userCookie.startsWith("j:") ? userCookie.slice(2) : userCookie
          );
          this.setUser(parsedUser); // sets isAuthenticated to true and stores user info in the same "auth" cookie
        }
        navigateTo(redirectPath);
      } catch (error) {
        if (error.data && error.status == 401) {
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
  },
});
