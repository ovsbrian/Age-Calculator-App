import { Result } from "./components/Resultado";
import "./App.css";
import { Boton } from "./components/Boton";
import { Dates } from "./components/Dates";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-300 flex justify-center items-center">
        <div className=" bg-white h-auto w-4/5 p-6 rounded-lg rounded-br-full sm:w-128 sm:p-8">
          <div className="flex justify-center items-center sm:justify-start sm:gap-3">
            <Dates text={"Day"} />
            <Dates text={"Month"} />
            <Dates text={"Year"} />
          </div>
          <Boton />
          <div className="mt-8 sm:mt-0">
            <Result numero={38} texto={"years"} />
            <Result numero={20} texto={"months"} />
            <Result numero={20} texto={"days"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
