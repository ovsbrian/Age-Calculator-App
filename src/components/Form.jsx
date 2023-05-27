import { useState } from "react";
import { Boton } from "./Boton";
import { Dates } from "./Dates";
import { Result } from "./Resultado";
import { calcularEdad } from "../functions/functions";

export const Form = () => {
  const [edad, setEdad] = useState(0);
  const [meses, setMeses] = useState(0);
  const [dias, setDias] = useState(0);
  const [errorFecha, setErrorFecha] = useState({
    day: false,
    month: false,
    year: false,
  });
  const [fechaNoValida, setFechaNoValida] = useState({
    day: false,
    month: false,
    year: false,
  });

  const calcularEdadOnClick = (e) => {
    e.preventDefault();
    let day = document.getElementById("dayInput").value;
    let month = document.getElementById("monthInput").value;
    let year = document.getElementById("yearInput").value;
    setErrorFecha({ day: false, month: false, year: false });
    setFechaNoValida({ day: false, month: false, year: false });
    if (day && year && month) {
      const result = calcularEdad(
        parseInt(year),
        parseInt(month),
        parseInt(day)
      );
      result === null
        ? setFechaNoValida({
            day: day < 1 || day > new Date(year, month, 0).getDate(),
            month: month < 1 || month > 12,
            year: year > new Date().getFullYear(),
          })
        : (setEdad(result.edad), setMeses(result.meses), setDias(result.dias));
    } else {
      setErrorFecha({
        day: !day,
        month: !month,
        year: !year,
      });
    }
  };
  return (
    <>
      <form onSubmit={calcularEdadOnClick}>
        <div className="flex justify-center items-center sm:justify-start sm:gap-3">
          <Dates
            id={"dayInput"}
            text="day"
            textFondo="dd"
            errore={errorFecha.day}
            noValid={fechaNoValida.day}
            nombre="day"
          />
          <Dates
            id={"monthInput"}
            text="month"
            textFondo="mm"
            errore={errorFecha.month}
            noValid={fechaNoValida.month}
            nombre="month"
          />
          <Dates
            id={"yearInput"}
            text="year"
            textFondo="yyyy"
            errore={errorFecha.year}
            noValid={fechaNoValida.year}
            nombre="year"
          />
        </div>
        <Boton />
      </form>
      <div className="mt-8 sm:mt-0">
        <Result texto={"years"} numero={edad} />
        <Result texto={"months"} numero={meses} />
        <Result texto={"days"} numero={dias} />
      </div>
    </>
  );
};
