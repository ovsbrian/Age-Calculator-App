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

export const calcularEdad = (año, mes, dia) => {
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
