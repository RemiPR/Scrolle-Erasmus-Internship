<template>
  <div
    class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-screen"
  >
    <div class="flex-grow overflow-y-auto px-4 py-5 sm:p-6">
      <div class="space-y-4">
        <!-- Messages -->
        <div
          v-for="(message, index) in messages"
          :key="message.id"
          class="flex"
          :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
          @mouseover="message.showActions = true"
          @mouseleave="message.showActions = false"
        >
          <div class="flex items-start">
            <div
              v-if="
                message.sender !== 'user' &&
                (index === 0 || messages[index - 1].sender !== message.sender)
              "
              class="w-9 h-9 rounded-full mr-2 flex items-center justify-center mt-6"
            >
              <img
                :src="message.avatar"
                alt="Avatar"
                class="w-full h-full rounded-full"
              />
            </div>
            <div class="relative">
              <div
                v-if="
                  (message.sender !== 'user' &&
                    (index === 0 ||
                      messages[index - 1].sender !== message.sender)) ||
                  (message.sender === 'user' &&
                    (index === 0 || messages[index - 1].sender !== 'user'))
                "
                class="text-xs text-gray-500 mb-1"
              >
                {{
                  message.sender === "user"
                    ? formatTimestamp(message.timestamp)
                    : message.sender +
                      " • " +
                      formatTimestamp(message.timestamp)
                }}
              </div>
              <div
                :class="
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                "
                class="px-4 py-2 rounded-lg inline-block max-w-xs"
              >
                <span>{{ message.text }}</span>
                <span v-if="message.selectedEmoji" class="ml-2">{{
                  message.selectedEmoji
                }}</span>
              </div>
              <transition name="fade">
                <div
                  v-if="message.showActions"
                  class="absolute -top-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex items-center"
                  :class="message.sender === 'user' ? 'right-0' : 'left-0'"
                >
                  <button
                    class="text-xl focus:outline-none mx-1"
                    @click="reactToMessage(message, 'thumbsUp')"
                  >
                    👍
                  </button>
                  <button
                    class="text-xl focus:outline-none mx-1"
                    @click="reactToMessage(message, 'heart')"
                  >
                    ❤️
                  </button>
                  <button
                    class="text-xl focus:outline-none mx-1"
                    @click="reactToMessage(message, 'laugh')"
                  >
                    😂
                  </button>
                  <button
                    class="text-xl focus:outline-none mx-1"
                    @click="reactToMessage(message, 'shocked')"
                  >
                    😲
                  </button>
                  <button
                    class="text-xl focus:outline-none mx-1"
                    @click="openEmojiPicker(message)"
                  >
                    😀
                  </button>
                </div>
              </transition>
              <div
                v-if="message.showEmojiPicker"
                v-click-outside="() => closeEmojiPicker(message)"
              >
                <EmojiPicker
                  class="absolute transform -translate-y-full -mt-10"
                  :class="message.sender === 'user' ? 'right-0' : 'left-0'"
                  @select="(emoji) => selectEmoji(message, emoji)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SharedUserMessengerInput ref="inputField" @send="sendMessage" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Fuse from "fuse.js";
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";
import clickOutside from "@/composables/clickOutside";

const inputField = ref(null);

// Predefined questions and answers provided by teachers
const qaPairs = [
  {
    question: "Who are the programmers working on Scrolle project?",
    answer:
      "Mudassir Arafat, Dainius Juška, Deividas Litvinenko and Remigijus Prialgauskis.",
  },
  // Add more questions and answers here
];

const messages = ref([
  {
    id: 1,
    text: "Hello! How can I assist you today?",
    sender: "Scrolle Assistant",
    showActions: false,
    showEmojiPicker: false,
    selectedEmoji: null,
    avatar: "/lecturer_avatar.png",
    timestamp: new Date(),
  },
]);

// Initialize Fuse.js for fuzzy searching
const fuse = new Fuse(qaPairs, {
  keys: ["question"],
  threshold: 0.4, // Adjust threshold for sensitivity
});

const findAnswer = (question) => {
  const result = fuse.search(question);
  if (result.length > 0) {
    return result[0].item.answer;
  }
  return null; // Return null if no predefined answer is found
};

const sendMessage = async () => {
  const userInput = inputField.value.userInput;
  if (!userInput) return;

  const question = userInput;
  let answer = findAnswer(question);

  // Add user message to the conversation
  messages.value.push({
    id: Date.now(),
    text: userInput,
    sender: "user",
    showActions: false,
    showEmojiPicker: false,
    selectedEmoji: null,
    timestamp: new Date(),
  });

  if (answer) {
    // If a predefined answer is found, use it
    messages.value.push({
      id: Date.now(),
      text: answer,
      sender: "Scrolle Assistant",
      showActions: false,
      showEmojiPicker: false,
      selectedEmoji: null,
      avatar: "/lecturer_avatar.png",
      timestamp: new Date(),
    });
  } else {
    // If no predefined answer is found, use the OpenAI API
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: question }],
          max_tokens: 100,
          stop: [".", "!", "?"],
        },
        {
          headers: {
            Authorization: `Bearer API_KEY`,
            "Content-Type": "application/json",
          },
        }
      );

      // Add bot response to the conversation
      const answer = response.data.choices[0].message.content.trim();
      messages.value.push({
        id: Date.now(),
        text: answer,
        sender: "Scrolle Assistant",
        showActions: false,
        showEmojiPicker: false,
        selectedEmoji: null,
        avatar: "/lecturer_avatar.png",
        timestamp: new Date(),
      });
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.warn("Rate limit hit, please wait.");
        messages.value.push({
          id: Date.now(),
          text: "Rate limit hit, please wait a moment and try again.",
          sender: "Scrolle Assistant",
          showActions: false,
          showEmojiPicker: false,
          selectedEmoji: null,
          avatar: "/lecturer_avatar.png",
          timestamp: new Date(),
        });
      } else {
        console.error("Error fetching from OpenAI", error);
        messages.value.push({
          id: Date.now(),
          text: "There was an error processing your request. Please try again later.",
          sender: "Scrolle Assistant",
          showActions: false,
          showEmojiPicker: false,
          selectedEmoji: null,
          avatar: "/lecturer_avatar.png",
          timestamp: new Date(),
        });
      }
    }
  }

  // Clear user input
  inputField.value.userInput = "";
};

const clearMessages = () => {
  messages.value = [
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      sender: "Scrolle Assistant",
      showActions: false,
      showEmojiPicker: false,
      selectedEmoji: null,
      avatar: "/lecturer_avatar.png",
      timestamp: new Date(),
    },
  ];
};

const formatTimestamp = (timestamp) => {
  const now = new Date();
  const diffInDays = (now - timestamp) / (1000 * 60 * 60 * 24);

  if (diffInDays < 1) {
    return timestamp.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } else if (diffInDays < 7) {
    return timestamp.toLocaleDateString([], { weekday: "long" });
  } else {
    return timestamp.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }
};

const reactToMessage = (message, reaction) => {
  // Handle message reaction logic here
  console.log(`Reacted to message ${message.id} with ${reaction}`);
};

const openEmojiPicker = (message) => {
  message.showEmojiPicker = !message.showEmojiPicker;
};

const selectEmoji = (message, emoji) => {
  message.selectedEmoji = emoji;
  message.showEmojiPicker = false;
};

const closeEmojiPicker = (message) => {
  message.showEmojiPicker = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
