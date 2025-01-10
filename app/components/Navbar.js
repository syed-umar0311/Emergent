"use client"; 
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import logoWhite from '/logoWHITE.png';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-transparent text-white z-50 fixed w-full top-0 border-b-2 border-white">
    <div className="container mx-auto flex items-center justify-between px-4 py-1 ">
      {/* Logo */}
      <div className="flex items-center border-r-2 border-white ">
        <Image
          src={logoWhite}
          alt="Emergen Logo"
          width={120}
          height={80}
        />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 ml-[400px] font-poppins">
        <li>
          <Link href="/" className="text-white  ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Project
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Button */}
      <div className="hidden md:block">
        <Link href="/schedule">
          <button className="bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-600">
            Schedule a Consultation
          </button>
        </Link>
      </div>
    </div>

    {/* Mobile Dropdown */}
    {isOpen && (
      <ul className="md:hidden flex flex-col items-center space-y-4 mt-3">
        <li>
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Project
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/schedule">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Schedule a Consultation
            </button>
          </Link>
        </li>
      </ul>
    )}
  </nav>
  )
}

export default Navbar
