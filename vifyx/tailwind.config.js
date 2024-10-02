/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 34.902px 5.666px #D0D0D0" // Adjust color or opacity as needed
      }
    }
  },
  plugins: []
};
