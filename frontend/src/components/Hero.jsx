import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row p-8 rounded-xl shadow-xl neon-border">
      
   
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
<div className="text-stone-200 space-y-6">
         
    <div className="flex items-center gap-2">
    <div className="w-8 md:w-11 h-[2px] bg-purple-600 animate-pulse"></div>
            <p className="font-bold text-sm md:text-base font-agrandir text-purple-400 neon-text"> BESTSELLER</p>
          </div>

          <h1 className="text-5xl sm:py-3 lg:text-7xl leading-tight font-extrabold uppercase text-white tracking-wide neon-glow">LATEST ARRIVALS</h1>

       
          <div className="flex items-center gap-2 group cursor-pointer">
 <p className="font-bold text-sm md:text-base font-agrandir text-red-500 neon-text group-hover:animate-pulse">   SHOP NOW  </p>
            <div className="w-8 md:w-11 h-[2px] bg-red-600 group-hover:w-16 transition-all duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>

   
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <img
          className="w-full sm:w-10/12 rounded-xl neon-glow shadow-2xl transition-transform duration-500 hover:scale-105"
          src="/assets/robot.png"
          alt=" Robot"
        />
      </div>
    </div>
  );
};

export default Hero;
