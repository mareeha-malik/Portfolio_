/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8EE',
        ink: '#20201C',
        pink: {
          DEFAULT: '#FF6FA0',
          soft: '#FFE1EC',
        },
        blue: {
          DEFAULT: '#3A5BFF',
          soft: '#E3E8FF',
        },
        mint: '#BFEFC0',
        yellow: '#FFD23F',
      },
      fontFamily: {
        display: ['Ribeye', 'cursive'],
        combo: ['"Combo"', 'cursive'], // 👈 Add this
        hand: ['"Sue Ellen Francisco"', 'cursive'],
        body: ['Poppins', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        blob: '40% 60% 55% 45% / 55% 45% 60% 40%',
      },
    },
  },
  plugins: [],
}