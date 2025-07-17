import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import TransportSection from "../components/TransportSection";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <ProductSection/>
      <TransportSection/>
      <Footer />
    </div>
  );
}

export default Home;
