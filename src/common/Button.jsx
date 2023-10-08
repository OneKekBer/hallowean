// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick, style }) => {
   return (
      <div
         style={style}
         onClick={onClick}
         className={`cursor-pointer mt-10 w-[320px] gap-3 h-[75px] rounded-[100px] flex justify-center hover:opacity-40 duration-300 items-center  ${
            className || ""
         } `}
      >
         {children}
         {/* <img src={arrow} alt="" /> */}
      </div>
   );
};

export default Button;
