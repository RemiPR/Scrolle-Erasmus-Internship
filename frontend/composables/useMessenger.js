import { ref, provide, inject } from "vue";

export const useMessenger = () => {
  const isMessengerOpen = ref(false);
  const selectedUser = ref(null);

  const toggleMessenger = () => {
    isMessengerOpen.value = !isMessengerOpen.value;
    if (!isMessengerOpen.value) {
      selectedUser.value = null;
    }
  };

  const selectUser = (user) => {
    if (selectedUser.value && user.id === selectedUser.value.id) {
      // If the same user is clicked, close the chat window
      selectedUser.value = null;
    } else {
      selectedUser.value = user;
      isMessengerOpen.value = true;
    }
  };

  const closeChat = () => {
    selectedUser.value = null;
  };

  provide("isMessengerOpen", isMessengerOpen);
  provide("toggleMessenger", toggleMessenger);
  provide("selectedUser", selectedUser);
  provide("selectUser", selectUser);
  provide("closeChat", closeChat);

  return {
    isMessengerOpen,
    toggleMessenger,
    selectedUser,
    selectUser,
    closeChat,
  };
};

export const useMessengerState = () => {
  const isMessengerOpen = inject("isMessengerOpen");
  const toggleMessenger = inject("toggleMessenger");
  const selectedUser = inject("selectedUser");
  const selectUser = inject("selectUser");
  const closeChat = inject("closeChat");

  return {
    isMessengerOpen,
    toggleMessenger,
    selectedUser,
    selectUser,
    closeChat,
  };
};
