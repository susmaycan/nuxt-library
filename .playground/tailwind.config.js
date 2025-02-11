/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#18181b',
        darkLighter: '#27272a',
        light: '#e4e4e7',
        lightDarker: '#d4d4d8'
      }
    }
  },
  plugins: []
}
