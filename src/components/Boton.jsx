import { TbArrowBigDownLines } from "react-icons/tb";

export const Boton = () => {
  return (
    <>
      <div className="relative flex justify-center mt-4 sm:justify-end sm:mt-1">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800 opacity-30" />
        <button
          type="submit"
          className="   bg-violet-500 rounded-full w-16 h-16 relative z-10 flex justify-center items-center text-3xl text-white active:bg-black"
        >
          <TbArrowBigDownLines />
        </button>
      </div>
    </>
  );
};
