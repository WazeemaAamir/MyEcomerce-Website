'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Botique"
        fill
        className="object-cover brightness-60"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Explore Used Clothes in Karachi
        </h1>

        {/* Sub-heading */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mt-3 sm:mt-4 max-w-xl sm:max-w-2xl drop-shadow-md">
          Discover unbeatable deals on pre-owned clothes from verified local shops.
        </p>

        {/* CTA Button */}
        <Link href="/browse" className="mt-6">
          <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
            Browse Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
