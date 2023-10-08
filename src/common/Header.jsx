import menu from "./../assets/menu.png";
import { useState } from "react";
const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <div className="bg-darkViolet">
         <div className="wrapper text-grey ">
            {" "}
            <div className="flex  py-5 justify-between">
               <div>Икша Кантри клуб</div>
               <ul className="md:flex hidden gap-10">
                  <li>Программа</li>
                  <li>Тарифы</li>
                  <li>Связаться со мной</li>
               </ul>
               <div
                  onClick={() => {
                     setIsMenuOpen(!isMenuOpen);
                  }}
                  className="flex md:hidden"
               >
                  <img src={menu} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
