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
        // Colores originales que mantienes
        'neon-cyan': '#00e5ff',
        'neon-pink': '#ec4899',
        'neon-green': '#22c55e',
        'neon-yellow': '#eab308',

        // Nuevos colores más bonitos
        'midnight-indigo': '#1e1b4b',   // Fondo profundo y elegante
        'aurora-teal': '#34d399',       // Teal vibrante y fresco
        'sunset-rose': '#fb7185',       // Rosa cálido y moderno
        'starlight-violet': '#a78bfa',  // Violeta claro y sofisticado
        'moon-glow': '#f8fafc',         // Blanco cremoso para contraste

        // Resto de tus colores originales
        'mountain-brown': {
          100: '#f5e8d9',
          200: '#e2c16b',
          300: '#d1a754',
          500: '#8B4513',
          600: '#5a371a',
          700: '#3f2612',
        },
        'trail-blue': {
          100: '#e6f4fa',
          300: '#66c9e8',
          500: '#00AEEF',
          700: '#0088c2',
        },
        'forest-green': {
          100: '#ccffcc',
          300: '#66cc66',
          500: '#006600',
          700: '#004d00',
        },
        'stone-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          400: '#9ca3af',
          700: '#374151',
        },
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
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
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
        glow: {
          '0%, 100%': { filter: 'brightness(100%)' },
          '50%': { filter: 'brightness(120%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    animatePlugin,
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