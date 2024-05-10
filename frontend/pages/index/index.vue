<template>
  <div>
    <div class="mx-auto px-4 bg-white dark:bg-gray-800">
      <main class="text-center text-black dark:text-white">
        <!-- Call to action -->
        <div class="h-screen flex flex-col justify-center items-center">
          <div>
            <h1 class="text-5xl mb-14">{{ $t("page_title") }}</h1>
            <p class="text-2xl mb-8">{{ $t("page_subtitle") }}</p>
            <div class="mt-44">
              <p class="text-2xl mb-8">{{ $t("before_input_msg") }}</p>
              <!-- Input with CTA button -->
              <div class="flex justify-center mb-10">
                <input
                  type="email"
                  v-model="ctaEmail"
                  :placeholder="$t('email_field_placeholder')"
                  class="border p-2 rounded-lg w-80 h-12 text-black"
                />
                <NuxtLink
                  :to="loginLink"
                  @click.native="storeEmail"
                  class="bg-blue-500 text-white p-2 rounded-r-md ml-2 rounded-l-lg flex items-center justify-center"
                >
                  {{ $t("email_input_btn") }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Arrow -->
          <div
            class="w-11 h-16 flex justify-center items-center cursor-pointer"
            @click="scrollToSection"
          >
            <Icon
              name="heroicons-outline:arrow-down"
              class="h-full w-full"
              alt="Down arrow"
            />
          </div>
        </div>
        <!-- Cards -->
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
import { ref, computed } from "vue";
import { useLocalePath } from "#imports";
import TextLeftAd from "~/components/index/TextLeftAd.vue";
import TextRightAd from "~/components/index/TextRightAd.vue";
import FreeCourses from "@/public/FreeCourses.jpg";
import Communication from "@/public/Communication.jpg";
import { useCtaStore } from "~/stores/ctaStore";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/app.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

definePageMeta({
  layout: "nav",
});
const ctaStore = useCtaStore();
const ctaEmail = ref("");
const localePath = useLocalePath();

const loginLink = computed(() => {
  const baseLoginPath = localePath("/login");
  return `${baseLoginPath}?register=true`;
});

const storeEmail = () => {
  if (ctaEmail.value) {
    ctaStore.setEmail(ctaEmail.value);
  }
};

const scrollToSection = () => {
  const targetSection = document.getElementById("text-left-ad");
  const offset = targetSection.offsetTop - 100;
  window.scrollTo({ top: offset, behavior: "smooth" });
};
</script>
