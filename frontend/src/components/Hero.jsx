import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-black rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background Glow */}
        <div className="absolute w-3/4 h-3/4 bg-purple-700 blur-3xl opacity-30 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <div className="w-8 h-[2px] bg-purple-600 animate-pulse"></div>
            <p className="font-bold text-sm md:text-base text-purple-400">BESTSELLER</p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide uppercase">
            The Latest <span className="text-purple-500">Arrivals</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            Discover the newest additions to our collection. Elegance, style, and quality delivered right to you.
          </p>

          <div className="mt-6">
            <button className="px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center">
          <img
            className="w-11/12 max-w-md lg:max-w-lg rounded-xl shadow-2xl hover:scale-105 transform transition-transform duration-500"
            src="/assets/robot.png"
            alt="Robot"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
