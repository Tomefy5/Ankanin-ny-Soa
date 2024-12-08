/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "ssm": "425px",
        "xsm": "630px",
        "smd": "968px",
        "avmob": "375px",
        "smpc": "1200px"
      },

      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        chewy: ['Chewy', 'serif'],
        buba: ['Buba']
      },
    },
  },
  plugins: [],
}

