// types/i18n.d.ts
import "@nuxtjs/i18n";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    i18n?: typeof import("@nuxtjs/i18n").default;
  }
}
