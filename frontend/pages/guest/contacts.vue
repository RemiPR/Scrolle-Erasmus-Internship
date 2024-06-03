<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32 mx">
      <h2 class="text-4xl font-bold mb-14">{{ t("contacts_title") }}</h2>
      <p class="text-left text-gray-800 text-xl tracking-wide dark:text-white">
        {{ t("contacts_subtitle") }}
      </p>
      <SharedCardContactForm class="mt-20" />
    </main>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ['auth', 'guest'],
});
</script>
