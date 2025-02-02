const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spinGradient: {
          from: { '--tw-angle': '0deg' },
          to: { '--tw-angle': '360deg' },
        },
      },
      animation: {
        'spin-gradient': 'spinGradient 3s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.blur-xl': {
          filter: 'blur(1.5rem)',
        },
      });
    }),
  ],
};
