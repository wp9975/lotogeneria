import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const LottoSets = ({ generatedSets }) => {
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const newNumbers = new Set();
    while (newNumbers.size < 6) {
      newNumbers.add(Math.floor(Math.random() * 49) + 1);
    }
    return [...newNumbers];
  };

  useEffect(() => {
    if (generatedSets && generatedSets.length > 0) {
      setNumbers(generatedSets.map((set) => Array.from(set)));
    } else {
      setNumbers([generateRandomNumbers()]);
    }
  }, [generatedSets]);

  return (
    <div className="flex flex-col py-10  items-center space-y-4 min-h-[200px] max-h-[500px] min-w-[400px] overflow-y-scroll">
      {numbers.map((set, setIndex) => (
        <div key={setIndex} className="flex items-center space-x-2">
          <div className="w-6 text-center">{setIndex + 1}.</div>
          {set.map((number, numberIndex) => (
            <div
              key={numberIndex}
              className="flex items-center justify-center w-12 h-12 mx-2 text-lg text-white bg-yellow-500 rounded-full number"
            >
              <CountUp start={0} end={number} duration={1} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LottoSets;