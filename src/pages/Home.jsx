import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import TransportSection from "../components/TransportSection";
import HeroSection from "../components/HeroSection";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <ProductSection/>
      <TransportSection/>
      <Clients/>
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default Home;
