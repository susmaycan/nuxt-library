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
    ],
    defaultLocale: 'en'
  },
  compatibilityDate: '2025-01-20'
})
