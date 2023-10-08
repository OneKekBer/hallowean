import Header from "./common/Header";
import Hero from "./components/Hero";
import { Programa } from "./components/Programa";
import Tariff from "./components/Tariff";
import Footer from "./common/Footer";

function App() {
   return (
      <div className="text-white ">
         <Header />
         <Hero />
         <Programa />
         <Tariff />
         <Footer />
      </div>
   );
}

export default App;
