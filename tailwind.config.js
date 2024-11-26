/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        1: "#f5f5f5",
        2: "#ffffff",
        3: "#000000",
        4: "#222a36",
        5: "#1c232e",
      },
      spacing: {
        "custom-h": "calc(70vh)",
      },
    },
  },
  plugins: [],
}

