import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import products from "../assets/products";

function ProductsPage() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Product Image */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Product Name */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Need More Information?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact us for pricing, availability, and specifications for any
                of our products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
                  <Link to="/contact">Get Quote</Link>
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
                  <Link to="/contact">Contact us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
