import { useState } from "react";
import "./App.css";
import Home from "../src/pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      
      <a
        href="https://wa.me/+971505937099" //Floating whatsapp icon
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full shadow-lg p-4 z-50 hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>
      {/* Nav, header, etc. */}
      <Outlet /> {/* Renders nested route components here */}
    </div>
  );
}

export default App;
