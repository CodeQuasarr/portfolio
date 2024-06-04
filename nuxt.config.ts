// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    baseUrl: 'http://localhost:3000',
    githubToken: process.env.NUXT_GITHUB_TOKEN,
    public : {
      githubToken: process.env.NUXT_GITHUB_TOKEN,
    }
  },
  modules: ["@nuxt/fonts", "@nuxt/ui", "nuxt-icon", "@nuxt/image"],
  image: {
    dir: 'assets/images',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
