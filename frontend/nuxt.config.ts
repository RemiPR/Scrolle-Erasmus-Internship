// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if no system preference is detected
    classSuffix: "", // Use empty string for Tailwind compatibility
  },
  plugins: [{ src: "~/plugins/pinia.js", mode: "client" }],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "fr",
        name: "French",
        iso: "fr-FR",
        file: "fr.json",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
