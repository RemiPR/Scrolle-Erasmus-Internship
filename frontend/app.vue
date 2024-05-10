<template>
  <div>
    <NuxtLayout name="nav" />
  </div>
</template>

<script setup></script>

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
