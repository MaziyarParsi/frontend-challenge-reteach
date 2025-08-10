// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // This line disables SSR and enables SPA mode
  ssr: false,
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
