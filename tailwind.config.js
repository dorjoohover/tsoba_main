module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./src/components/**/*.{js, ts, tsx, jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
