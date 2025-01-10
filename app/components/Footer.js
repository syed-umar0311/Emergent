"use clinet";
import React from 'react'
import Image from 'next/image'
// import insta from '/insta.png'
// import face from '../../public/face.png'
// import link from '../../public/link.png'
// import location from '../../public/location.png'
// import email from  '../../public/email.png'
// import call from '../../public/call.png'

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8 flex flex-wrap gap-8 md:flex-nowrap">
        {/* Contact Info */}
        <div className="flex-1">
          <ul>
          <h3 className="text-lg font-bold ml-12 -mb-4">Email</h3>


            <li className="flex items-center mb-2  ">
              <span className="text-custom-orange mr-2"><Image
              src="/email.png" width={40} height={40} 
              alt="Email"
              /></span>
              contact@emergen.io
            </li>
            <h3 className="text-lg font-bold ml-12 -mb-4">Call  Us</h3>


            <li className="flex items-center mb-2">
              <span className="text-custom-orange mr-2"><Image
              src="/call.png" width={40} height={40}
              alt="call"
              /></span>
              +90 000000000
            </li>
            <h3 className="text-lg font-bold ml-12 -mb-4 ">Address</h3>


            <li className="flex items-center">
              <span className="text-custom-orange mr-2"><Image
              src="/location.png" width={40} height={40}
              alt="location"
              /></span>
              ABC Residency Street #34, Country City
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1  ">
          <h3 className="text-lg text-center font-bold font-poppins mb-4">Quick Links</h3>
          <ul className='text-center'>
            <li className="mb-2 font-poppins">
              <a href="#" className="hover:underline font-poppins">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline font-poppins">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline font-poppins">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline font-poppins">Projects</a>
            </li>
            <li>
              <a href="#" className="hover:underline font-poppins">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Socials and Newsletter */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4 font-poppins">Socials</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-custom-orange text-2xl hover:text-white"><Image
              src="/link.png" width={35} height={35}
              alt="link"
              /></a>
            <a href="#" className="text-custom-orange text-2xl hover:text-white"><Image
              src="/insta.png" width={35} height={35}
              alt="insta"
              /></a>
            <a href="#" className="text-custom-orange text-2xl hover:text-white"><Image
              src="/face.png" width={35} height={35}
              alt="face"
              /></a>
          </div>

          <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 flex-1 bg-white text-gray outline-none"
            />
            <button className="bg-custom-orange text-white px-4 py-2 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='flex flex-row justify-center'><hr className='w-3/4'/></div>
      <div className="bg-primary text-base py-4 font-poppins font-bold text-center">
        <p>Copyright © Emergen Pvt Limited - 2025</p>
      </div>
    </footer>
  )
}

export default Footer
