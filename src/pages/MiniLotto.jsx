import React, { useState } from "react";
import MiniLottoOptions from "../components/MiniLotto/MiniLottoOptions";
import MiniLottoSets from "../components/MiniLotto/MiniLottoSets";


const MiniLotto = () => {
  const [generatedSets, setGeneratedSets] = useState([]);

  return (
    <div className="flex flex-col items-center min-h-screen pt-24 bg-slate-100">
      <h1 className="mb-8 text-4xl font-bold">Mini Lotto</h1>
      <MiniLottoSets generatedSets={generatedSets} />
      <MiniLottoOptions onGenerateNumbers={setGeneratedSets} />
      
    </div>
  );
};

export default MiniLotto;
