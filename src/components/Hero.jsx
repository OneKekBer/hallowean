// import bg_hero from "./assets/";

import Button from "../common/Button";
import arrow from "../assets/arrow.png";
const Hero = () => {
   return (
      <div
         id="Hero"
         className={`hero min-h-[90vh] text-center gap-5  bg-no-repeat bg-cover `}
         // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
      >
         <div className="wrapper flex items-center min-h-[90vh] justify-center flex-col p-5">
            <div className="text-lg mb-10">
               <span className="text-pumpkin text-xl">HALLOWEEN</span>
               <br /> в Икша Кантри Клубе!
            </div>
            <div className="text-md">
               Хэллоуин – это один из самых ожидаемых праздников в Загородном
               клубе Икра Кантри Клуб в Подмосковье! Каждый год клуб организует
               уникальное и захватывающее мероприятие, чтобы погрузить своих
               гостей в мистическую и веселую атмосферу этого праздника.
            </div>
            <Button className=" bg-darkViolet text-pumpkin  ">
               Забронировать место
               <img src={arrow} className="w-9 h-5" alt="" />
            </Button>
         </div>
      </div>
   );
};

export default Hero;
