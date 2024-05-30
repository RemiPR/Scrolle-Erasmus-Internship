// composables/useMessenger.js

import { ref, provide, inject } from "vue";

export const useMessenger = () => {
  const isMessengerOpen = ref(false);

  const toggleMessenger = () => {
    isMessengerOpen.value = !isMessengerOpen.value;
    console.log("Messenger state:", isMessengerOpen.value);
  };

  provide("isMessengerOpen", isMessengerOpen);
  provide("toggleMessenger", toggleMessenger);

  return {
    isMessengerOpen,
    toggleMessenger,
  };
};

export const useMessengerState = () => {
  const isMessengerOpen = inject("isMessengerOpen");
  const toggleMessenger = inject("toggleMessenger");

  if (!isMessengerOpen || !toggleMessenger) {
    throw new Error(
      "useMessengerState must be used within a component that calls useMessenger."
    );
  }

  return {
    isMessengerOpen,
    toggleMessenger,
  };
};
