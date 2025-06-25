const AlignmentSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
     
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#386b7d] mb-4 leading-tight">
          Improve<br />Your<br />Alignment
        </h2>
        <p className="text-[#76a8bd] text-lg sm:text-xl mb-6">
          Track and analyze your yoga posture in real time with precision feedback
        </p>
        <button className="bg-[#5e9eb4] text-white px-6 py-2 rounded-full font-medium mb-4 hover:bg-[#4e91a7] transition">
          Get Started
        </button>
        <div className="text-left mt-4">
          <span className="font-bold text-black text-lg">200+</span>
          <p className="text-gray-500 text-sm">Happy Customers</p>
        </div>
      </div>

     
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-[300px] sm:w-[350px] md:w-[400px] aspect-square rounded-[40px] overflow-hidden shadow-2xl ring-4 ring-[#5e9eb4]/20 transform transition-transform duration-500 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Yoga Alignment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AlignmentSection;
