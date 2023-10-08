import inst from "./../assets/inst.png";
import what from "./../assets/what.png";

const Footer = () => {
   return (
      <div className="bg-darkViolet">
         <div className="wrapper text-grey ">
            <div className="flex gap-5 py-5 justify-between">
               <div className="flex gap-5">
                  <div>Икша Кантри клуб 2023 </div>
                  <a
                     target="_blank"
                     rel="noreferrer"
                     href="https://www.instagram.com/ikshacountryclub/"
                  >
                     <img src={inst} alt="" />
                  </a>
                  <a href="tel:+7 985 909‑12‑02">
                     <img src={what} alt="" />
                  </a>
               </div>
               <div className="flex justify-center gap-10">
                  <a href="#Programa">Программа</a>
                  <a href="#Tariff">Тарифы</a>
                  <a href="tel:+7 985 909‑12‑02">Связаться со мной</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
