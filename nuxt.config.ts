import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: "/",
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/content"],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    preset: "github_pages",
  },
});