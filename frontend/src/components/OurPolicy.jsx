import WARNING from '../assets/WARNING.png'; 
import React from 'react';

const OurPolicy = () => {
  return (
    <div className="relative flex flex-col justify-center items-center py-24 px-8 bg-transparent text-center overflow-hidden">
      
      <div className="relative p-10 rounded-xl">
        
        <img 
          src={WARNING} 
          className="w-24 sm:w-28 mx-auto mb-6 neon-glow animate-pulse" 
          alt="Warning" 
        />
        
        <p className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide text-red-500 neon-text">
          No Returns Allowed!
        </p>

        <p className="absolute inset-0 text-4xl sm:text-5xl font-extrabold uppercase tracking-wide text-purple-600 opacity-20 glitch-layer">
          No Returns Allowed!
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;

