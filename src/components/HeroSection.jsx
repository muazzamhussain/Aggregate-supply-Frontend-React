import React from 'react';

function HeroSection() {
  return (
    <div
      className="relative w-full h-[450px] md:h-[600px] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: 'url("/images/Flux_Dev_A_dramatic_highcontrast_photograph_of_a_bustling_cons_3 (1).jpg")',
      }}
    >
      

      {/* Content */}
      <div className="relative z-10 px-6 md:pl-20 max-w-2xl text-white animate-fadeInUp space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight [text-shadow:1px_1px_14px_#000,1px_1px_30px_#000,1px_1px_40px_#000] ">
          Top-Quality Aggregates for Your Projects in UAE
        </h1>
        <p className="text-lg md:text-xl text-gray-200 [text-shadow:1px_1px_5px_#000]">
          Discover reliable supplies of premium aggregates delivered right to your site. We ensure timely service and exceptional quality to keep your builds on track.
        </p>
        <button className="bg-blue-900 hover:bg-cyan-800 text-white px-6 py-3 rounded-md font-semibold transition transform hover:scale-105 shadow-lg cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
