/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Mono One"],
        comforta: ["Confortaa"]
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
