// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      authBaseUrl: process.env.AUTH_BASE_URL,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@formkit/auto-animate/nuxt",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
  ],
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Scrolle - Interactive Learning Platform",
    },
  },
  css: ["@/assets/css/transitions.css", "@/assets/css/main.css"],
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if no system preference is detected
    classSuffix: "", // Use empty string for Tailwind compatibility
  },
  veeValidate: {
    autoImports: true,
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    locales: [
      {
        code: "en-US",
        name: "English",
        iso: "en-US",
        files: [
          "shared/en.json",
          "guest/faq/en.json",
          "guest/admission/application/en.json",
          "guest/admission/fees/en.json",
          "guest/admission/visas/en.json",
          "guest/admission/entrance_requirements/en.json",
          "guest/admission/shared/en.json",
        ],
      },
      {
        code: "lv-LV",
        name: "Latviski",
        iso: "lv-LV",
        files: [
          "shared/lv.json",
          "guest/faq/lv.json",
          "guest/admission/application/lv.json",
          "guest/admission/fees/lv.json",
          "guest/admission/visas/lv.json",
          "guest/admission/entrance_requirements/lv.json",
          "guest/admission/shared/lv.json",
        ],
      },
      {
        code: "ru-RU",
        name: "Русский",
        iso: "ru-RU",
        files: [
          "shared/ru.json",
          "guest/faq/ru.json",
          "guest/admission/application/ru.json",
          "guest/admission/fees/ru.json",
          "guest/admission/visas/ru.json",
          "guest/admission/entrance_requirements/ru.json",
          "guest/admission/shared/ru.json",
        ],
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
