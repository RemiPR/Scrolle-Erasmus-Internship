<template>
  <div
    class="absolute bottom-5 flex justify-center items-center cursor-pointer animate-bounce hover-effect"
    style="width: 80px; height: 80px"
    @click="$emit('click')"
  >
    <Icon
      name="heroicons-outline:arrow-down"
      class="h-20 w-14 text-gray-700 dark:text-white transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-400"
      style="filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))"
      alt="Down arrow"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["click"]);
</script>

<style scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}

/* Hover effect for arrow */
.hover-effect:hover::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: transparent;
  border: 2px solid rgba(59, 130, 246, 0.5); /* Tailwind blue-500 at 50% opacity */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}
</style>
