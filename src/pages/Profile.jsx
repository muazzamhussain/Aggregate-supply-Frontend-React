import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Company Profile
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
      </div>
      <div className="mx-auto max-w-6xl p-4">
        <iframe
          src="/company-profile.pdf#zoom=138&toolbar=0"
          width="100%"
          height="1000px"
        ></iframe>
      </div>

       <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-5">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer">
          <a href="/company-profile.pdf">Download PDF</a>
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-1 rounded-lg font-medium transition duration-200 cursor-pointer"
          onClick={() => navigate("/")}
        >
          ← Go Home
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
