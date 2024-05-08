<template>
  <div>
    <NuxtLayout :name="nav"></NuxtLayout>
    <div class="mx-auto px-4 bg-white dark:bg-gray-800">
      <main class="text-center text-black dark:text-white">
        <div class="h-screen pt-64">
          <h1 class="text-5xl mb-14">
            Free courses, Interactive learning materials, and more
          </h1>
          <p class="text-2xl mb-8">
            Welcome to Scroll — Your Pathway to Online Learning Excellence!
          </p>
          <div class="mt-52">
            <p class="text-2xl mb-8">
              Ready to learn? Enter your email to create your account.
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
            <Icon
              name="heroicons-outline:arrow-down"
              class="mt-10 h-16 w-11"
              alt="Down arrow"
            />
          </div>
        </div>
        <TextLeftAd
          Subtitle1="Free courses"
          Paragraph1="Learn for free from Scroll's free courses which are made by the best tutors in Latvia."
          :Photo1="FreeCourses"
        />
        <TextRightAd />
        <TextLeftAd
          Subtitle1="Communicate easily"
          Paragraph1="Communicate with your colleagues, freinds using Scroll's unique chatting system."
          :Photo1="Communication"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import TextLeftAd from "~/components/index/TextLeftAd.vue";
import TextRightAd from "~/components/index/TextRightAd.vue";
import FreeCourses from "@/public/FreeCourses.jpg";
import Communication from "@/public/Communication.jpg";

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
