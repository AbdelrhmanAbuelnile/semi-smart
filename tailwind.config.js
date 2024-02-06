/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryback": "#E7FCFF",
        "secondaryback": "#121212",
        "primary": "#E7FCFF",
        "secondary": "#06132C",
        "primaryOrange": "#0F1035",
        "LightBlue": "#2697B0",
        "darkerGray": "#B8B8B8",
        "darkGray": "#6B6B6B",
        "secondaryDarkLead": "#222C3C",
        "nav": "#121212",
        "secondaryLightLead": "#5DA5B7",
        "secondaryFieldLead": "#303E51",
        "ChartGreen": "#15CAB8",
        "chartRed": "#E2362F",
        "chartOrange": "#FF8548",
        "ChartGray": "#C4DEFF",
        "activeNavIcon": "#1D1D1D",
        "header": "#1E263388"
      },
      screens:{
        "largelaptop": "1400px",
      }
    },
  },
  plugins: [],
}

