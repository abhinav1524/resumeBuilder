// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // ⛔ Prevent Tailwind from using modern color functions like oklch
  future: {
    respectDefaultRingColorOpacity: false,
    respectDefaultOpacityColorOpacity: false,
  },
}
