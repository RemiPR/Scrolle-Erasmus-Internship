<template>
  <div>
    <NuxtLayout :name="nav"></NuxtLayout>
    <div class="mx-auto px-4 bg-white dark:bg-gray-800">
      <main class="text-center text-black dark:text-white">
        <div class="h-screen pt-64">
          <h1 class="text-5xl mb-20">
            Free courses, Interactive learning materials, and more
          </h1>
          <p class="text-2xl mb-8">
            Welcome to Scroll — Your Pathway to Online Learning Excellence!
          </p>
          <form class="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="border p-2 rounded-lg w-80 h-12"
            />
            <button
              class="bg-blue-500 text-white p-2 rounded-r-md ml-2 rounded-l-lg"
            >
              Start learning
            </button>
          </form>
        </div>
        <LeftTextAd />
        <RightTextAd />
        <LeftTextAd />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LeftTextAd from "@/components/index/LeftTextAd.vue";
import RightTextAd from "@/components/index/RightTextAd.vue";

definePageMeta({
  layout: "nav",
});

const open = ref(false);
const selectedLanguage = ref("English");

const changeLanguage = (language) => {
  selectedLanguage.value = language;
  open.value = false;
};
</script>

<script>
export default {
  layout: "nav",
};
</script>
