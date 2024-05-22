<template>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script setup>
const props = defineProps({
  activeNav: {
    type: String,
    required: true,
  },
  components: {
    type: Object,
    required: true,
  },
});

const currentComponent = computed(() => props.components[props.activeNav]);
</script>
