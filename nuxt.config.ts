// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  imports: {
    dirs: ['./types']
  },
  runtimeConfig: {
    public: {
      API_URL: '' // Set the API URL here (if needed)
    }
  }
})
