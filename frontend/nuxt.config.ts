// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
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
    "@nuxtjs/cloudinary",
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
  cloudinary: {
    cloudName: 'dcvye5gx6',
    apiKey: '447834266514223',
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
          "shared/card/en.json",
          "guest/pages/faq/en.json",
          "guest/pages/admission/application/en.json",
          "guest/pages/admission/fees/en.json",
          "guest/pages/admission/visas/en.json",
          "guest/pages/admission/entrance_requirements/en.json",
          "guest/pages/admission/shared/en.json",
          "guest/pages/contacts/en.json",
          "guest/pages/index/en.json",
        ],
      },
      {
        code: "lv-LV",
        name: "Latviski",
        iso: "lv-LV",
        files: [
          "shared/lv.json",
          "shared/card/lv.json",
          "guest/pages/faq/lv.json",
          "guest/pages/admission/application/lv.json",
          "guest/pages/admission/fees/lv.json",
          "guest/pages/admission/visas/lv.json",
          "guest/pages/admission/entrance_requirements/lv.json",
          "guest/pages/admission/shared/lv.json",
          "guest/pages/contacts/lv.json",
          "guest/pages/index/lv.json",
        ],
      },
      {
        code: "ru-RU",
        name: "Русский",
        iso: "ru-RU",
        files: [
          "shared/ru.json",
          "shared/card/ru.json",
          "guest/pages/faq/ru.json",
          "guest/pages/admission/application/ru.json",
          "guest/pages/admission/fees/ru.json",
          "guest/pages/admission/visas/ru.json",
          "guest/pages/admission/entrance_requirements/ru.json",
          "guest/pages/admission/shared/ru.json",
          "guest/pages/contacts/ru.json",
          "guest/pages/index/ru.json",
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