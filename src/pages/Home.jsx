import React from "react";
import ContactSection from "../components/HomePage/ContactSection";
import DescriptionSection from "../components/HomePage/DescriptionSection";
import FAQSection from "../components/HomePage/FAQSection";
import Hero from "../components/HomePage/Hero";
import NoLottoSection from "../components/HomePage/NoLottoSection";

const Home = () => {
  return <div className="bg-slate-100">
    <Hero/>
    <DescriptionSection/>
    <NoLottoSection/>
    <FAQSection/>
    <ContactSection/>
  </div>;
};

export default Home;
