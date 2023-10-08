import menu from "./../assets/menu.png";
import close from "./../assets/close.png";

import { AnimatePresence, motion } from "framer-motion";

const menuVars = {
   initial: {
      opacity: 0,
   },

   animate: {
      opacity: 1,
      transition: {
         duration: 0.5,
         staggerChildren: 0.2,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const navVars = {
   initial: {
      opacity: 0,
      // y: 50,
   },

   animate: {
      opacity: 1,
      // y: 0,
      transition: {
         duration: 0.3,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const links = [
   { title: "Программа", link: "#Programa" },
   { title: "Тарифы", link: "#Tariff" },
   { title: "Связаться со мной", link: "tel:+7 985 909‑12‑02" },
];
// eslint-disable-next-line react/prop-types
const Header = ({ toggleMenu, isMenuOpen }) => {
   return (
      <div className="bg-darkViolet">
         <AnimatePresence>
            <div className="wrapper  ">
               {isMenuOpen && (
                  <div className="inset-0 flex md:hidden fixed bg-slate-100 z-20 bg-opacity-60 w-full h-full">
                     <motion.div
                        key="menu" // Make sure to specify a unique key
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="duration-300 fixed w-[70%] h-[40%] flex items-center justify-center rounded-[5px] z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet p-5"
                     >
                        <div
                           className="absolute right-2 top-2"
                           onClick={toggleMenu}
                        >
                           <img src={close} alt="" />
                        </div>
                        <ul className="text-center text-grey gap-10">
                           {links.map((link, i) => {
                              return (
                                 <motion.li
                                    onClick={toggleMenu}
                                    className="text-md"
                                    variants={navVars}
                                    key={i}
                                 >
                                    <a href={link.link}>{link.title}</a>
                                 </motion.li>
                              );
                           })}
                        </ul>
                     </motion.div>
                  </div>
               )}
               <div className="flex  py-5 justify-between">
                  <div>Икша Кантри клуб</div>
                  <ul className="md:flex hidden gap-10">
                     {links.map((link, i) => {
                        return (
                           <li key={i}>
                              <a href={link.link}>{link.title}</a>
                           </li>
                        );
                     })}
                  </ul>
                  <div onClick={toggleMenu} className="flex md:hidden">
                     <img src={menu} alt="" />
                  </div>
               </div>
            </div>
         </AnimatePresence>
      </div>
   );
};

export default Header;
