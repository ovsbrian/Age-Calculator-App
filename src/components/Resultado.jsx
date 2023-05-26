import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

export const Result = ({ numero = "--", texto }) => {
  const mostrarTexto = texto.toLowerCase();
  const props = useSpring({ number: numero, from: { number: 0 } });

  return (
    <>
      <div className="text-5xl font-poppins-extrabold mx-1 flex gap-2">
        <animated.span className="text-violet-500">
          {/* eslint-disable-next-line react/prop-types */}
          {props.number.to((val) => Math.floor(val))}
        </animated.span>
        <span className="italic">{mostrarTexto}</span>
      </div>
    </>
  );
};

Result.propTypes = {
  numero: PropTypes.number.isRequired,
  texto: PropTypes.string.isRequired,
};
