import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollTop > windowHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-gray-700 text-white rounded-full w-12 h-12 flex justify-center items-center transition-transform ${isVisible ? 'opacity-100 transform-translateY-0' : 'opacity-0 transform-translateY-20'}`}
      onClick={handleButtonClick}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
