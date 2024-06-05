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
        <NuxtLink to="#" class="flex items-center">
          <Icon
            name="fluent:hat-graduation-24-regular"
            class="mr-2 h-10 w-10"
            alt="Graduation hat icon"
          />
          <span class="text-3xl font-semibold">Scrolle</span>
        </NuxtLink>
        <NuxtLink :to="localePath('/guest')" class="hover:underline">{{
          $t("nav_home_btn")
        }}</NuxtLink>
        <NuxtLink
          :to="localePath('/guest/myCourses')"
          class="hover:underline"
          >{{ $t("nav_my_courses_btn") }}</NuxtLink
        >
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
        <SharedUserProfileAvatar />
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
