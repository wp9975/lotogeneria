import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 mt-10 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center ">
          <p className="text-sm">&copy; {new Date().getFullYear()} LotoGeneria. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
