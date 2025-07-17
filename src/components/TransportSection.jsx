import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  Package,
  Loader,
  Mountain,
} from "lucide-react";
import Clients from "./Clients";
import { useNavigate } from "react-router-dom";

const TransportVehiclesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const vehicles = [
    {
      id: 1,
      image: "/images/Untitled design.png",
      title: "Water Tanker Truck",
      description: "Heavy duty water transport for construction sites",
    },
    {
      id: 2,
      image: "/images/pngegg (1).png",
      title: "Wheel Loader",
      description: "Construction equipment for material handling",
    },
    {
      id: 3,
      image: "/images/pngegg.png",
      title: "Transport Fleet",
      description: "Complete vehicle solutions for projects",
    },
    {
      id: 4,
      image: "/images/pngegg (2).png",
      title: "Pickup Truck",
      description: "Light transport for deliveries",
    },
  ];

  const itemsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsToShow) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - itemsToShow + vehicles.length) % vehicles.length
    );
  };

  const visibleVehicles =
    vehicles.slice(currentIndex, currentIndex + itemsToShow).length <
    itemsToShow
      ? [
          ...vehicles.slice(currentIndex),
          ...vehicles.slice(0, itemsToShow - vehicles.length + currentIndex),
        ]
      : vehicles.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <>
      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              All Types of Transports
            </h2>
            <p>We provide all kind of transport services across UAE.</p>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-md bg-white shadow hover:scale-105 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-md bg-white shadow hover:scale-105 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {visibleVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="h-48 w-full bg-gray-200">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {vehicle.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8">
            {[
              {
                icon: <Truck className="w-6 h-6 text-cyan-700" />,
                title: "Transport with Heavy Trucks",
                subtitle: "Any destination you need",
                description: `We provide reliable heavy-duty transport for large-scale construction and infrastructure needs across the UAE.`,
              },
              {
                icon: <Loader className="w-6 h-6 text-cyan-700" />,
                title: "Rental & Loading",
                subtitle: "We stand by our service",
                description: `Our fleet includes trailers, low beds, pickups, excavators, and shovels – available for short- or long-term rental.`,
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm flex gap-4 items-start"
              >
                <div className="bg-cyan-100 p-3 rounded-md">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-orange-600">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            {[
              {
                icon: <Package className="w-6 h-6 text-cyan-700" />,
                title: "Transport by Light Trucks",
                subtitle: "Urban & commercial deliveries",
                description: `Our light trucks ensure fast and safe cargo transport across cities in UAE and KSA.`,
              },
              {
                icon: <Mountain className="w-6 h-6 text-cyan-700" />,
                title: "All Types of Stones & Rocks",
                subtitle: "Rocks are not all the same!",
                description: `We supply and transport sedimentary, igneous, and metamorphic rocks for all your structural needs.`,
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm flex gap-4 items-start"
              >
                <div className="bg-cyan-100 p-3 rounded-md">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-orange-600">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <img
                src="/images/pngegg (4).png" // Ensure this image exists in public/images
                alt="Heavy Duty Truck"
                className="w-full object-contain rounded-md mb-4"
              />
              <p className="text-sm text-gray-700 leading-relaxed">
                The business is managed by <b>Mr. Marjan Aman Ullah</b>, a
                Pakistani national with over 15 years of experience in trade and
                transport across UAE and Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransportVehiclesSection;
