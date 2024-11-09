/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kindle: {
          paper: '#f4f4f4',
          text: '#222222',
          border: '#d1d1d1',
          hover: '#e5e5e5',
          dark: {
            paper: '#1a1a1a',
            text: '#e5e5e5',
            border: '#333333',
            hover: '#2a2a2a'
          }
        }
      }
    },
  },
  plugins: [],
};