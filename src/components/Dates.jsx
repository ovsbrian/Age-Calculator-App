import PropTypes from "prop-types";

export const Dates = ({ text, textFondo, onChange }) => {
  const spacedText = text.split("").join(" ").toUpperCase();
  const fondoText = textFondo.toUpperCase();
  return (
    <>
      <div className="flex flex-col w-24 p-2 sm:w-30 sm:p-0  ">
        <span className=" font-poppins-bold text-xs mb-1 sm:text-xs sm:opacity-60">
          {spacedText}
        </span>
        <input
          className="border  font-poppins-bold p-3 rounded-md text-lg  focus:outline-none focus:border-violet-700 sm:text-base sm:w-30 sm:p-2"
          type="number"
          placeholder={fondoText}
          onChange={onChange}
        />
      </div>
    </>
  );
};

Dates.propTypes = {
  text: PropTypes.string.isRequired,
  textFondo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
