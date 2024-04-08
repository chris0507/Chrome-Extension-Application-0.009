const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['placeholder'],
      opcaity: ['disabled'],
    },
  },
  plugins: [flowbite.plugin()],
};
