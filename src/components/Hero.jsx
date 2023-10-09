// import bg_hero from "./assets/";

import Button from "../common/Button";
import arrow from "../assets/arrow.png";
import Reveal from "../common/Reveal";
const Hero = () => {
   return (
      <div
         id="Hero"
         className={`hero min-h-[90vh] text-center gap-5  bg-no-repeat bg-cover `}
         // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
      >
         <div className="wrapper flex items-center min-h-[90vh] justify-center flex-col p-5">
            <Reveal delay={0.25}>
               <div className="text-[20px] font-light  md:text-[30px] mb-10">
                  <span className="text-pumpkin eng text-xl">HALLOWEEN</span>
                  <br /> в Икша Кантри Клубе!
               </div>
            </Reveal>
            <Reveal delay={0.5}>
               <div className="text-md droid">
                  Хэллоуин – это один из самых ожидаемых праздников в Загородном
                  клубе Икра Кантри Клуб в Подмосковье! Каждый год клуб
                  организует уникальное и захватывающее мероприятие, чтобы
                  погрузить своих гостей в мистическую и веселую атмосферу этого
                  праздника.
               </div>
            </Reveal>
            <Button className=" bg-darkViolet text-pumpkin  ">
               Забронировать место
               <img src={arrow} className="w-9 h-5" alt="" />
            </Button>
         </div>
      </div>
   );
};

export default Hero;
