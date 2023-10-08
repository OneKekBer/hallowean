import pumpkin from "../assets/pumpkin.png";
import bat from "../assets/bat.png";
import cotel from "../assets/cotel.png";
import arrow from "../assets/arrow.png";
import down_arrow from "../assets/down_arrow.png";
import Button from "./../common/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProgramaSwiper from "./ProgramaSwiper";

export const Programa = () => {
   return (
      <div id="Programa" className="program bg-violet py-[10vh] pb-[10vh]">
         <div className="wrapper relative">
            <h1 className="text-xl relative">
               Программа
               <div className="absolute left-10 -top-10 md:-top-[90px] text-ultra opacity-30">
                  Программа
               </div>
            </h1>
            <p className="text-center text-lg droid">
               Программа для празднования Хэллоуина в загородном клубе Икша
               Кантри Клаб с 27 по 29 октября:
            </p>
            <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 gap-10">
               <div className="flex flex-col max-w-[600px] justify-center items-center">
                  <img
                     className="w-[200px]  h-[200px] relative top-10 z-10"
                     src={pumpkin}
                     alt=""
                  />
                  <div className="bg-pumpkin relative rounded-[20px] p-[50px]">
                     <h2 className="text-md text-bold">Пятница, 27 октября</h2>
                     <h2 className="text-md text-bold">16:00 - 18:00</h2>
                     <h2 className="text-md mb-6 droid">
                        Регистрация и заселение гостей
                     </h2>
                     <h2 className="text-md text-bold">18:30 - 20:00</h2>
                     <h2 className="text-md mb-6 droid">
                        {" "}
                        Ужин в стиле Хэллоуина с участием ведьм и зомби (фуршет
                        на каждой локации)
                     </h2>
                     <h2 className="text-md text-bold">20:30 - 22:00 </h2>
                     <h2 className="text-md mb-6 droid">
                        Вечеринка с живой музыкой и DJ в Шатре Аниматоры
                        проведут игры и развлечения для детей, включая охоту за
                        сладостями и конкурс на лучший детский костюм
                     </h2>

                     <img
                        src={bat}
                        className="absolute -bottom-[150px] -right-[20%] "
                        alt=""
                     />
                  </div>
               </div>

               <div className="flex flex-col  max-w-[600px] justify-center items-center">
                  <img
                     className="w-[200px]  h-[200px] relative top-10 z-10"
                     src={cotel}
                     alt=""
                  />
                  <div className="bg-pumpkin relative rounded-[20px] p-[50px]">
                     <h2 className="text-md text-bold">Пятница, 28 октября</h2>
                     <h2 className="text-md text-bold">10:30 - 12:30</h2>
                     <h2 className="text-md  mb-6 droid">
                        Мастер-класс по созданию тыквенных фигур для детей и
                        взрослых в шатре Ворожба и гадание для всех желающих
                     </h2>
                     <h2 className="text-md text-bold">15:00 - 17:00</h2>
                     <h2 className="text-md  mb-6 droid">
                        Экскурсия по заброшенным местам Икшинского водохранилища
                     </h2>
                     <h2 className="text-md ">20:30 - 22:00</h2>
                     <h2 className="text-md text-bold  mb-6 droid">
                        Вечеринка с тематическими коктейлями для детей и
                        взрослых и шоу Зомби-бал. Костюмированный конкурс и
                        раздача призов
                     </h2>
                     <img
                        src={bat}
                        className="absolute scale-50 -rotate-90 -bottom-[150px] -right-[20%] "
                        alt=""
                     />
                  </div>
               </div>
            </div>
            <ProgramaSwiper />
            <Button className="bg-darkViolet mx-auto mt-[40px] text-pumpkin">
               Забронировать место
               <img src={arrow} className="w-9 h-5" alt="" />
            </Button>
            <Button className="bg-pumpkin mx-auto text-darkViolet">
               Посмотреть тарифы
               <img src={down_arrow} className="w-9 h-9" alt="" />
            </Button>
         </div>
      </div>
   );
};
