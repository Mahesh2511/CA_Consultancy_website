module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F5132', // A deep, professional green
        'primary-hover': '#0A3822',
        'secondary': '#FBF9F1', // A warm, off-white
        'accent': '#B08D57', // A subtle gold accent
      }
    },
  },
  plugins: [],
};