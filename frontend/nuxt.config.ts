// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@formkit/auto-animate/nuxt",
  ],
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@/assets/css/transitions.css"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if no system preference is detected
    classSuffix: "", // Use empty string for Tailwind compatibility
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
