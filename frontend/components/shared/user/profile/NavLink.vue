<!-- components/NavLink.vue -->
<template>
  <a
    href="#"
    class="py-2 px-2 hover:bg-gray-100 text-lg rounded-lg transition-colors duration-200 flex items-center"
    :class="{ 'bg-gray-200 text-gray-800': isActive }"
    @click.prevent="activateNav(value)"
  >
    <Icon :name="iconName" class="mr-2 text-xl" />
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  activateNav: {
    type: Function,
    required: true,
  },
  activeNav: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const isActive = computed(() => props.activeNav === props.value);
</script>
