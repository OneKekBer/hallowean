// import bg_hero from "./assets/";

import Button from "../common/Button";
import arrow from "../assets/arrow.png";
import Reveal from "../common/Reveal";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
   return (
      <div
         id="Hero"
         className={`hero min-h-[90vh]  text-center gap-5 bg-center bg-no-repeat bg-cover `}
         // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
      >
         <div className="wrapper window bg-opacity-60   flex items-center  min-h-[90vh] justify-center flex-col p-10">
            <Reveal delay={0.25}>
               <div className="text-[20px] font-light  md:text-[30px] mb-10">
                  <span className="text-pumpkin eng text-xl">HALLOWEEN</span>
                  <br /> в Икша Кантри Клабе!
               </div>
            </Reveal>
            <Reveal delay={0.5}>
               <div className="text-md droid">
                  Хэллоуин – это один из самых ожидаемых праздников в Загородном
                  клабе Икша Кантри Клаб в Подмосковье! Каждый год Клаб
                  организует уникальное и захватывающее мероприятие, чтобы
                  погрузить своих гостей в мистическую и веселую атмосферу этого
                  праздника.
               </div>
            </Reveal>
            <ScrollLink
               to="Tariff"
               smooth={true}
               duration={1000} // Длительность анимации скролла (в миллисекундах)
            >
               <Button className=" bg-darkViolet text-pumpkin  ">
                  Забронировать место
                  <img src={arrow} className="w-9 h-5" alt="" />
               </Button>
            </ScrollLink>
         </div>
      </div>
   );
};

export default Hero;
