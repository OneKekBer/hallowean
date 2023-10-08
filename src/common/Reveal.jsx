import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const Reveal = ({ children, delay = 0.25 }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const animation = useAnimation();

   useEffect(() => {
      if (isInView) {
         animation.start("visible");
         console.log("вижу его!");
      }
   }, [isInView, animation]);

   return (
      <div ref={ref}>
         <motion.div
            variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.5, delay: delay }}
         >
            {children}
         </motion.div>
      </div>
   );
};

export default Reveal;
