/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
 
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        GV : ["Great Vibes", "cursive"],
        BN : ["Bona Nova SC", "serif"],
      }
    },
  },
  plugins: [],
});

