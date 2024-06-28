// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    baseUrl: 'http://localhost:3000',
    mail:  {
      host: process.env.NUXT_MAILHOST,
      port: process.env.NUXT_MAILPORT,
      auth: {
        user: process.env.NUXT_MAILUSER,
        pass: process.env.NUXT_MAILPASS
      },
      contact: process.env.CONTACTEMAIL
    },
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
