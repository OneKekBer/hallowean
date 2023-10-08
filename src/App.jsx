import Header from "./common/Header";
import Hero from "./components/Hero";
import { Programa } from "./components/Programa";
import Tariff from "./components/Tariff";

function App() {
   return (
      <div className="text-white">
         <Header />
         <Hero />
         <Programa />
         <Tariff />
         <div className="underline"></div>
      </div>
   );
}

export default App;
