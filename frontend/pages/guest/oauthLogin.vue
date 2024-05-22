<template>
    <div class="min-h-screen mt-16"><h2>Loading</h2></div>
</template>

<script setup>
console.log("page loads");
definePageMeta({
  navigation: "guest",
  middleware: ["check-cookie"]
});
</script>