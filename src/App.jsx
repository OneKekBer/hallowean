import Header from "./common/Header";
import Hero from "./components/Hero";
import { Programa } from "./components/Programa";
import Tariff from "./components/Tariff";
import Footer from "./common/Footer";
import { useState } from "react";

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
   };
   return (
      <div className="text-white ">
         <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
         <div className={`${isMenuOpen ? "blur-xl" : ""}`}>
            <Hero />
            <Programa />
            <Tariff />
            <Footer />
         </div>
      </div>
   );
}

export default App;
