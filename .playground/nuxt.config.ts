export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  i18n: {
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
    ]
  },
  compatibilityDate: '2025-01-20'
})
