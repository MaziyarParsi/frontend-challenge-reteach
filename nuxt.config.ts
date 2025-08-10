// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // This line disables SSR and enables SPA mode
  // ssr: false,
  routeRules: {
    // Cache the gallery page for 60 seconds using SWR
    // '/gallery': { swr: 60 }
    //OR
    // The static gallery page will be regenerated if a request comes in
    // after it's at least 1 hour old.
    "/gallery": { isr: 3600 },
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
