// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Start - Copy this config to root project
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/ui'],
  i18n: {
    strategy: 'no_prefix',
    locales: [],
    lazy: true
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
