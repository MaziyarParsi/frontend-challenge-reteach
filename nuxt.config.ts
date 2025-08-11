// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // Enable ISR for gallery page (this will pre-render and cache)
    "/gallery": { isr: 3600 },
    // Disable SSR for all other pages (SPA mode)
    "/": { ssr: false },
    "/user/**": { ssr: false },
  },
  modules: ["@nuxt/image"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Frontend Coding Challenge",
    },
  },
  nitro: {
    storage: {
      storage: {
        driver: "fs",
        base: "./storage",
      },
    },
  },
});
