// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { ssr: true },
    '/about': { ssr: true },
  },

  compatibilityDate: '2024-08-29',
})