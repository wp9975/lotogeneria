import React from "react";

const NumberButton = ({ number, onClick, numberStyle }) => {
  return (
    <button
      className={`w-14 h-14 text-white rounded-full focus:outline-none hover:scale-105 hover:border-4 hover:border-blue-500 hover:animate-pulse transition-all duration-200 ease-in-out ${numberStyle}`}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default NumberButton;
