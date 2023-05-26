import PropTypes from "prop-types";

export const Dates = ({
  text,
  textFondo,
  onChange,
  id,
  errore = false,
  noValid = false,
  nombre,
}) => {
  const spacedText = text.split("").join(" ").toUpperCase();
  const fondoText = textFondo.toUpperCase();

  return (
    <>
      <div className="flex flex-col w-24 p-2 sm:w-30 sm:p-0">
        <span
          className={`font-poppins-bold text-xs mb-1 sm:text-xs sm:opacity-60 ${
            errore || noValid ? "text-red-700 " : ""
          }`}
        >
          {spacedText}
        </span>
        <input
          className={`border font-poppins-bold p-3 rounded-md text-lg focus:outline-none focus:border-violet-700 sm:text-base sm:w-30 sm:p-2 ${
            errore || noValid ? "border-red-500" : ""
          }`}
          type="number"
          placeholder={fondoText}
          onChange={onChange}
          id={id}
        />
        {errore === true ? (
          <div className="  flex     ">
            <span className="text-text-custom italic text-red-400 ">
              This field is required
            </span>
          </div>
        ) : (
          ""
        )}
        {noValid === true ? (
          <div className="flex   ">
            <span className="text-text-custom italic text-red-400 ">
              Must be a valid {nombre}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Dates.propTypes = {
  errore: Boolean,
  noValid: Boolean,
  nombre: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textFondo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
