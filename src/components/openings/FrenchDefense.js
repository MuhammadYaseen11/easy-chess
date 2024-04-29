import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const FrenchDefense = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>French Defense</h1>
      <div className="gap-8">
        <div className="flex-initial w-2/3">
          <iframe
            width="100%"
            height="450"  // Increased height for better visibility
            src="https://www.youtube.com/embed/5pec-u6PSvA"
            title="Sicilian Defense Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-initial w-1/3 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-700">
          The French Defense, initiated with 1.e4 e6, is noted for its solidity and resilience. It allows Black to challenge White's center while maintaining a strong pawn chain from d5 to e6. The French Defense often leads to closed structures, where Black seeks counterplay on the queenside while defending the kingside. Key variations include the Winawer, Tarrasch, and the Classical, each offering different plans and pawn structures catering to diverse strategic tastes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrenchDefense;
