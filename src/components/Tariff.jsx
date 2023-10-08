import Button from "./../common/Button";
import bat from "../assets/bat.png";
import cat from "../assets/cat.png";
import spooky from "../assets/spooky.png";
import candy from "../assets/candy.png";
import hat from "../assets/hat.png";
import spooky2 from "../assets/spooky2.png";
import food from "../assets/food.png";
import boo from "../assets/boo.png";
const Tariff = () => {
   const tariffs = [
      {
         title: "Тариф Волшебные Олимпийские",
         people: "2-6 человек",
         loaction: "Локация: Олимпийская деревня",
         inclide: [
            "Проживание с 27 по 29",
            "Проживаниес 28 по 30",
            "Торжественный ужин, участие во всех мероприятиях",
         ],
         num: "46,000",
         img: cat,
      },
      {
         title: "Тариф Шале Чародеев",
         people: "6-10 человек",
         loaction: "Локация:  Шале",
         inclide: [
            "Проживание  27, 28 ИЛИ 29 октября",
            "Торжественный ужин, участие во всех мероприятиях",
         ],
         num: "55,000",
         img: candy,
      },
      {
         title: "Тариф Коттеджные Заклинатели",
         people: "6-10 человек",
         loaction: "Локация:  Коттедж",
         inclide: [
            "Проживание с 27 по 29",
            "Проживаниес 28 по 30",
            "Торжественный ужин, участие во всех мероприятиях",
         ],
         num: "70,000",
         img: hat,
      },
      {
         title: "Тариф Лесные Ведьмы",
         loaction: "Локация:  Лесная Резиденция   ",
         people: "6-10 человек",
         inclide: [
            "Проживание с 27 по 29",
            "Проживание с 28 по 30",
            "Торжественный ужин, участие во всех мероприятиях",
         ],
         num: "75,000",
         img: spooky,
      },
      {
         title: "Тариф  Дуплекс Загадок",
         people: "6-10 человек",
         loaction: "Локация:  Дуплекс",
         inclide: [
            "Проживание с 27 по 29",
            "Проживание с 28 по 30",
            "Торжественный ужин, участие во всех мероприятиях",
         ],
         num: "82,600",
         img: spooky2,
      },
   ];

   return (
      <div
         id="Tariff"
         className="bg-violet tarif bg-no-repeat bg-cover bg-center py-[10vh]"
      >
         <div className="wrapper">
            <h1 className="text-xl">Тарифы</h1>
            <p className="text-center text-lg mb-[5vh]">
               В эту таинственную ночь мы предлагаем вам следующие невероятные
               варианты размещения
            </p>
            <div className="flex droid flex-col">
               <div className="flex flex-col items-center justify-center gap-[100px]">
                  {tariffs.map((item, index) => {
                     return (
                        <div
                           key={index}
                           className="bg-pumpkin rounded-[16px] p-[2%]  max-w-[1000px] relative"
                        >
                           <div className="absolute -left-5 -top-15 text-xl">
                              0{index + 1}
                           </div>
                           <h1 className="text-center text-lg font-bold text-violet">
                              {item.title}
                           </h1>
                           <div className="border flex-col md:flex-row mb-[2%] border-violet mx-5 p-5  border-solid rounded-lg flex justify-between">
                              <div className="text-tarif">
                                 <p className="">{item.people}</p>
                                 <p className="">{item.loaction}</p>
                                 <div className="ml-[10%]">
                                    <h2 className="font-bold text-violet">
                                       Что включено
                                    </h2>
                                    <ul className="list-disc">
                                       {item.inclide.map((item, index) => (
                                          <li key={index}>{item}</li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                              <div className="flex items-center justify-center">
                                 <div className="rotate-0 md:rotate-90 text-xl font-bold">
                                    {item.num}
                                 </div>
                              </div>
                           </div>
                           <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-4">
                              <img
                                 src={item.img}
                                 className="w-[90px] h-[90px] md:w-[140px] md:h-[140px]"
                                 alt=""
                              />
                           </div>
                           <div>
                              <img
                                 className="absolute -bottom-10 rotate-45 -left-10 w-[170px] h-[140px]"
                                 src={bat}
                                 alt=""
                              />
                           </div>
                           <Button className="absolute right-0 bg-darkViolet text-pumpkin -bottom-5">
                              Забронировать место
                           </Button>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="bg-yellow w-full  box-border mt-[10vh] droid p-[5%] yellow-box text-lg shadow-xl flex flex-col md:flex-row justify-between rounded-[16px] min-h-[200px]">
                  <div className="">
                     <h1 className="text-black font-bold">
                        Вы можете добавить дополнительное
                        <br /> питание к любому тарифу
                     </h1>
                     <p className="text-violet text-md font-bold ">
                        Во все локации можно добавить
                        <br /> дополнительного гостя за 2000 (без спального
                        места)
                     </p>
                  </div>

                  <ul className="text-black flex flex-col items-center justify-center text-md">
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
            <Button className="bg-pumpkin btn-pum w-[300px] mb-[10vh] text-white mx-auto">
               Оставить заявку
            </Button>
            <div className="w-full relative flex items-center text-center justify-center">
               <div className="form relative bg-darkViolet p-[5%] rounded-[16px] shadow-2xl  w-[550px] h-[550px] text-center">
                  <div className="text-md mb-5">
                     Оставьте свои данные, и мы обязательно свяжемся с вами
                  </div>
                  <form action="">
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
                     </Button>
                  </form>
               </div>
               <img src={boo} className="absolute right-0 -bottom-20" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Tariff;
