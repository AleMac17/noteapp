/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "bg-image-dots": "url('/src/assets/bg-image.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
