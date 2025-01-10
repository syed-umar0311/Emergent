"use client"; 
import React from 'react';

function Main() {
  return (
    <div
      className="relative h-screen bg-main-bg bg-cover bg-center"
    //   style={{
    //     backgroundImage: ``, // Correct path for the public folder
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-5">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-thin font-poppins">
        ENHANCE YOUR WINTER CONSTRUCTION PROJECTS WITH OUR ADVANCED HEATING SOLUTIONS      </h1>
        <p className="mt-2 text-xl md:text-xl  font-poppins ">
          Reliable, Powerful, and Eco-friendly Heating Solutions
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-custom-orange hover:bg-orange-600 text-white w-52 h-10  text-sm font-poppins font-bold" >
            Get a Quote
          </button>
          <button className="bg-transparent border border-white hover:bg-white w-52 h-10 hover:text-black text-white   text-sm font-poppins font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
