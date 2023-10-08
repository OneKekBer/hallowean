// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick, style }) => {
   return (
      <div
         style={style}
         onClick={onClick}
         className={`cursor-pointer px-4 z-10 mt-10 font-bold text-tarif  md:w-[240px] gap-1 h-[50px] md:h-[75px] rounded-[100px] flex justify-center hover:opacity-40 duration-300 items-center  ${
            className || ""
         } `}
      >
         {children}
         {/* <img src={arrow} alt="" /> */}
      </div>
   );
};

export default Button;
