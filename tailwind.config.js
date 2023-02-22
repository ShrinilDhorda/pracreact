/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite"

      },
      animation: {
        bigbounce: "bigbounce 1s   infinite"

      },
      keyframes: {
        blob: {
          "0%": {
            transform: " translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "  translate(-2px,2px)  scale(1.02)",
          },
          "66%": {
            transform: " translate(3px,-8px)  scale(0.95)",
          },
          "100%": {
            transform: " translate(0px,0px) scale(1)",
          }
        },
        bigbounce: {
          "0%": {
            transform: " translate(0px,0px) ",

          },
          "50%": {
            transform: " translate(0px,-100px) ",

          },


        }
      }
    },
  },
  plugins: [],
}