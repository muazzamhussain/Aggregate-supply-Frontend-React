import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../assets/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <>
        <Navbar />
        <div className="text-center mt-10 text-red-600 text-lg font-semibold">
          Product not found.
        </div>
        <Footer />
      </>
    );

  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded mb-6"
            />

            <div className="prose prose-lg max-w-none text-gray-700">
              {product.description.split("\n").map((para, index) => (
                <p key={index} className="mb-4">
                  {para.trim()}
                </p>
              ))}
            </div>

            <div className="mt-6 text-right">
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
                onClick={() => navigate(-1)}
              >
                ← Back to Products
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail;
