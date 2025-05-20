import React, { useState } from 'react';

const PutoButton = ({ text, onButtonClick }) => {
  const [buttonStyle, setButtonStyle] = useState('default');

  const handleClick = () => {
    onButtonClick();
  };

  const changeStyle = () => {
    setButtonStyle(prevStyle => {
      if (prevStyle === 'default') return 'fire';
      if (prevStyle === 'fire') return 'neon';
      return 'default';
    });
  };

  const buttonClasses = {
    default: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white',
    fire: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white animate-pulse',
    neon: 'bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white shadow-lg shadow-purple-500/50 animate-bounce'
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className={`px-8 py-4 text-2xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 ${buttonClasses[buttonStyle]}`}
      >
        {text}
      </button>
      <button
        onClick={changeStyle}
        className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Cambiar Estilo
      </button>
    </div>
  );
};

export default PutoButton;
