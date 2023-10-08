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
                  <li>
                     <a href="#Programa">Программа</a>
                  </li>
                  <li>
                     <a href="#Tariff">Тарифы</a>
                  </li>
                  <li>
                     <a href="tel:+7 985 909‑12‑02">Связаться со мной</a>
                  </li>
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
