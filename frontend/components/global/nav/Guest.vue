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
      style="position: fixed; top: 0; z-index: 50"
    >
      <!-- Left nav: Logo + Logo Text and Home button -->
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
        <NuxtLink :to="localePath('/guest')" class="hover:underline">{{
          $t("nav_home_btn")
        }}</NuxtLink>
        <NuxtLink :to="localePath('#')" class="hover:underline">{{
          $t("nav_my_courses_btn")
        }}</NuxtLink>
        <NuxtLink
          :to="localePath('/guest/admission')"
          class="hover:underline"
          >{{ $t("nav_admission_btn") }}</NuxtLink
        >
        <NuxtLink :to="localePath('/guest/faq')" class="hover:underline">{{
          $t("nav_faq_btn")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/guest/contacts')" class="hover:underline">{{
          $t("nav_contacts_btn")
        }}</NuxtLink>
      </nav>

      <!-- Right nav: Language toggler, Login button, Light/Dark theme toggler -->
      <nav class="flex items-center gap-4">
        <IndexLangSwitcher
          class="text-white dark:text-gray-800 font-semibold"
        />
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
  </div>
</template>

<script setup>
import { useLocalePath, navigateTo } from "#imports";

const props = defineProps({
  enableScrollStyling: {
    type: Boolean,
    default: true,
  },
});

const localePath = useLocalePath();
const { hasScrolled } = useScrollPosition();
</script>
