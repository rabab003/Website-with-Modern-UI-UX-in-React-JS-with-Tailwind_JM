import Btn from "./Components/Btn";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header } from "./Components/Header";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">hello </h1> */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
