import React from 'react';
import Button from './ui/Button';
const illustrationImage = '/positivus/illustration.png';

const Header = () => {
  return (
    <header className="container px-6 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className='lg:w-1/2"'>
        <div className="w-full space-y-6">
          <h1 className="w-4/4 md:w-2/3 text-5xl md:text-6xl font-medium">
            Hi, I’m Your Name — I build modern web apps
          </h1>
          <p className="w-5/6 md:w-4/9">
            Frontend‑leaning full‑stack engineer focused on performant, accessible interfaces.
            I ship with React, Next.js, TypeScript, and great UX.
          </p>
          <Button
            text="Get in touch"
            className="bg-black text-white w-full md:w-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className='lg:w-1/2"'>
        <div className="image">
          <img
            src={illustrationImage}
            alt="Illustration"
            className="w-full h-auto mt-12 md:mt"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
