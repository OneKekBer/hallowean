import Button from "./../common/Button";
import bat from "../assets/bat.png";
import cat from "../assets/cat.png";
import spooky from "../assets/spooky.png";
import candy from "../assets/candy.png";
import hat from "../assets/hat.png";
import spooky2 from "../assets/spooky2.png";
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
      <div className="bg-violet">
         <div className="wrapper">
            <h1 className="text-xl">Тарифы</h1>
            <p className="text-center text-lg ">
               В эту таинственную ночь мы предлагаем вам следующие невероятные
               варианты размещения
            </p>
            <div className="flex droid flex-col">
               <div className="flex flex-col gap-[100px]">
                  {tariffs.map((item, index) => {
                     return (
                        <div
                           key={index}
                           className="bg-pumpkin rounded-[16px] p-[30px]  max-w-[1000px] relative"
                        >
                           <div className="absolute -left-10 -top-20 text-xl">
                              {index + 1}
                           </div>
                           <h1 className="text-center text-lg font-bold text-violet">
                              {item.title}
                           </h1>
                           <div className="border mb-[60px] border-violet mx-5 p-5  border-solid rounded-lg flex justify-between">
                              <div className="text-md">
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
                                 <div className="rotate-90 text-xl font-bold">
                                    {item.num}
                                 </div>
                              </div>
                           </div>
                           <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-10">
                              <img
                                 src={item.img}
                                 className="w-[140px] h-[140px]"
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
         </div>
      </div>
   );
};

export default Tariff;
