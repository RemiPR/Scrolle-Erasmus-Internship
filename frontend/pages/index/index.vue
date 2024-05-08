<template>
  <div>
    <NuxtLayout :name="nav"></NuxtLayout>
    <div class="mx-auto px-4 bg-slate-800 text-white">
      <header class="flex justify-between items-center py-6">
        <div>
          <Icon name="logos:google-icon" class="mr-2" alt="Google Logo" />
        </div>
        <nav>
          <ul class="flex space-x-8 items-center">
            <div class="relative w-32">
              <button
                @click="open = !open"
                class="relative z-10 text-sm flex items-center w-full"
              >
                {{ selectedLanguage }}
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                v-show="open"
                @click="open = false"
                class="fixed inset-0 h-full w-full z-10"
              ></div>
              <div
                v-show="open"
                class="absolute right-0 mt-2 py-2 w-full bg-white rounded-lg shadow-xl z-20"
              >
                <a
                  href="#"
                  @click="changeLanguage('English')"
                  class="block px-4 py-2 text-sm text-black"
                  >English</a
                >
                <a
                  href="#"
                  @click="changeLanguage('Latvian')"
                  class="block px-4 py-2 text-sm text-black"
                  >Latvian</a
                >
                <a
                  href="#"
                  @click="changeLanguage('Russian')"
                  class="block px-4 py-2 text-sm text-black"
                  >Russian</a
                >
              </div>
            </div>
            <li>
              <NuxtLink to="/login" class="text-sm mr-8">Sign in</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/login" class="text-sm mr-8">Register</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <main class="text-center y-20">
        <div class="mt-80">
          <h1 class="text-4xl mb-10">
            Free courses, Interactive learning materials, and more
          </h1>
          <p class="text-xl mb-8">
            Welcome to Scroll — Your Pathway to Online Learning Excellence!
          </p>
          <form class="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="border p-2 rounded-l-md"
            />
            <button class="bg-blue-500 text-white p-2 rounded-r-md">
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
