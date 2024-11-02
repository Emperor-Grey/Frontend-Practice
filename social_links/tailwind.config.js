/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'hsl(0, 0%, 8%)',
        darker: 'hsl(0, 0%, 12%)',
        accent: 'hsl(75, 94%, 57%)',
        white: '#ffffff',
        lighter: 'hsl(0, 0%, 20%)',
      },
      fontFamily: {
        inter: 'Inter',
      },
    },
  },
  plugins: [],
};
