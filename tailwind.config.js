/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8f448a',
        'primary-600': '#75227d',
        "dark": '#262838',
        "gray": '#737480',
        "gray-secondary": '#c9cbd9',
      },
      fontFamily: {
        // primary: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '3xl': '1920px',
    },
  },
  plugins: [],
};
