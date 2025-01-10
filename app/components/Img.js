"use client";
import React from 'react'
import Image from 'next/image'
import footer from '../../public/footer.png'
function Img() {
  return (
    <div className="relative w-full border-t-4 border-b-4 border-custom-orange">
      <Image
        src={footer} // Adjust to match the image name and path in your public folder
        alt="Construction"
        width={1920}
        height={600}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  )
}

export default Img
