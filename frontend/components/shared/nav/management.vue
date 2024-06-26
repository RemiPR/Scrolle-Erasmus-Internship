<!-- components/global/nav/management.vue -->
<template>
  <div class="flex">
    <!-- Sidebar -->
    <SharedNavSidebar
      class="w-72 3xl:w-80"
      :links="sidebarLinks"
      @link-clicked="setActiveComponent"
    />

    <div class="flex-1">
      <!-- Header (Nav Menu) -->
      <header
        class="flex justify-end font-semibold items-center m-6 fixed top-0 right-0 z-50 p-3"
      >
        <nav class="flex items-center gap-4">
          <IndexLangSwitcher class="text-white font-semibold" />
          <div class="relative group">
            <button
              ref="messengerIcon"
              @click="messengerStore.toggleMessenger"
              class="flex h-12 w-12 items-center justify-center rounded-full outline-none bg-gray-300 hover:bg-gray-600 text-gray-600 hover:text-white transition duration-300 ease-in-out messenger-icon"
            >
              <Icon
                name="mingcute:messenger-fill"
                class="h-7 w-7"
                alt="Messenger icon"
              />
            </button>
            <span
              class="absolute top-14 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white pointer-events-none bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              Messenger
            </span>
          </div>
          <div class="relative group">
            <button
              class="flex h-12 w-12 items-center justify-center rounded-full outline-none bg-gray-300 hover:bg-gray-600 text-gray-600 hover:text-white transition duration-300 ease-in-out"
            >
              <Icon
                name="clarity:notification-solid"
                class="h-7 w-7"
                alt="Notification bell icon"
              />
            </button>
            <span
              class="absolute top-14 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white pointer-events-none bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              Notifications
            </span>
          </div>
        </nav>
      </header>

      <!-- Page content -->
      <main>
        <component :is="activeComponent"></component>
      </main>

      <NuxtPage />
    </div>

    <SharedUserMessengerSidebar
      :is-open="messengerStore.isMessengerOpen"
      :selected-user="messengerStore.selectedUser"
      :messenger-icon="messengerIcon"
      @close="messengerStore.closeMessenger"
      @select-user="messengerStore.selectUser"
      @close-chat="messengerStore.closeChat"
    />
  </div>
</template>

<script setup>
import { useMessengerStore } from "@/stores/messenger";
import { useDashboardStore } from "@/stores/dashboardStore";
import { inject, provide, computed, ref } from "vue";

const messengerIcon = ref(null);
provide("messengerIcon", messengerIcon);

const messengerStore = useMessengerStore();

const dashboardStore = useDashboardStore();
const activeComponent = computed(() => dashboardStore.activeComponent);

const setActiveComponent = (component) => {
  dashboardStore.setActiveComponent(component);
};

// Accept sidebarLinks as a prop
const props = defineProps(["sidebarLinks"]);
</script>
