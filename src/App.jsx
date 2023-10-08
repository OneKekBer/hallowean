import Header from "./common/Header";
import Hero from "./components/Hero";
import { Programa } from "./components/Programa";

function App() {
   return (
      <div className="text-white">
         <Header />
         <Hero />
         <Programa />
         <div className="underline"></div>
      </div>
   );
}

export default App;
