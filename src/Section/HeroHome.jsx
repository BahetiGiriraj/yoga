import React from 'react';

const HeroHome = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      <img
        src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Yoga background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      
      <div className="flex flex-col items-center justify-center h-full w-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow">
          Home For Online Yoga
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 drop-shadow">
          Improve your Yoga Experience
        </p>
        <button className="bg-[#10b985] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#0ea172] transition text-sm sm:text-base md:text-lg">
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
};

export default HeroHome;
