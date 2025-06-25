import React from "react";

const HeroAbout = () => {
  return (
    <div className="bg-[#f9fefa] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-[#10b985]">YOJA</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          We're on a mission to democratize quality yoga instruction through
          cutting-edge AI technology,
          making personalized guidance accessible to practitioners worldwide.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
