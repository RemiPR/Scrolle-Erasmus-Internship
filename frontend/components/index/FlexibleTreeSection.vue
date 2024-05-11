<template>
  <section
    ref="sectionRef"
    class="flex flex-col md:flex-row items-center gap-x-16"
  >
    <div :class="textOnLeft ? 'md:order-1' : 'md:order-2'" class="flex-1 mt-4">
      <h2
        class="text-4xl mb-8 text-gray-800 dark:text-white font-semibold dark:font-bold"
      >
        {{ title }}
      </h2>
      <p class="text-xl">
        {{ content }}
      </p>
    </div>
    <div :class="textOnLeft ? 'md:order-2' : 'md:order-1'" class="flex-1">
      <img :src="imageSrc" alt="Description Image" class="w-full" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
  imageSrc: String,
  textOnLeft: Boolean, // true if text is on the left, false if on the right
});
</script>
