/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'aa-primary-dark': '#062E6B',
        'aa-primary': '#0A2164',
        'aa-blue-primary': '#0150AC',
        'aa-blue-bright': '#007ED5',
        'aa-blue-light': '#00ADEF',
        'aa-cyan': '#15CED4',
        'aa-cyan-light': '#60E6FF',
      },
    },
  },
  plugins: [],
};
