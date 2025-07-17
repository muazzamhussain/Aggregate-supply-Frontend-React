import React, { useState,useEffect } from 'react';
import { Phone, Mail, Globe, MapPin, Truck } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    location: '',
    destination: '',
    cargoOrPerson: '',
    email: '',
    contactNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted! We will get back to you within the hour.');
    console.log('Form data:', formData);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">CONTACT US</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Marjan Aman General Transport LLC</h3>
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Morocco Cluster Building I 10, Shop # 07 international city Dubai P.O Box 296418</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Office phone:</p>
                      <p className="text-gray-800 font-medium">+971 4 564 6900</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Mobile phone:</p>
                      <p className="text-gray-800 font-medium">+971 50 593 7099</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">E-mail:</p>
                      <p className="text-gray-800 font-medium">info@marjanamantransport.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Website:</p>
                      <p className="text-gray-800 font-medium">www.marjanamantransport.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                Feel free to talk to our representative at any time you please use our contact form on our website or one of our contact numbers. Let us build your future together.
              </p>
              <p className="text-gray-600 mb-4">
                You can always visit us at our HQ, we have a friendly staff and a mean cup of coffee.
              </p>
              <p className="text-gray-600">
                For international calls use our free contact form.
              </p>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GET YOUR TRANSPORT QUOTE</h2>
              <p className="text-gray-600">
                Fill out the form to get your quote within the hour. We cover all routes possible. We guaranty safe and timely product delivery either for your personal travel or your products.
              </p>
            </div>

            {/* Truck Image */}
            <div className="mb-8">
              <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Truck className="h-20 w-20 text-white opacity-80" />
                </div>
                <div className="absolute top-4 left-4 text-white">
                  <div className="flex space-x-2">
                    <div className="w-12 h-8 bg-red-500 rounded"></div>
                    <div className="w-12 h-8 bg-red-500 rounded"></div>
                    <div className="w-12 h-8 bg-red-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="destination"
                  placeholder="to destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <input
                type="text"
                name="cargoOrPerson"
                placeholder="cargo / person"
                value={formData.cargoOrPerson}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="contact number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 cursor-pointer"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}