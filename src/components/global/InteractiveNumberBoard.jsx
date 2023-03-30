import React from "react";

const InteractiveNumberBoard = ({
  excludedNumbers,
  setExcludedNumbers,
  requiredNumbers,
  setRequiredNumbers,
  numColumns,
          minNumber,
          maxNumber
}) => {
  const onClickNumber = (number) => {
    if (excludedNumbers.includes(number)) {
      setExcludedNumbers(excludedNumbers.filter((n) => n !== number));
      setRequiredNumbers([...requiredNumbers, number]);
    } else if (requiredNumbers.includes(number)) {
      setRequiredNumbers(requiredNumbers.filter((n) => n !== number));
    } else {
      setExcludedNumbers([...excludedNumbers, number]);
    }
  };

  const getNumberStyle = (number) => {
    if (excludedNumbers.includes(number)) {
      return "bg-red-600";
    }
    if (requiredNumbers.includes(number)) {
      return "bg-green-600";
    }
    return "bg-yellow-500";
  };

  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);

  return (
    <div className={`grid grid-cols-${numColumns} gap-2 bg-gray-200 rounded-xl p-7 md:grid-cols-10 interactive-number-board`}>
      {numbers.map((number) => (
        <button
          key={number}
          className={`w-14 h-14 text-white rounded-full focus:outline-none hover:scale-105 hover:border-4 hover:border-blue-500 hover:animate-pulse transition-all duration-200 ease-in-out ${getNumberStyle(
            number
          )}`}
          onClick={() => onClickNumber(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default InteractiveNumberBoard;
