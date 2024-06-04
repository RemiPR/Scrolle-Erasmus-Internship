import { defineStore } from "pinia";

export const useMessengerStore = defineStore("messenger", {
  state: () => ({
    isMessengerOpen: false,
    selectedUser: null,
  }),
  actions: {
    toggleMessenger() {
      this.isMessengerOpen = !this.isMessengerOpen;
      if (!this.isMessengerOpen) {
        this.selectedUser = null;
      }
    },
    selectUser(user) {
      if (this.selectedUser && user.id === this.selectedUser.id) {
        // If the same user is clicked, close the chat window
        this.selectedUser = null;
      } else {
        this.selectedUser = user;
        this.isMessengerOpen = true;
      }
    },
    closeChat() {
      this.selectedUser = null;
    },
    closeMessenger() {
      this.isMessengerOpen = false;
      this.selectedUser = null;
    },
  },
});
