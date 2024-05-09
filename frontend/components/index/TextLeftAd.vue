<template>
  <section>
    <div
      class="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-48 flex flex-col lg:flex-row justify-between items-center text-black dark:text-white"
    >
      <div class="w-25% lg:w-1/2 mt-4 lg:mt-0">
        <h2 class="text-4xl mb-2">{{ $t(SubtitleKey) }}</h2>
        <p class="text-xl mb-8">
          {{ $t(ParagraphKey) }}
        </p>
      </div>
      <div class="w-25% lg:w-1/3 lg:pr-4">
        <!-- Your photo goes here -->
        <img :src="Photo1" alt="Your Photo" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ SubtitleKey: String, ParagraphKey: String, Photo1: String });
</script>
