<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32 mx">
      <h2 class="text-4xl font-bold mb-14">Contacts</h2>
      <p class="text-left text-gray-800 text-xl tracking-wide dark:text-white">If you have any questions or need some help regarding certain topics, feel free to send us a message. We’ll get back to you as soon as we can.</p>
      <SharedCardsContactForm class="mt-20"/>
    </main>
  </div>
</template>
<script setup>

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ['auth', 'guest'],
});

</script>
