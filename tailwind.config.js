/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00FFFF',
        'accent-hover': '#00cccc',
        'accent-hover-light': '#66FFFF',
        // accent: '#00ff99',
        // accent_hover: '#00cc7a'
      },
    },
  },
  plugins: [],
}

