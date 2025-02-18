/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './libs/angel-ui-components/src/**/*.{html,ts,scss}',
    './libs/features/src/**/*.{html,ts,scss}',
    './apps/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      colors: {
        // Asegúrate de definir colores personalizados si es necesario
        'blue-100': '#cce4ff',
        'blue-700': '#006bb3',
        'red-100': '#ffcccc',
        'red-700': '#b30000',
        'green-100': '#ccffcc',
        'green-700': '#006600',
        'amber-200': '#e2c16b', // Puedes añadir otros colores si lo deseas
        'amber-700': '#7f5d2e', 
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // ... otros plugins ...
  ],
  options: {
    safelist: [
      'btn-primary',
      'btn-secondary',
      'btn-outline',
      'btn-ghost',
      'btn-link',
      'btn-sm',
      'btn-md',
      'btn-lg',
      'btn-loading',
      'btn-disabled',
    ],
  },
};