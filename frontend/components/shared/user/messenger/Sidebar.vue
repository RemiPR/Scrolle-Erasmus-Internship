<template>
  <div class="flex">
    <!-- Main Sidebar Container -->
    <div
      ref="sidebar"
      class="fixed top-24 right-0 h-[calc(100%-7rem)] bg-white shadow-lg z-40 mr-4 transition-all duration-700 rounded-lg"
      :class="{
        'translate-x-full': !messengerStore.isMessengerOpen,
      }"
      :style="{ width: messengerStore.selectedUser ? '60rem' : '22.5rem' }"
    >
      <div class="flex w-full">
        <!-- User List -->
        <div
          class="w-96 flex-shrink-0 flex flex-col border-r border-gray-200 bg-gray-200 pb-2"
          style="height: calc(100vh - 7rem)"
        >
          <div class="p-4 flex-shrink-0">
            <h2 class="text-2xl text-gray-700 font-semibold mb-4">Chats</h2>
            <div class="relative mb-2 w-full">
              <svg
                class="absolute left-3 top-3 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.95 1.8l4.75 4.75a1 1 0 01-1.415 1.414l-4.75-4.75A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Messenger"
                class="w-full pl-10 py-2 rounded-full bg-gray-100 text-gray-600 focus:outline-none focus:bg-white focus:shadow-md select-none"
              />
            </div>
          </div>
          <div class="flex-grow overflow-hidden hover:overflow-y-scroll">
            <!-- ChatBot user -->
            <div
              class="flex items-center p-2 ml-4 hover:bg-gray-100 transition-colors duration-200 cursor-pointer select-none"
              @click="selectChatbotUser"
            >
              <Icon
                :name="chatbotUser.avatar"
                alt="Chatbot avatar"
                class="rounded-full w-10 h-10 mr-4"
              />
              <div class="flex-1">
                <p class="text-gray-900 font-semibold">
                  {{ chatbotUser.name }}
                </p>
                <div class="flex items-center text-gray-500 text-sm">
                  <p class="truncate">{{ chatbotUser.lastMessage }}</p>
                </div>
              </div>
            </div>
            <!-- Other users -->

            <div
              v-for="user in users"
              :key="user.id"
              class="flex items-center p-2 ml-4 hover:bg-gray-100 transition-colors duration-200 cursor-pointer select-none"
              @click="messengerStore.selectUser(user)"
            >
              <Icon
                :name="user.avatar"
                alt="User avatar"
                class="rounded-full w-10 h-10 mr-4"
              />
              <div class="flex-1">
                <p class="text-gray-900 font-semibold">{{ user.name }}</p>
                <div class="flex items-center text-gray-500 text-sm">
                  <p class="truncate">{{ user.lastMessage }}</p>
                  <span class="mx-1">&middot;</span>
                  <p>{{ user.lastMessageDate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat window -->
        <div
          v-if="messengerStore.selectedUser"
          class="flex-1 bg-white shadow-lg p-4 overflow-hidden hover:overflow-y-scroll"
          style="height: calc(100vh - 7rem)"
        >
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl text-gray-700 font-semibold">
              {{ messengerStore.selectedUser.name }}
            </h2>
            <button
              @click="messengerStore.closeChat"
              class="text-gray-500 hover:text-gray-700 select-none close-chat-button"
            >
              Close
            </button>
          </div>
          <!-- Chat content here -->
          <div>
            <StudentChatBot
              :is="messengerStore.selectedUser.component"
              v-if="messengerStore.selectedUser.id === 'chatbot'"
            ></StudentChatBot>
            <p v-else>{{ messengerStore.selectedUser.chat }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMessengerStore } from "@/stores/messenger";
import clickOutside, { removeClickOutside } from "@/composables/clickOutside";
const sidebar = ref(null);
const messengerIcon = inject("messengerIcon");

const messengerStore = useMessengerStore();
const { isMessengerOpen, selectedUser, selectUser, closeChat } = messengerStore;

const chatbotUser = ref({
  id: "chatbot",
  name: "Scrolle Assistant",
  avatar: "hugeicons:chat-bot",
  lastMessage: "Ask me anything...",
  lastMessageDate: "",
});

const users = ref([
  {
    id: 1,
    name: "Mudassir Arafat",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "You're now chatting with Mudassir Arafat",
  },
  {
    id: 2,
    name: "Dainius Juška",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "You're now chatting with Dainius Juška",
  },
  {
    id: 3,
    name: "Deividas Litvinenko",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "You're now chatting with Deividas Litvinenko",
  },
  {
    id: 4,
    name: "Remigijus Prialgauskis",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "You're now chatting with Remigijus Prialgauskis",
  },

  {
    id: 2,
    name: "User 5",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 3,
    name: "User 6",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 1,
    name: "User 7",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "this is chat",
  },
  {
    id: 2,
    name: "User 8",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 3,
    name: "User 9",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 1,
    name: "User 10",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "this is chat",
  },
  {
    id: 2,
    name: "User 11",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 3,
    name: "User 12",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 1,
    name: "User 13",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "this is chat",
  },
  {
    id: 2,
    name: "User 14",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 3,
    name: "User 15",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 1,
    name: "User 16",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "this is chat",
  },
  {
    id: 2,
    name: "User 17",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 3,
    name: "User 18",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 1,
    name: "User 19",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "this is chat",
  },
  {
    id: 2,
    name: "User 20",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  {
    id: 3,
    name: "User 21",
    avatar: "carbon:user-avatar",
    lastMessage: "Message content...",
    lastMessageDate: "6 d",
    chat: "N",
  },
  // Add more users as needed
]);
const selectChatbotUser = () => {
  messengerStore.selectUser(chatbotUser.value);
};
onMounted(() => {
  clickOutside(
    sidebar.value,
    (event) => {
      // Check if the clicked element is not the "Close" button
      if (!event.target.closest(".close-chat-button")) {
        messengerStore.closeMessenger();
      }
    },
    messengerIcon.value
  );
});

onUnmounted(() => {
  removeClickOutside(sidebar.value);
});
</script>

<style scoped>
.translate-x-full {
  transform: translateX(125%);
}
</style>
