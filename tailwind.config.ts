import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4CAF50',
          pink: '#E91E8A',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
