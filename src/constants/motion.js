export const slideFromLeft = () => {
   return {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
   };
};

export const slideFromRight = () => {
   return {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
   };
};

export const scale = () => {
   return {
      hidden: { opacity: 0, scale: 0.6 },
      visible: { opacity: 1, scale: 1 },
   };
};
