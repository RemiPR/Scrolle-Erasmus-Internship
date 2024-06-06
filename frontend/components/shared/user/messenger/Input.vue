<template>
  <div class="bg-gray-100 px-4 py-4 flex items-center flex-shrink-0">
    <input
      v-model="userInput"
      @keyup.enter="sendMessage"
      placeholder="Type your message..."
      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
    />
    <button
      @click="sendMessage"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userInput = ref("");
const emit = defineEmits(["send"]);

const sendMessage = () => {
  if (userInput.value.trim() !== "") {
    emit("send", userInput.value);
    userInput.value = "";
  }
};

defineExpose({ userInput });
</script>
