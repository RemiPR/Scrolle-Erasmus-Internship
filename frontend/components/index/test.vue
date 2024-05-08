<template>
  <p>{{ kintamasis }}</p>
</template>

<script setup>
const props = defineProps(["kintamasis"]);
console.log(props.kintamasis);
</script>
