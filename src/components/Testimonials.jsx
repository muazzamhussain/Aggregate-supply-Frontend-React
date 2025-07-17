import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Ahmed Khan",
    title: "CEO, BuildCorp",
    feedback:
      "Working with this company has been a game-changer. Their attention to detail and commitment to quality is unmatched.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fatima Ali",
    title: "Project Manager, UrbanPlan",
    feedback:
      "Exceptional service and great communication throughout. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Usman Tariq",
    title: "CTO, TechConstruct",
    feedback:
      "A professional and reliable team. They always deliver on time and exceed expectations.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function Testimonials() {
  return (
    <>
      <div className="bg-newwhite py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gunmetal mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-chrysler_blue"
                />
                <div>
                  <h4 className="text-lg font-semibold text-onyx">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “{testimonial.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Banner */}
      <div
        className="relative w-full h-[350px] bg-center bg-cover flex items-center mb-3"
        style={{
          backgroundImage:
            'url("/images/pexels-miguel-delima-1419393-16466053.jpg")', // Place your image here
        }}
      >
        <div className="relative z-10 ml-6 md:ml-24 max-w-2xl text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold [text-shadow:2px_2px_20px_#000,2px_2px_20px_#000,2px_2px_20px_#000]">
            Best Aggregate Suppliers in Dubai, UAE
          </h1>
          <p className="text-lg [text-shadow:2px_2px_20px_#000,2px_2px_20px_#000,2px_2px_20px_#000,1px_1px_14px_#000] ">
            We deliver top-quality building materials on time. Get premium
            aggregates at your site to keep your project running smoothly.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-8 py-3 rounded-md text-base font-medium transition shadow-xl">
            <Link to="/contact">Buy Transport</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
