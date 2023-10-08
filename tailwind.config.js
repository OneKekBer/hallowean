/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         xl: "clamp(64px, 15vw, 90px)",
         lg: "40px",
         md: "clamp(12px, 15vw, 28px)",
         sm: "18px",
      },
      extend: {
         colors: {
            violet: "#412E52",
            darkViolet: "#22182B",
            grey: "#C5C3C3",
            pumpkin: "#FF7A00",
         },
      },
   },
   plugins: [],
};
