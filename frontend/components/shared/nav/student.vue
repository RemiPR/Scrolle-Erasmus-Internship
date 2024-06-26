<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      :class="{
        'bg-transparent text-white': props.enableScrollStyling && !hasScrolled,
        'bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow':
          !props.enableScrollStyling ||
          (props.enableScrollStyling && hasScrolled),
      }"
      class="flex justify-between font-semibold items-center p-4 fixed top-0 w-full z-50 transition-colors duration-300"
    >
      <!-- Left nav -->
      <nav class="flex items-center space-x-12 text-xl">
        <NuxtLink
          to="#"
          class="group flex items-center justify-center space-x-2 px-2 py-2"
        >
          <Icon
            name="fluent:hat-graduation-24-regular"
            class="h-8 w-8 3xl:h-10 3xl:w-10 group-hover:-rotate-[25deg] transition-transform duration-500 group-hover:text-blue-400"
            alt="Graduation hat icon"
          />
          <span
            class="text-3xl font-semibold group-hover:text-blue-200 dark:group-hover:text-blue-400 transition-transform duration-700"
            >Scrolle</span
          >
        </NuxtLink>
        <NuxtLink :to="localePath('/student')" class="hover:underline">{{
          $t("nav_home_btn")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/')" class="hover:underline"
          >What's trending</NuxtLink
        >
        <NuxtLink :to="localePath('/')" class="hover:underline"
          >My assignments</NuxtLink
        >
        <NuxtLink :to="localePath('/')" class="hover:underline"
          >My courses</NuxtLink
        >
        <NuxtLink :to="localePath('/')" class="hover:underline"
          >My grades</NuxtLink
        >
        <NuxtLink :to="localePath('/')" class="hover:underline"
          >Help & Support</NuxtLink
        >
      </nav>

      <!-- Right nav: Language toggler, Login button, Light/Dark theme toggler -->
      <nav class="flex items-center gap-4">
        <IndexLangSwitcher
          class="text-white dark:text-gray-800 font-semibold"
        />
        <div class="relative group">
          <button
            ref="messengerIcon"
            @click="messengerStore.toggleMessenger"
            class="flex h-12 w-12 items-center justify-center rounded-full outline-none bg-gray-500 hover:bg-gray-400 text-white transition duration-300 ease-in-out messenger-icon"
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
            class="flex h-12 w-12 items-center justify-center rounded-full outline-none bg-gray-500 hover:bg-gray-400 text-white transition duration-300 ease-in-out"
          >
            <Icon
              name="clarity:notification-solid"
              class="h-7 w-7"
              alt="Notifaction bell icon"
            />
          </button>
          <span
            class="absolute top-14 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white pointer-events-none bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          >
            Notifications
          </span>
        </div>
        <SharedUserProfileAvatar
          width-class="w-12"
          height-class="h-12"
          img-width-class="w-full"
          img-height-class="h-full"
        />
      </nav>
    </header>
    <!-- Page content -->
    <NuxtPage />
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
import { useLocalePath } from "#imports";
import { useMessengerStore } from "@/stores/messenger";
const messengerIcon = ref(null);
provide("messengerIcon", messengerIcon);

const props = defineProps({
  enableScrollStyling: {
    type: Boolean,
    default: true,
  },
});

const localePath = useLocalePath();
const { hasScrolled } = useScrollPosition();
const messengerStore = useMessengerStore();
</script>
