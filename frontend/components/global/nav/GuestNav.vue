<template>
  <div>
    <!-- Header (Nav Menu) -->
    <header
      :class="{
        'bg-transparent': !props.enableScrollStyling || !hasScrolled,
        'bg-gray-800 dark:bg-white shadow':
          props.enableScrollStyling && hasScrolled,
        'dark:text-white': !props.enableScrollStyling || !hasScrolled,
      }"
      class="flex justify-between font-semibold items-center p-4 fixed top-0 w-full z-50 transition-colors duration-300"
      style="position: fixed; top: 0; z-index: 50"
    >
      <!-- Left nav: Logo + Logo Text and Home button -->
      <nav class="flex items-center space-x-12 text-xl">
        <NuxtLink to="#" class="flex items-center">
          <Icon
            name="fluent:hat-graduation-24-regular"
            :class="{
              'mr-2 h-10 w-10 text-white': true,
              'dark:text-gray-800': hasScrolled,
              'dark:text-white': !hasScrolled,
            }"
            alt="Graduation hat icon"
          />
          <span
            :class="{
              'text-3xl font-semibold text-white': true,
              'dark:text-gray-800': hasScrolled,
              'dark:text-white': !hasScrolled,
            }"
            >Scrolle</span
          >
        </NuxtLink>
        <NuxtLink
          :to="localePath('/')"
          :class="{
            'text-white hover:underline': true,
            'dark:text-gray-800': hasScrolled,
            'dark:text-white': !hasScrolled,
          }"
          >{{ $t("nav_home_btn") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('/')"
          :class="{
            'text-white hover:underline': true,
            'dark:text-gray-800': hasScrolled,
            'dark:text-white': !hasScrolled,
          }"
          >{{ $t("nav_my_courses_btn") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('/guest/admission')"
          :class="{
            'text-white hover:underline': true,
            'dark:text-gray-800': hasScrolled,
            'dark:text-white': !hasScrolled,
          }"
          >{{ $t("nav_admission_btn") }}</NuxtLink
        >

        <NuxtLink
          :to="localePath('/')"
          :class="{
            'text-white hover:underline': true,
            'dark:text-gray-800': hasScrolled,
            'dark:text-white': !hasScrolled,
          }"
          >{{ $t("nav_faq_btn") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('/')"
          :class="{
            'text-white hover:underline': true,
            'dark:text-gray-800': hasScrolled,
            'dark:text-white': !hasScrolled,
          }"
          >{{ $t("nav_contacts_btn") }}</NuxtLink
        >
      </nav>

      <!-- Right nav: Language toggler, Login button, Light/Dark theme toggler -->
      <nav class="flex items-center gap-4">
        <LangSwitcher
          :class="{
            'text-white hover:underline': true,
          }"
          class="dark:text-black"
        />
        <Avatar />
      </nav>
    </header>
    <!-- Page content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import LangSwitcher from "~/components/index/LangSwitcher.vue";
import { useLocalePath, navigateTo } from "#imports";
import Avatar from "@/components/shared/ui/Avatar.vue";
import { useScrollPosition } from "@/composables/useScrollPosition";

const props = defineProps({
  enableScrollStyling: {
    type: Boolean,
    default: true,
  },
});

const localePath = useLocalePath();
const { hasScrolled } = useScrollPosition();
</script>
