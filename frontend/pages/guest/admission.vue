<template>
  <div>
    <div class="min-h-screen mt-32"><h2>hello</h2></div>
    <div class="min-h-screen"><h2>hello</h2></div>
  </div>
</template>

<script setup>
const nuxt = useNuxtApp();

console.log(nuxt);

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
});
</script>
