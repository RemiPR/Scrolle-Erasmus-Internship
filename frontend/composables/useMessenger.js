import { ref, provide, inject } from "vue";

export const useMessenger = () => {
  const isMessengerOpen = ref(false);
  const selectedUser = ref(null);

  const toggleMessenger = () => {
    isMessengerOpen.value = !isMessengerOpen.value;
    // console.log("Messenger state:", isMessengerOpen.value);
  };
  const clearUser = () => {
    selectUser("");
  };
  const selectUser = (user) => {
    if (selectedUser.value && user.id === selectedUser.value.id) {
      // If the same user is clicked, close the chat window
      selectedUser.value = null;
      clearUser();
    } else {
      selectedUser.value = user;
      isMessengerOpen.value = true;
    }
    // console.log("Selected user:", selectedUser.value);
  };

  provide("isMessengerOpen", isMessengerOpen);
  provide("toggleMessenger", toggleMessenger);
  provide("selectedUser", selectedUser);
  provide("selectUser", selectUser);

  return {
    isMessengerOpen,
    toggleMessenger,
    selectedUser,
    selectUser,
  };
};

export const useMessengerState = () => {
  const isMessengerOpen = inject("isMessengerOpen");
  const toggleMessenger = inject("toggleMessenger");
  const selectedUser = inject("selectedUser");
  const selectUser = inject("selectUser");

  if (!isMessengerOpen || !toggleMessenger || !selectedUser || !selectUser) {
    throw new Error(
      "useMessengerState must be used within a component that calls useMessenger."
    );
  }

  return {
    isMessengerOpen,
    toggleMessenger,
    selectedUser,
    selectUser,
  };
};
