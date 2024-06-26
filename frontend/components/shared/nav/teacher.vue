<!-- components/global/nav/Teacher.vue -->
<template>
  <div class="flex">
    <!-- Sidebar -->
    <SharedNavSidebar class="w-72 3xl:w-80" :links="sidebarLinks" />

    <div class="flex-1 bg-gray-100">
      <!-- Header (Nav Menu) -->
      <header class="mx-8 bg-gray-100 pb-4 my-4 border-b-2 border-gray-300">
        <h1 class="text-4xl text-gray-700 font-semibold">
          {{ navigationStore.title }}
        </h1>
      </header>

      <!-- Sticky Navigation -->
      <nav
        class="flex justify-end items-center gap-4 fixed py-4 mx-8 top-0 left-72 3xl:left-80 right-0 z-50"
      >
        <IndexLangSwitcher class="text-gray-200 font-semibold" />
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

      <!-- Page content -->

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
import { useSidebar } from "@/composables/useSidebar";
import { useNavigationStore } from "@/stores/navigationStore";

const messengerIcon = ref(null);
provide("messengerIcon", messengerIcon);

const messengerStore = useMessengerStore();

const dashboardStore = useDashboardStore();
const { activeComponent, setActiveComponent } = useSidebar();
const navigationStore = useNavigationStore();

// Accept sidebarLinks as props
const props = defineProps(["sidebarLinks"]);
</script>
