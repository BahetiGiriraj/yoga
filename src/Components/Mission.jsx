import React from "react";
import Logo from "../assets/Logo.JPG";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
       
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Born during the COVID-19 pandemic when millions turned to home fitness, 
            <strong className="text-[#10b985]"> YOJA</strong> bridges the gap between personal instruction 
            and accessible practice. We combine ancient wisdom with modern technology 
            to ensure every practitioner can experience safe, effective yoga.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our AI-powered platform provides real-time posture analysis and personalized 
            feedback, making expert-level guidance available 24/7 from the comfort of your home.
          </p>
        </div>

       
        <div className="md:w-1/2 flex justify-center">
          <Link to="/">
            <img src={Logo} alt="YOJA Logo" className="w-full max-w-sm rounded shadow-md" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Mission;
