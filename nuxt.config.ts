// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode:{
    preference: 'dark',
    fallback: 'light',
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  css: ["@/assets/css/main.css"],
  app: {
    rootTag: "body",
    rootId: "app",
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  }
});
