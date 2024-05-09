<template>
  <div>
    <div class="mx-auto px-4 bg-white dark:bg-gray-800">
      <main class="text-center text-black dark:text-white">
        <div class="h-screen pt-64">
          <h1 class="text-5xl mb-14">
            {{ $t("page_title") }}
          </h1>
          <p class="text-2xl mb-8">
            {{ $t("page_subtitle") }}
          </p>
          <div class="mt-44">
            <p class="text-2xl mb-8">
              {{ $t("before_input_msg") }}
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
                {{ $t("email_input_btn") }}
              </button>
            </form>
            <div @click="scrollToSection" class="cursor-pointer">
              <Icon
                name="heroicons-outline:arrow-down"
                class="mt-10 h-16 w-11"
                alt="Down arrow"
              />
            </div>
          </div>
        </div>
        <TextLeftAd
          id="text-left-ad"
          SubtitleKey="text_left_ad_header1"
          ParagraphKey="text_left_ad_paragraph1"
          :Photo1="FreeCourses"
        />
        <TextRightAd />
        <TextLeftAd
          SubtitleKey="text_left_ad_header2"
          ParagraphKey="text_left_ad_paragraph2"
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

const scrollToSection = () => {
  // Scroll to the section with a 50-pixel offset
  const targetSection = document.getElementById("text-left-ad");
  const offset = targetSection.offsetTop - 100;
  window.scrollTo({ top: offset, behavior: "smooth" });
};
</script>
