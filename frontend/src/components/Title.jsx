import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-4 items-center mb-6">
      <p className="text-neon-purple text-3xl sm:text-4xl tracking-widest">
        {text1}{' '}
        <span className="text-neon-red font-extrabold uppercase">
          {text2}
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[2px] sm:h-[4px] bg-gradient-cyberpunk neon-glow"></p>
    </div>
  );
};

export default Title;
