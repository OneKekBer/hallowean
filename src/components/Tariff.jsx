import Button from "./../common/Button";
// import bat from "../assets/bat.png";
// import cat from "../assets/cat.png";
// import spooky from "../assets/spooky.png";
// import candy from "../assets/candy.png";
// import hat from "../assets/hat.png";
// import spooky2 from "../assets/spooky2.png";
import food from "../assets/food.png";
import boo from "../assets/boo.png";
import arrow from "../assets/arrow.png";
import down_arrow from "../assets/down_arrow.png";
import TariffComponents from "./TarrifComponents";
import Reveal from "../common/Reveal";
import { slideFromRight } from "../constants/motion";
import { slideFromLeft } from "./../constants/motion";
const Tariff = () => {
   // const tariffs = [
   //    {
   //       title: "Тариф Волшебные Олимпийские",
   //       people: "2-6 человек",
   //       loaction: "Локация: Олимпийская деревня",
   //       inclide: [
   //          "Проживание с 27 по 29",
   //          "Проживаниес 28 по 30",
   //          "Торжественный ужин, участие во всех мероприятиях",
   //       ],
   //       num: "46,000",
   //       img: cat,
   //    },
   //    {
   //       title: "Тариф Шале Чародеев",
   //       people: "6-10 человек",
   //       loaction: "Локация:  Шале",
   //       inclide: [
   //          "Проживание  27, 28 ИЛИ 29 октября",
   //          "Торжественный ужин, участие во всех мероприятиях",
   //       ],
   //       num: "55,000",
   //       img: candy,
   //    },
   //    {
   //       title: "Тариф Коттеджные Заклинатели",
   //       people: "6-10 человек",
   //       loaction: "Локация:  Коттедж",
   //       inclide: [
   //          "Проживание с 27 по 29",
   //          "Проживаниес 28 по 30",
   //          "Торжественный ужин, участие во всех мероприятиях",
   //       ],
   //       num: "70,000",
   //       img: hat,
   //    },
   //    {
   //       title: "Тариф Лесные Ведьмы",
   //       loaction: "Локация:  Лесная Резиденция   ",
   //       people: "6-10 человек",
   //       inclide: [
   //          "Проживание с 27 по 29",
   //          "Проживание с 28 по 30",
   //          "Торжественный ужин, участие во всех мероприятиях",
   //       ],
   //       num: "75,000",
   //       img: spooky,
   //    },
   //    {
   //       title: "Тариф  Дуплекс Загадок",
   //       people: "6-10 человек",
   //       loaction: "Локация:  Дуплекс",
   //       inclide: [
   //          "Проживание с 27 по 29",
   //          "Проживание с 28 по 30",
   //          "Торжественный ужин, участие во всех мероприятиях",
   //       ],
   //       num: "82,600",
   //       img: spooky2,
   //    },
   // ];

   return (
      <div
         id="Tariff"
         className="bg-violet tarif bg-no-repeat bg-cover bg-center py-[5vh]"
      >
         <div className="wrapper">
            <Reveal duration={1.5} variants={slideFromRight(-500)}>
               <h1 className="text-xl relative">
                  Программа
                  <div className="absolute left-10 -top-10 md:-top-[90px] text-ultra opacity-30">
                     Программа
                  </div>
               </h1>
               <p className="text-center text-lg droid mb-[5vh]">
                  В эту таинственную ночь мы предлагаем вам следующие
                  невероятные варианты размещения
               </p>
            </Reveal>
            <div className="flex droid flex-col">
               <TariffComponents />
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="bg-yellow w-full items-center  box-border mt-[10vh] droid p-[5%] yellow-box text-tarif shadow-xl flex  justify-between rounded-[16px] min-h-[200px]">
                  <div className="">
                     <h1 className="text-black font-bold">
                        Вы можете добавить дополнительное
                        <br /> питание к любому тарифу
                     </h1>
                     <p className="text-violet text-tarif font-bold ">
                        Во все локации можно добавить
                        <br /> дополнительного гостя за 2000 (без спального
                        места)
                     </p>
                  </div>

                  <ul className="text-black flex flex-col items-center justify-center text-small">
                     <li>
                        Завтрак <span className="font-bold"> 700</span>
                     </li>{" "}
                     <li>
                        Обед <span className="font-bold"> 1800</span>
                     </li>
                     <li>
                        Ужин <span className="font-bold"> 1200</span>
                     </li>
                  </ul>
               </div>
               <img src={food} alt="" />
            </div>
            <Button className="bg-pumpkin btn-pum mb-[10vh] text-white mx-auto">
               Оставить заявку
               <img src={down_arrow} className="w-7 h-7" alt="" />
            </Button>
            <div className="w-full relative flex items-center text-center justify-center">
               <Reveal duration={1.5} variants={slideFromLeft()}>
                  <div className="form relative bg-darkViolet p-[5%] rounded-[16px] shadow-2xl  w-[550px] h-[550px] text-center">
                     <div className="text-md mb-5 droid">
                        Оставьте свои данные, и мы обязательно свяжемся с вами
                     </div>
                     <form className="droid" action="">
                        <input
                           type="text"
                           placeholder="Имя"
                           className="rounded-[20px] p-2 mb-5 text-black h-[50px] w-full bg-grey"
                        />
                        <input
                           type="text"
                           placeholder="Телефон"
                           className="rounded-[20px] p-2 text-black h-[50px] w-full bg-grey"
                        />
                        <Button className="bg-pumpkin w-1/2 h-[40px] mx-auto btn-pum text-white">
                           Отправить
                           <img src={arrow} className="w-9 h-5" alt="" />
                        </Button>
                     </form>
                  </div>
               </Reveal>

               <img src={boo} className="absolute right-0 -bottom-20" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Tariff;
