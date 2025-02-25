/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
        "custom-h": "calc(100dvh - 4rem)",
        "custom-1": "calc(100vh - 10vh)",
        "custom-w": "calc(100vw - 30vw)",
      },
      screens: {
        ssx: "390px",
        sx: "490px",
        xll: "1670px",
        fh: "1920px",
      },
    },
  },
  plugins: [],
}
