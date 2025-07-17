import React from "react";

function Clients() {
  // Sample client logos - you can replace these with your actual client logos
  const clientLogos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSREz_kLkIqlqLTD0SL0cWnd-Qz-e9yr7sCQ1rNxe-9SvNkQNfzR1RonymffE17RUjN0&usqp=CAU",
      alt: "Construction Company 1",
      name: "FWO",
    },
    {
      src: "https://m.eyeofriyadh.com/news_images/2017/01/17e813d0e5ef3.png",
      alt: "Construction Company 2",
      name: "Deva",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLARwyOiUzKPxedFmv8nehf198jGyY-Sj-gw&s",
      alt: "Construction Company 3",
      name: "S.S Lootah",
    },
    {
      src: "https://planisware.com/sites/default/files/styles/max_1300x1300/public/2022-10/adnoc-logo-vector.png?itok=NhLUx4ym",
      alt: "Construction Company 4",
      name: "Adnoc",
    },
    {
      src: "https://www.openspace.ai/wp-content/uploads/2023/08/Khansaheb-Logo-1-540x163.png",
      alt: "Construction Company 5",
      name: "Khan Saheb",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvohQRcr1rkE0ufS8BIkl4f7G-oUvAyVvUHaP48FcGcurcNZruxjGLhDLzOeP9EItCRE&usqp=CAU",
      alt: "Construction Company 6",
      name: "Ghantoot Group",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvb6Gg1D34GqApXWN9jzjHggrz0qwrfEVHOQ&s",
      alt: "Construction Company 6",
      name: "Tenderd",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXDpZ_jHTjZbYa06v53vZCrvO9QI8s8a5CA&s",
      alt: "Construction Company 6",
      name: "Oriental Pearls",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C4E0BAQGWGkTniKz7IA/company-logo_200_200/company-logo_200_200/0/1631346421917?e=2147483647&v=beta&t=M0R96KOe_y2mj5lV-JxNIO4PsP6R8rjjjf5fosW0qYk",
      alt: "Construction Company 6",
      name: "Airolink",
    },
    {
      src: "https://www.mediaoffice.ae/-/media/logos/dubai-municipality-logo.jpg?h=1397&w=3508&hash=44288F81B9D25A038D6D308681E730D1",
      alt: "Construction Company 6",
      name: "Dubai Municipality",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNZyIn10QVGrhESr6VwHXnaBkVTQMtPrB8w&s",
      alt: "Construction Company 6",
      name: "Damac",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/TECOM_Group.png",
      alt: "Construction Company 6",
      name: "Tecom Group",
    },
    {
      src: "https://ckan.fcsc.gov.ae/uploads/group/2022-06-02-042630.949696-federal-electricity--water-authority-1200px-logo.png",
      alt: "Construction Company 6",
      name: "Federal Electricity & Water Authority",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2j_Zy_xwgShfIRsVeV-WYRXS-w9n-j84kOA&s",
      alt: "Construction Company 6",
      name: "Enoc",
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
