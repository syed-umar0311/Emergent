"use client";
import React from "react";

function Main() {
  return (
    <div className="relative h-screen bg-main-bg bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl w-3/4 font-light font-poppins">
          ENHANCE YOUR WINTER CONSTRUCTION PROJECTS WITH OUR ADVANCED HEATING
          SOLUTIONS
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-poppins">
          Reliable, Powerful, and Eco-friendly Heating Solutions
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-custom-orange hover:bg-orange-600 text-white w-full sm:w-48 h-12 text-sm font-poppins font-bold">
            Get a Quote
          </button>
          <button className="bg-transparent border border-white hover:bg-white w-full sm:w-48 h-12 hover:text-black text-white text-sm font-poppins font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
