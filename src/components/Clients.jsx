import React from "react";

function Clients() {
  // Sample client logos - you can replace these with your actual client logos
  const clientLogos = [
    {
      src: "https://png.pngtree.com/template/20190626/ourmid/pngtree-property-and-construction-logo-design-image_220169.jpg",
      alt: "Construction Company 1",
      name: "BuildTech Solutions",
    },
    {
      src: "https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-in-round-shape-image_317779.jpg",
      alt: "Construction Company 2",
      name: "Modern Builders Inc",
    },
    {
      src: "https://png.pngtree.com/template/20191014/ourmid/pngtree-real-estate-business-logo-template-building-and-construction-logo-vector-design-image_317920.jpg",
      alt: "Construction Company 3",
      name: "Elite Construction",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFASK3Wvdff9ELAI65FjYxFZ6ZgpHJNuPUiQ&s",
      alt: "Construction Company 4",
      name: "Urban Developers",
    },
    {
      src: "https://logodix.com/logo/1815819.png",
      alt: "Construction Company 5",
      name: "Premier Properties",
    },
    {
      src: "https://img.freepik.com/free-vector/flat-design-vs-logo-design_23-2149482034.jpg?semt=ais_hybrid&w=740",
      alt: "Construction Company 6",
      name: "Skyline Builders",
    },
  ];

  return (
    <>
      {" "}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white p-10 mb-2 shadow-md">
        <h3 className="text-4xl font-bold mb-4 text-center">Why Choose Us?</h3>
        <ul className="space-y-2 text-lg">
          {[
            "15+ years of industry expertise",
            "Complete fleet for all logistics needs",
            "Professional & punctual service",
            "Coverage across UAE & KSA",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
     
      <div className="py-12 ">
        <div className="">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our Top Clients
          </h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We're proud to work with industry-leading companies who trust us
            with their most important projects.
          </p>

          <div className="scrolling-container">
            <div className="scrolling-track">
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} className="logo-item">
                  <img src={logo.src} alt={logo.alt} className="logo-image" />
                  <span className="logo-name">{logo.name}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} className="logo-item">
                  <img src={logo.src} alt={logo.alt} className="logo-image" />
                  <span className="logo-name">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrolling-container {
            overflow: hidden;
            width: 100%;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .scrolling-track {
            display: flex;
            animation: scroll-left 30s linear infinite;
            gap: 40px;
          }

          .logo-item {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            min-width: 200px;
            transition: transform 0.3s ease;
          }

          .logo-item:hover {
            transform: translateY(-5px);
          }

          .logo-image {
            height: 80px;
            width: auto;
            object-fit: contain;
            border-radius: 8px;
            margin-bottom: 12px;
            transition: filter 0.3s ease;
          }

          .logo-image:hover {
            filter: brightness(1.1);
          }

          .logo-name {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            text-align: center;
            opacity: 0.8;
          }

          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          /* Pause animation on hover */
          .scrolling-container:hover .scrolling-track {
            animation-play-state: paused;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .scrolling-track {
              animation-duration: 20s;
              gap: 20px;
            }

            .logo-item {
              min-width: 150px;
              padding: 15px;
            }

            .logo-image {
              height: 60px;
            }
          }
        `}</style>
      </div>
      
    </>
  );
}

export default Clients;
