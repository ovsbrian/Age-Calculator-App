export const Result = ({ numero, texto }) => {
  const mostrarTexto = texto.toLowerCase();
  return (
    <>
      <div className="text-5xl font-bold mx-1 flex gap-2">
        <span className="  text-violet-500 ">{numero}</span>
        <span className="italic">{mostrarTexto}</span>
      </div>
    </>
  );
};
