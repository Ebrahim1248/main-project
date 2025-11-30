import React, { useEffect } from "react";
import { FaShippingFast, FaHandshake, FaStar } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <>
    <div className="container mx-auto px-4 py-20">
      {/* Page Title */}
      <h1
        className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        data-aos="fade-down"
      >
        About Us
      </h1>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/3" data-aos="fade-right">
          <img
            src="public/About.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-gray-700" data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            Who We Are
          </h2>
          <p className="mb-4">
            Welcome to our store! We are passionate about bringing you the best products 
            with exceptional quality and service. Our mission is to make online shopping 
            simple, enjoyable, and reliable.
          </p>
          <p className="mb-4">
            From trendy fashion items to home essentials, we carefully select products 
            that meet our high standards. Our team is dedicated to providing a seamless 
            shopping experience and ensuring your satisfaction.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid sm:grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          data-aos="zoom-in"
        >
          <FaShippingFast className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Get your products delivered quickly and safely.</p>
        </div>
        <div
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          data-aos="zoom-in"
        >
          <FaHandshake className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trust & Support</h3>
          <p className="text-gray-600">We prioritize customer satisfaction and trust.</p>
        </div>
        <div
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          data-aos="zoom-in"
        >
          <FaStar className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Top Quality</h3>
          <p className="text-gray-600">We only offer the best products for our customers.</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our mission is to offer top-quality products with excellent customer service. 
          We strive to create a trustworthy and enjoyable shopping experience for every customer.
        </p>
      </div>
    </div>
  </>
  );
};

export default About;
