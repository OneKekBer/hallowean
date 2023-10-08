import pumpkin from "../assets/pumpkin.png";
import bat from "../assets/bat.png";

export const Programa = () => {
   return (
      <div className="bg-darkViolet">
         <div className="wrapper">
            <h1 className="text-xl">Программа</h1>
            <p className="text-center text-lg ">
               Программа для празднования Хэллоуина в загородном клубе Икша
               Кантри Клаб с 27 по 29 октября:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className="flex flex-col justify-center items-center">
                  <img
                     className="w-[200px]  h-[200px] relative top-10 z-10"
                     src={pumpkin}
                     alt=""
                  />
                  <div className="bg-pumpkin relative rounded-[20px] p-[50px]">
                     <h2 className="text-lg">Пятница, 27 октября</h2>
                     <p className="text-md">Регистрация и заселение гостей</p>
                     <h2 className="text-lg">18:30 - 20:00</h2>
                     <p className="text-md">
                        {" "}
                        Ужин в стиле Хэллоуина с участием ведьм и зомби (фуршет
                        на каждой локации)
                     </p>
                     <h2 className="text-lg">20:30 - 22:00 </h2>
                     <p className="text-md">
                        Вечеринка с живой музыкой и DJ в Шатре Аниматоры
                        проведут игры и развлечения для детей, включая охоту за
                        сладостями и конкурс на лучший детский костюм
                     </p>
                     <img
                        src={bat}
                        className="absolute -bottom-[100px] -right-[20%] "
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
