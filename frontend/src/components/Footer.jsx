import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div className="mt-40 py-16 px-6 bg-black text-purple-300 neon-glow">
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
        
    
        <div>
 <Link to="/">
<h1 className="mb-5 w-32 text-5xl font-bold neon-text uppercase tracking-wider text-neon-red">SADIE.</h1>
    </Link>
         <p className="w-full md:w-3/4 text-gray-500 font-agrandir leading-relaxed tracking-wide">
            Step into a future where style meets technology. Discover the unknown, embrace the edge, and redefine fashion in the neon-lit streets of tomorrow.
          </p>
        </div>

       
        <div>
          <p className="text-2xl font-extrabold mb-5 text-neon-purple uppercase tracking-wide">
            Company
          </p>
          <ul className="flex flex-col gap-2 text-gray-400 font-bold">
            <li className="hover:text-neon-red cursor-pointer transition-all duration-300">Home</li>
            <li className="hover:text-neon-red cursor-pointer transition-all duration-300">About Us</li>
            <li className="hover:text-neon-red cursor-pointer transition-all duration-300">Delivery Policy</li>
            <li className="hover:text-neon-red cursor-pointer transition-all duration-300">Privacy Policy</li>
          </ul>
        </div>

      
        <div>
 <p className="text-2xl font-extrabold mb-5 text-neon-purple uppercase tracking-wide">
            Get in Touch </p>
          <ul className="flex flex-col gap-2 text-gray-400 font-bold">
            <li className="hover:text-neon-red transition-all duration-300">+1-212-456-7890</li>
            <li className="hover:text-neon-red transition-all duration-300">SADIE@SADIE.COM</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <hr className="border-t border-purple-600 opacity-50" />
        <p className="py-5 text-sm text-center tracking-wide text-gray-500 uppercase">
          Copyright 2087 © SADIE.COM - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
