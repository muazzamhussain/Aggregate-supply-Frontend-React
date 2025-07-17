import React,{useEffect} from "react";
import { Truck, Package, Droplets, Mountain, TreePine } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import services from "../assets/services"

const ServicesGrid = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white flex flex-col"
              >
                {/* Background Image */}
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">

                  {/* Title & Description */}
                  <div className="flex-1 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description.split(".")[0]}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 cursor-pointer" onClick={()=>navigate(`/service/${service.id}`)}>
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss your specific transportation and
                logistics needs
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
                <Link to="/contact">Get In Touch</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesGrid;
