/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         tarif: "clamp(6px, 5vw, 24px)",
         xl: "clamp(64px, 8vw, 90px)",
         lg: "clamp(30px, 8vw, 40px)",
         md: "clamp(12px, 8vw, 28px)",
         sm: "clamp(10px, 8vw, 18px)",
      },
      extend: {
         colors: {
            violet: "#412E52",
            darkViolet: "#22182B",
            grey: "#C5C3C3",
            pumpkin: "#FF7A00",
            yellow: "#FFEC44",
         },
      },
   },
   plugins: [],
};
