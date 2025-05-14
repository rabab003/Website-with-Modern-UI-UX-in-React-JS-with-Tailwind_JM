import Btn from "./Components/Btn";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">hello </h1> */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
      <Collaboration />
    </>
  );
}

export default App;

// 1:46:49
