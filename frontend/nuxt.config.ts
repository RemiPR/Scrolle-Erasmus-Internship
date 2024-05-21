// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
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
  ],
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
  plugins: [{ src: "~/plugins/pinia.js", mode: "client" }],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    locales: [
      {
        code: "en-US",
        name: "English",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "lv-LV",
        name: "Latviski",
        iso: "lv-LV",
        file: "lv-LV.json",
      },
      {
        code: "ru-RU",
        name: "Русский",
        iso: "ru-RU",
        file: "ru-RU.json",
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
