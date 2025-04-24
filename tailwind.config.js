const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,css}", // <-- Add 'css' here
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        '3xl': '1.875rem', // 30px (default Tailwind value)
      }
    },
  },
};
