/** @type {import('tailwindcss').Config} */

const animatePlugin = require('tailwindcss-animate');

module.exports = {
  content: [
    './libs/angel-ui-components/src/**/*.{html,ts,scss}',
    './libs/features/src/**/*.{html,ts,scss}',
    './apps/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados para "Montañas Leonesas"
        'mountain-brown': {
          100: '#f5e8d9', // Tono claro para fondos suaves
          200: '#e2c16b', // Ámbar claro (ya lo tenías)
          300: '#d1a754', // Ámbar medio
          500: '#8B4513', // Marrón rojizo (hover en NavBar)
          600: '#5a371a', // Marrón oscuro (logo)
          700: '#3f2612', // Más oscuro para sombras o énfasis
        },
        'trail-blue': {
          100: '#e6f4fa', // Azul claro para fondos
          300: '#66c9e8', // Azul intermedio
          500: '#00AEEF', // Azul principal (botones, dificultad)
          700: '#0088c2', // Azul oscuro para hover
        },
        'forest-green': {
          100: '#ccffcc', // Verde claro (ya lo tenías)
          300: '#66cc66', // Verde intermedio
          500: '#006600', // Verde oscuro (ya lo tenías)
          700: '#004d00', // Verde más oscuro
        },
        'stone-gray': {
          50: '#f9fafb',  // Gris muy claro (alternativa a blanco)
          100: '#f3f4f6', // Gris claro
          200: '#e5e7eb', // Gris suave
          400: '#9ca3af', // Gris medio
          700: '#374151', // Gris oscuro (texto principal)
        },
        // Manteniendo algunos colores originales
        'blue-100': '#cce4ff',
        'blue-700': '#006bb3',
        'red-100': '#ffcccc',
        'red-700': '#b30000',
        'amber-700': '#7f5d2e',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        display: ['Merriweather', 'serif'], // Para títulos y logo
        sans: ['Open Sans', 'sans-serif'],  // Para texto general
      },
    },
  },
  plugins: [
    animatePlugin,
    // Otros plugins si los necesitas (ej. forms, typography)
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