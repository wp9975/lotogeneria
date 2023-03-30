import React, { useState } from "react";
import EuroJackpotOptions from "../components/EuroJackpot/EuroJackpotOptions";
import EuroJackpotResults from "../components/EuroJackpot/EuroJackpotResults";

const EuroJackpot = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState([]);

  return (
    <div className="flex flex-col items-center min-h-screen pt-24 bg-slate-100 euro-jackpot-page">
      <h1 className="mb-8 text-4xl text-center">EuroJackpot Generator</h1>
      <EuroJackpotResults  generatedSets={generatedNumbers}/>
      <EuroJackpotOptions onGenerateNumbers={setGeneratedNumbers} />
    </div>
  );
};

export default EuroJackpot;
