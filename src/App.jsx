import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-300 flex justify-center items-center">
        <div className=" bg-white h-auto w-4/5 p-6 rounded-lg rounded-br-full sm:w-128 sm:p-8">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
