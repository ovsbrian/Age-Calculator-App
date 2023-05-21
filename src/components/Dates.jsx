export const Dates = ({ text }) => {
  const spacedText = text.split("").join(" ").toUpperCase();

  return (
    <>
      <div className="flex flex-col w-24 p-2 sm:w-30 sm:p-0  ">
        <span className="mb-1 sm:text-xs sm:opacity-60">{spacedText}</span>
        <input
          className="border p-3 rounded-md font-bold text-lg sm:text-base sm:w-30 sm:p-2"
          type="number"
        />
      </div>
    </>
  );
};
