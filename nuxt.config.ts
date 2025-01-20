// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/ui'],
  // Start - Copy this config to root project
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'es',
        file: 'es.json',
        name: 'Español'
      }
    ],
    lazy: true,
    defaultLocale: 'en'
  },
  imports: {
    dirs: ['./types']
  },
  // End - Copy this config to root project
  runtimeConfig: {
    public: {
      API_URL: '' // Set the API URL here (if needed)
    }
  }
})
