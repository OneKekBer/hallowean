// import bg_hero from "./assets/";

const Hero = () => {
   return (
      <div
         className={`hero min-h-[80vh] text-center gap-5 flex items-center justify-center flex-col p-5 bg-no-repeat bg-cover `}
         // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
      >
         <div className="text-lg ">
            <span className="text-pumpkin text-xl">HALLOWEEN</span>
            <br /> в Икша Кантри Клубе!
         </div>
         <div className="text-md">
            Хэллоуин – это один из самых ожидаемых праздников в Загородном клубе
            Икра Кантри Клуб в Подмосковье! Каждый год клуб организует
            уникальное и захватывающее мероприятие, чтобы погрузить своих гостей
            в мистическую и веселую атмосферу этого праздника.
         </div>
         <div className="rounded-[100px] bg-darkViolet text-pumpkin text-sm w-[400px] min-h-[100px] p-5 flex items-center justify-center">
            Забронировать место
         </div>
      </div>
   );
};

export default Hero;
