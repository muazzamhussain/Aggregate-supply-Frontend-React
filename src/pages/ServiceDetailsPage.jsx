import React,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../assets/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-10 text-red-600 text-lg font-semibold">
          Service not found.
        </div>
        <Footer />
      </>
    );
  }
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">{service.title}</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={service.bgImage}
              alt={service.title}
              className="w-full h-80 object-contain rounded mb-6"
            />

            <div className="prose prose-lg max-w-none text-gray-700">
              {service.description
                .trim()
                .split("\n\n")
                .map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
            </div>

            <div className="mt-6 text-right">
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
                onClick={() => navigate("/services")}
              >
                ← Back to Services
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetail;
