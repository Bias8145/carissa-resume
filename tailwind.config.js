/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // PENTING: Agar toggle tema berfungsi
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
