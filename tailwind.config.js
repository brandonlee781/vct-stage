/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        vctDark: {
          100: '#9aa0ff',
          200: '#9aa7ff',
          300: '#92a5f1',
          400: '#7b8bcb',
          500: '#6471a5',
          600: '#4d577f',
          700: '#363d59',
          800: '#1f2333',
        },
        vctMid: {
          300: '#606a90',
          400: '#474e6a',
          500: '#2e3244',
          600: '#0b0c10',
        },
      },
    },
  },
  plugins: [],
}

