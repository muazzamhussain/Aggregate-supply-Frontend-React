import React from 'react';
import { ArrowRight } from 'lucide-react';
import {Link, useNavigate} from "react-router-dom"

function ProductsSection() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: "Beige Gravel",
      description: "We offer the best quality of beige gravel at the most competitive rates for small or mega construction projects in Dubai, UAE.",
      image: "https://myplants.ae/cdn/shop/files/beigegravek.jpg?v=1719971156&width=535",
      buttonText: "READ MORE",
      productId:12
    },
    {
      id: 2,
      title: "Red Gravel",
      description: "Are you looking for a red sand supplier in Dubai, UAE? Marjan Aman General Transport is one of the leading red sand suppliers in UAE.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_T7NIsF1M77Rw7tYB1RAP91VA5-_qWD05Og&s",
      buttonText: "READ MORE",
      productId:15
    },
    {
      id: 3,
      title: "Aggregate Suppliers",
      description: "We are a leading aggregate supplier in Dubai offering a wide range of products. Get in touch today for free quotes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotwrsCQbJA5n2i3onaKgVvc3ekx3XWlS49w&s",
      buttonText: "READ MORE",
      productId:16
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quality construction materials and reliable transport services for all your project needs
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-blue-600 rounded-full mb-4"></div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Read More Button */}
                <button className="group flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 cursor-pointer" onClick={()=>navigate(`/product/${product.productId}`)}>
                  <span>{product.buttonText}</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-950 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
            <p className="text-blue-200 mb-6">
              Contact us today for competitive rates and reliable service for your construction projects
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer">
                <Link to="/contact">Get Quote Now</Link> 
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-950 font-bold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer">
                 <Link to="/products">View All Products</Link> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;