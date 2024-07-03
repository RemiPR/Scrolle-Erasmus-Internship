<!-- components/shared/user/profile/Avatar.vue-->
<template>
  <div class="relative">
    <div class="group">
      <div
        class="flex items-center avatar"
        :class="[
          widthClass,
          heightClass,
          { 'cursor-pointer hover:opacity-80': clickable },
        ]"
        @click="clickable && toggleMenu()"
      >
        <NuxtImg
          :src="'/lecturer_avatar.png'"
          alt="Avatar"
          class="rounded-full relative"
          :class="[imgWidthClass, imgHeightClass]"
        />
      </div>
      <span
        v-if="clickable"
        class="absolute left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white bg-gray-700 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        Account
      </span>
    </div>

    <div
      v-if="showMenu"
      v-on-click-outside="(event) => closeAvatarMenu(event.target)"
      class="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50 text-gray-800 dark:text-white select-none"
    >
      <ul>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center rounded-lg"
        >
          <SharedThemeTextColorModeToggle />
        </li>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
        >
          <NuxtLink :to="localePath('/guest/profile')">
            <Icon name="ic:outline-settings" class="h-5 w-5 mr-2" />Account
            Settings
          </NuxtLink>
        </li>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
        >
          <Icon
            name="material-symbols:help-outline-rounded"
            class="h-5 w-5 mr-2"
          />
          Help & Support
        </li>
      </ul>
      <div class="border-b border-gray-200 dark:border-gray-700"></div>
      <NuxtLink
        @click="handleLogout"
        class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-red-500 dark:text-red-400 flex items-center rounded-lg"
      >
        <Icon name="ic:outline-logout" class="h-5 w-5 mr-2" />
        Sign out
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from "#imports";
import { useAuthStore } from "@/stores/authStore";
import { vOnClickOutside } from "@vueuse/components";

const { logoutGuest } = useAuthStore();

const props = defineProps({
  avatarClasses: {
    type: String,
    default: "",
  },
  widthClass: {
    type: String,
    default: "w-12",
  },
  heightClass: {
    type: String,
    default: "h-12",
  },
  imgWidthClass: {
    type: String,
    default: "w-full",
  },
  imgHeightClass: {
    type: String,
    default: "h-full",
  },
  clickable: {
    type: Boolean,
    default: true,
  },
});

const localePath = useLocalePath();
const config = useRuntimeConfig();

const showMenu = ref(false);
function closeAvatarMenu(target) {
  if (!target.closest(".avatar")) {
    showMenu.value = false;
  }
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const handleLogout = async () => {
  await logoutGuest(localePath("/"), config.public.apiBaseUrl);
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
