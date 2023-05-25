import { useState } from "react";
import { Boton } from "./Boton";

import { Dates } from "./Dates";
import { Result } from "./Resultado";

const calcularEdad = (año, mes, dia) => {
  const today = new Date();
  let edad = today.getFullYear() - año;
  let meses = today.getMonth() + 1 - mes;
  let dias = today.getDate() - dia;

  if (dias < 0 || edad < 0 || mes === 0 || mes < 0 || mes > 12) {
    return null;
  }
  if (meses < 0 || (meses === 0 && dias < 0)) {
    edad--;
    meses += 12;
  }

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(edad, meses, 0);
    dias += ultimoMes.getDate();
  }
  return { edad, meses, dias };
};

export const Form = () => {
  const [edad, setEdad] = useState(0);
  const [mes, setMes] = useState(0);
  const [dia, setDia] = useState(0);

  const ver = (e) => {
    e.preventDefault();
    let day = document.getElementById("dayInput").value;
    let month = document.getElementById("monthInput").value;
    let year = document.getElementById("yearInput").value;

    if (
      day.length > 2 ||
      month.length > 2 ||
      year.length < 4 ||
      year.length > 4
    ) {
      alert(
        "Por favor, ingrese un máximo de 2 dígitos para el día y el mes, y un mínimo y máximo de 4 dígitos para el año"
      );
    } else if ((day, year, month)) {
      const result = calcularEdad(year, month, day);
      setEdad(result.edad);
      setMes(result.meses);
      setDia(result.dias);
    }
  };

  return (
    <>
      <form onSubmit={ver}>
        <div className="flex justify-center items-center sm:justify-start sm:gap-3">
          <Dates id={"dayInput"} text="day" textFondo="dd" />
          <Dates id={"monthInput"} text="month" textFondo="mm" />
          <Dates id={"yearInput"} text="year" textFondo="yyyy" />
        </div>
        <Boton />
      </form>
      <div className="mt-8 sm:mt-0">
        <Result texto={"years"} numero={edad} />
        <Result texto={"months"} numero={mes} />
        <Result texto={"days"} numero={dia} />
      </div>
    </>
  );
};
