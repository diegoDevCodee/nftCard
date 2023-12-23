/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyanNft: "hsl(178, 100%, 50%)",
        mainBg: "hsl(217, 54%, 11%)",
        cardBg: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
        whiteNft: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
