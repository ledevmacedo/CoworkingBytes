/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        zinc: {
          '50': '#000009',
          '100': '#030122',
          '200': '#0C023B',
          '300': '#150B54',
          '400': '#1E146D',
          '500': '#281D86',
          '600': '#31229F',
          '700': '#3929B8',
          '800': '#4731D1',
          '900': '#4731D1', // Máximo (repetido para consistência)
          '950': '#4731D1', // Máximo (repetido para consistência)
        },
      },
      boxShadow: {
        custom: '0px 23px 41px 9px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
