/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        1: "#f5f5f5",
        2: "#ffffff",
        3: "#000000",
        4: "#202020",
        5: "#1c232e",
      },
      spacing: {
        "custom-h": "calc(100vh - 4rem)",
        "custom-1": "calc(100vh - 10vh)",
        "custom-w": "calc(100vw - 30vw)",
      },
      screens: {
        sx: "490px",
        xll: "1670px",
      },
    },
  },
  plugins: [],
}

