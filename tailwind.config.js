/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         ultra: "clamp(48px, 10vw, 128px)",
         tarif: "clamp(6px, 4vw, 24px)",
         xl: "clamp(40px, 10vw, 80px)",
         lg: "clamp(3px, 3vw, 32px)",
         md: "clamp(10px, 4vw, 28px)",
         sm: "clamp(10px, 8vw, 18px)",
         small: "clamp(6px, 4vw, 18px)",
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
