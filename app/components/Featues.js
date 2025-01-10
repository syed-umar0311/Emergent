"use client";
import React from 'react';
// import Cam from '../../public/cam.png';
import Image from 'next/image';

function Featues() {
  return (
    <section className="bg-primary text-white px-6 py-12 md:px-20 md:py-16 font-poppins">
      {/* Title Section */}
      <div className="mr-4 mx-auto text-start" >
        <h2 className="text-3xl md:text-4xl font-bold ">
          E3000 Hydronic Heater
        </h2>
        <h3 className="text-3xl md:text-4xl font-light text-custom-orange mt-2  ">
        Unmatched Performance in Ground Thawing and </h3>
        <h3 className="text-3xl md:text-4xl font-light text-custom-orange">Concrete Curing</h3>
        <p className="text-gray-300 mt-4 w-4/5">
        The E3000 Hydronic Heater from Wacker Neuson is your premier solution for efficient and effective ground thawing and concrete curing during the colder months. Designed to handle the toughest conditions, this heater ensures that your construction projects continue smoothly, regardless of freezing temperatures.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="mt-10  grid grid-cols-1 lg:grid-cols-2  gap-1 items-center px-6  ">
        {/* Features List */}
        <div className="space-y-4 ">
          <h4 className="text-4xl text-custom-orange font-poppins font-medium px-0 ">Key Features</h4>
          <ul className="space-y-2 mr-4 mt-5 text-base pl-7">
            <li className="flex items-start font-poppins text-sm">
              <span className="bg-custom-orange w-3 h-3 rounded-full mt-2 mr-4"></span>
              <p className='w-3/6'>
                Thaws up to 6,000 sq ft. or cures up to 18,000 sq ft.
              </p>
            </li>
            <li className="flex items-start font-poppins text-sm">
              <span className="bg-custom-orange w-3 h-3 rounded-full mt-2 mr-4"></span>
              <p className='w-3/6'>
                Environmentally friendly with low emissions and reduced fuel
                consumption.
              </p>
            </li>
            <li className="flex items-start font-poppins text-sm">
              <span className="bg-custom-orange w-3 h-3 rounded-full mt-2 mr-4"></span>
              <p className='w-3/6'>
                Easy to operate with user-friendly controls and automatic
                temperature regulation.
              </p>
            </li>
            <li className="flex items-start font-poppins text-sm">
              <span className="bg-custom-orange w-3 h-3 rounded-full mt-2 mr-4"></span>
              <p className='w-3/6'>
                Capable of operating with external temperatures down to -30°C.
              </p>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center ">
          <Image
            src="/cam.png"
            width={500}
            height={500}
            alt="E3000 Hydronic Heater"
            className=" shadow-lg w-3/4"
          />
        </div>
      </div>
    </section>
  );
}

export default Featues;
