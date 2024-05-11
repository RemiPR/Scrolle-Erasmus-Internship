<template>
  <div>
    <NuxtLayout name="nav" />
  </div>
</template>

<script setup>
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/app.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 1;
  filter: blur(1rem);
}
</style>
