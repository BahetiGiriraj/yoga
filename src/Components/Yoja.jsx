import React from 'react';
import {Link} from 'react-router-dom'
import Logo from "../assets/Logo.JPG";

const Yoja = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mx-auto my-16 max-w-5xl p-6 md:p-12 bg-gradient-to-tr from-white to-gray-50 rounded-3xl shadow-xl">
      <div className="md:w-2/3">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What is <span className="text-[#10b985]">Yoja</span>?</h1>
        <p className="text-gray-600 text-base leading-7 mb-6">
          YoJa is a yoga posture monitoring application that utilizes Machine Learning, Convolutional
          Neural Networks (CNN), and OpenCV to identify and correct yoga postures in real-time. It’s
          designed to offer all the benefits and features of personalized yoga instruction from the
          comfort of your home.
        </p>
        <Link to='/about'>
          <button className="bg-[#10b985] hover:bg-[#0ea172] text-white font-medium py-2 px-5 rounded-full transition-all shadow-md">
            Read More
          </button>
        </Link>
      </div>

      <div className="md:w-1/3 hidden md:block">
        <div className="w-full h-48 bg-[#10b985]/10 rounded-xl flex items-center justify-center">
          <img src={Logo} alt="Yoja Logo" className="h-24 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Yoja;