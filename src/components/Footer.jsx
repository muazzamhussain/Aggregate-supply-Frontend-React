import React from "react";
import { Phone, Smartphone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-950 text-white w-full">
      <div className="flex flex-col lg:flex-row justify-around items-start p-6 space-y-6 lg:space-y-0 lg:space-x-4">
        
        <div className="flex-1 max-w-xs text-gray-300">
          <h3 className="font-bold text-white mb-3">About us</h3>
          <p className="text-sm leading-relaxed">
            For more than 30 years, Marjan Aman General Transport LLC has been
            a reliable partner in the field of logistics and cargo forwarding.
          </p>
        </div>

        <div className="flex-1 text-gray-300">
          <h3 className="font-bold text-white mb-3">Navigation</h3>
          <div className="flex flex-col text-md">
            <Link
              to="/"
              className="hover:text-orange-300 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-300 transition-all duration-200"
            >
              About us
            </Link>
            <Link
              to="/services"
              className="hover:text-orange-300 transition-all duration-200"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="hover:text-orange-300 transition-all duration-200"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-300 transition-all duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex-1 text-gray-300">
          <h3 className="font-bold text-white mb-3">Office</h3>
          <p className="text-sm font-medium mb-2">Marjan Aman General Transport LLC</p>
          <div className="flex items-start mb-4">
            <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
            <p className="text-sm">
              Shop 7, Building I-10, Morocco Cluster, International City P.O Box: 296418
            </p>
          </div>
          
          <div className="space-y-2">
            <a
              href="tel:+97145646900"
              className="flex items-center hover:text-orange-300 transition-all duration-200"
            >
              <Phone className="mr-2" size={16} />
              <span className="text-sm">+971 4 564 6900</span>
            </a>
            
            <a
              href="tel:+971505937099"
              className="flex items-center hover:text-orange-300 transition-all duration-200"
            >
              <Smartphone className="mr-2" size={16} />
              <span className="text-sm">+971 50 593 7099</span>
            </a>
            
            <a
              href="tel:+971504881162"
              className="flex items-center hover:text-orange-300 transition-all duration-200"
            >
              <Smartphone className="mr-2" size={16} />
              <span className="text-sm">+971 50 488 1162</span>
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-xs text-gray-300">
          <h3 className="font-bold text-white mb-3">Working Hours</h3>
          <p className="text-sm leading-relaxed mb-3">
            We work 7 days a week, every day including major holidays. Contact
            us for any info.
          </p>
          <div className="text-sm">
            <p className="mb-1">Saturday - Thursday: 6:00 AM - 6:00 PM</p>
            <p>Friday: OFF</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-800 bg-blue-950 text-center py-4">
        <p className="text-gray-300 text-sm">
          Marjan Aman General Transport LLC | © 2025, All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;