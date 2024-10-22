/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Poppins", "Roboto", "sans-serif"],
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ matchUtilities }) => {
      matchUtilities({
        group: (value) => ({
          [`@apply ${value.replaceAll(",", " ")}`]: {},
        }),
      });
    }),
  ],
};
