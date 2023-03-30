import React, { useState } from "react";

import LottoOptions from "../components/LottoPage/LottoOptions";
import LottoSets from "../components/LottoPage/LottoSets";


const LottoPage = () => {
  const [generatedSets, setGeneratedSets] = useState([]);

  const handleGenerateNumbers = (newSets) => {
    setGeneratedSets(newSets);
  };
  return (
    <div className="flex flex-col items-center h-screen pt-24 bg-slate-100 ">
      <LottoSets generatedSets={generatedSets} />
      <LottoOptions onGenerateNumbers={handleGenerateNumbers}/>
    
    </div>
  );
};

export default LottoPage;