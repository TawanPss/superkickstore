/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:"#156FE7",
        orange:"#FC8418"},
      
      fontSize: {
        xs: 'clamp(0.4rem, 0.2rem + 0.2vw, 0.75rem)',
        sm: 'clamp(0.6rem, 0.3rem + 0.2vw, 1rem)',
        md: 'clamp(0.8rem, 0.4rem + 0.3vw, 1.25rem)',
        base: 'clamp(1rem, 0.5rem + 0.5vw, 1.5rem)',
        lg: 'clamp(1.15rem, 0.6rem + 0.5vw, 2rem)',
        xl: 'clamp(1.3rem, 0.7rem + 0.8vw, 3rem)',
        '2xl': 'clamp(1.45rem, 0.8rem + 0.8vw, 4rem)',
        '3xl': 'clamp(1.6rem, 0.9rem + 0.8vw, 5rem)',
        '4xl': 'clamp(1.75rem, 1rem + 1vw, 6rem)',
        '5xl': 'clamp(2rem, 1.1rem + 1vw, 7rem)',
    },
    },

  },
  plugins: [],
};
