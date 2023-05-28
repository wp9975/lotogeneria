import React from "react";
import { NavLink } from "react-router-dom";
import lottoVideo from "../../assets/video/loteria.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-y-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 z-0 object-cover w-full h-full video-filter"
      >
        <source src={lottoVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="p-8 text-center bg-white bg-opacity-75 rounded-lg">
          <h1 className="mb-4 text-4xl font-bold">Witaj w LotoGeneria!</h1>
          <p className="mb-6 text-xl">
            Twoje miejsce do generowania losowych zestawów liczb na loterię.
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              to="/eurojackpot"
              className="px-6 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
            >
              EuroJackpot
            </NavLink>
            <NavLink
              to="/lotto"
              className="px-6 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            >
              Lotto
            </NavLink>
            <NavLink
              to="/minilotto"
              className="px-6 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Mini Lotto
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
