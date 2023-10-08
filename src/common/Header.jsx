const Header = () => {
   return (
      <div className="bg-darkViolet">
         <div className="wrapper text-grey ">
            {" "}
            <div className="flex  py-5 justify-between">
               <div>Икша Кантри клуб</div>
               <ul className="md:flex hidden gap-10">
                  <li>Программа</li>
                  <li>Тарифы</li>
                  <li>Связаться со мной</li>
               </ul>
               <div className="flex md:hidden">menu button</div>
            </div>
         </div>
      </div>
   );
};

export default Header;
