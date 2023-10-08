/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            darkViolet: "#22182B",
            grey: "#C5C3C3",
         },
      },
   },
   plugins: [],
};
