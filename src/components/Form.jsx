import { Boton } from "./Boton";

import { Dates } from "./Dates";
import { Result } from "./Resultado";

export const Form = () => {
  return (
    <>
      <form>
        <div className="flex justify-center items-center sm:justify-start sm:gap-3">
          <Dates id={"dayInput"} text="day" textFondo="dd" />
          <Dates id={"monthInput"} text="month" textFondo="mm" />
          <Dates id={"yearInput"} text="year" textFondo="yyyy" />
        </div>
        <Boton />
      </form>
      <div className="mt-8 sm:mt-0">
        <Result texto={"years"} />
        <Result texto={"months"} />
        <Result texto={"days"} />
      </div>
    </>
  );
};
