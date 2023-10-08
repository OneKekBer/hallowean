import pumpkin from "../assets/pumpkin.png";
import bat from "../assets/bat.png";
import cotel from "../assets/cotel.png";
import Button from "./../common/Button";
import { useRef } from "react";
import swiper1 from "./../assets/swiper/1.png";
import swiper2 from "./../assets/swiper/2.png";
import swiper3 from "./../assets/swiper/3.png";
import swiper4 from "./../assets/swiper/4.png";

import scroll from "./../assets/scroll.png";
import orange_scroll from "./../assets/orange_scroll.png";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Programa = () => {
   const swiperRef = useRef();

   return (
      <div className="program bg-violet">
         <div className="wrapper">
            <h1 className="text-xl">Программа</h1>
            <p className="text-center text-lg ">
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
                     <h2 className="text-md ">
                        Регистрация и заселение гостей
                     </h2>
                     <h2 className="text-md text-bold">18:30 - 20:00</h2>
                     <h2 className="text-md ">
                        {" "}
                        Ужин в стиле Хэллоуина с участием ведьм и зомби (фуршет
                        на каждой локации)
                     </h2>
                     <h2 className="text-md text-bold">20:30 - 22:00 </h2>
                     <h2 className="text-md ">
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
                     <h2 className="text-md ">
                        Мастер-класс по созданию тыквенных фигур для детей и
                        взрослых в шатре Ворожба и гадание для всех желающих
                     </h2>
                     <h2 className="text-md text-bold">15:00 - 17:00</h2>
                     <h2 className="text-md ">
                        Экскурсия по заброшенным местам Икшинского водохранилища
                     </h2>
                     <h2 className="text-md ">20:30 - 22:00</h2>
                     <h2 className="text-md text-bold">
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

            <Button className="bg-darkViolet mx-auto mt-[40px] text-pumpkin">
               Забронировать место
            </Button>
            <Button className="bg-pumpkin mx-auto text-darkViolet">
               Посмотреть тарифы
            </Button>

            <div>
               <Swiper
                  // install Swiper modules
                  modules={[Pagination, Navigation]}
                  spaceBetween={50}
                  loop={true}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="swiper h-[60vh] relative mt-10 rounded-lg "
                  onBeforeInit={(swiper) => {
                     swiperRef.current = swiper;
                  }}
               >
                  <SwiperSlide>
                     <img
                        src={swiper1}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src={swiper2}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src={swiper3}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src={swiper4}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>
                  <div
                     className="absolute md:block hidden top-1/2 transform -translate-y-1/2 z-10 right-10"
                     onClick={() => swiperRef.current?.slideNext()}
                  >
                     <img src={scroll} className="w-[90px] h-[90px]" alt="" />
                  </div>
               </Swiper>
               <div className="w-full flex md:hidden justify-end">
                  <img
                     src={orange_scroll}
                     className="w-[50px] h-[50px]"
                     onClick={() => swiperRef.current?.slideNext()}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
