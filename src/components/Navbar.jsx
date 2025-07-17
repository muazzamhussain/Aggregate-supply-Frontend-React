import React, { useState } from "react";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top header section */}
      <div className="bg-white py-4 hidden md:block">
        <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-10 space-y-4 lg:space-y-0">
          <div className="flex-shrink-0">
            <img
              src="https://marjanamantransport.com/images/logo.jpg"
              alt="Marjan Aman General Transport LLC Logo"
              className="h-16 w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="flex items-center text-blue-600 font-semibold text-sm">
                <Phone className="text-lg mr-2" />
                Call us
              </h3>
              <a
                href="tel:+97145646900"
                className="hover:text-blue-700 transition-colors duration-200"
              >
                +971 4 564 6900
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="flex items-center text-blue-600 font-semibold text-sm">
                <Mail className="text-lg mr-2" />
                Send Email
              </h3>
              <a
                href="mailto:info@marjanamantransport.com"
                className="hover:text-blue-700 transition-colors duration-200"
              >
                info@marjanamantransport.com
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="flex items-center text-blue-600 font-semibold text-sm">
                <Clock className="text-lg mr-2" />
                Working Hours
              </h3>
              <p className="text-gray-700 text-sm">
                Saturday - Thursday: 8AM - 6PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation section */}
      <nav className="bg-blue-950 text-white shadow-lg">
        <div className="flex justify-between items-center px-4 lg:px-10 py-3">
          {/* Desktop menu */}
          <div className="hidden lg:flex justify-center items-center space-x-8 w-full">
            <Link
              to="/"
              className="hover:text-orange-300 hover:scale-105 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-300 hover:scale-105 transition-all duration-200 font-medium"
            >
              About us
            </Link>
            <Link
              to="/services"
              className="hover:text-orange-300 hover:scale-105 transition-all duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="hover:text-orange-300 hover:scale-105 transition-all duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-300 hover:scale-105 transition-all duration-200 font-medium"
            >
              Contact us
            </Link>
            <button className="bg-blue-800 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
              <Link to="/contact">Get a Quote</Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto flex justify-between w-full items-center">
            <img
              src="https://marjanamantransport.com/images/logo.jpg"
              alt=""
              className="w-15"
            />
            <h3>Marjan Aman General Transport</h3>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-300 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 border-t border-blue-800">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <a
                href=""
                className="hover:text-orange-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="http://localhost:5173/about"
                className="hover:text-orange-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </a>
              <a
                href="#"
                className="hover:text-orange-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-orange-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#"
                className="hover:text-orange-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#"
                className="hover:text-orange-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </a>
              <button
                className="bg-blue-800 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 mt-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
