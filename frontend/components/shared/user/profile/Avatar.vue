<template>
  <div class="relative">
    <div class="relative group">
      <div
        class="flex items-center cursor-pointer p-2 avatar hover:opacity-80"
        @click="toggleMenu"
      >
        <NuxtImg
          :src="'/lecturer_avatar.png'"
          alt="Avatar"
          class="h-12 w-12 rounded-full"
        />
      </div>
      <span
        class="absolute left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        Account
      </span>
    </div>

    <div
      v-if="showMenu"
      v-on-click-outside="(event) => closeAvatarMenu(event.target)"
      class="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50 text-gray-800 dark:text-white select-none"
    >
      <div></div>
      <ul>
        <li
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
        >
          <TextColorModeToggle />
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
        class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-red-500 dark:text-red-400 flex items-center"
      >
        <Icon name="ic:outline-logout" class="h-5 w-5 mr-2" />
        Sign out
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import TextColorModeToggle from "@/components/global/TextColorModeToggle.vue";
import { useLocalePath } from "#imports";
import { useAuthStore } from "@/stores/authStore";
import { vOnClickOutside } from "@vueuse/components";

const { logoutGuest } = useAuthStore();

const props = defineProps({
  avatarClasses: {
    type: String,
    default: "",
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
  // console.log("Executed");
  showMenu.value = !showMenu.value;
};

const handleLogout = async () => {
  await logoutGuest(localePath("/"), config.public.authBaseUrl);
};

/*



onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});*/
</script>

<style scoped>
/* Add any additional styles here */
</style>
