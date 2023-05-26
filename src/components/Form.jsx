import { useState } from "react";
import { Boton } from "./Boton";
import { Dates } from "./Dates";
import { Result } from "./Resultado";

const validarFecha = (año, mes, dia) => {
  const today = new Date();

  if (
    año > today.getFullYear() ||
    mes < 1 ||
    mes > 12 ||
    dia < 1 ||
    dia > new Date(año, mes, 0).getDate()
  ) {
    return false;
  }
  return true;
};

const calcularEdad = (año, mes, dia) => {
  if (!validarFecha(año, mes, dia)) {
    return null;
  }

  const today = new Date();
  let edad = today.getFullYear() - año;
  let meses = today.getMonth() + 1 - mes;
  let dias = today.getDate() - dia;
  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(today.getFullYear(), today.getMonth(), 0);
    dias += ultimoMes.getDate();
  }
  if (meses < 0) {
    edad--;
    meses += 12;
  }
  return { edad, meses, dias };
};

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
      if (result === null) {
        setFechaNoValida({
          day: day < 1 || day > new Date(year, month, 0).getDate(),
          month: month < 1 || month > 12,
          year: year > new Date().getFullYear(),
        });
      } else {
        setEdad(result.edad);
        setMeses(result.meses);
        setDias(result.dias);
      }
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
