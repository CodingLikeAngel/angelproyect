/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './libs/angel-ui-components/src/**/*.{html,ts,scss}', // Asegúrate de que esté incluido
    './apps/**/*.{html,ts,scss}',               // También las apps si las estás usando
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

