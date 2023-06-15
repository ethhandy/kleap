/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "#444444",
        "green-color": "#009933",
        "overlay-color": "rgba(0, 0, 0, 0.4)",
      },
      animation: {
        skeleton: "skeleton 1s linear infinite alternate",
      },
      keyframes: {
        skeleton: {
          "0%": { "background-color": "hsl(200, 20%, 70%)" },
          "100%": { "background-color": "hsl(200, 20%, 95%)" },
        },
      },
    },
  },
  plugins: [],
};
