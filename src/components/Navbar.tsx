'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold text-blue-700 flex items-center gap-2"
        >
          My<span className="text-gray-800">Ecommerce</span>
        </Link>
                {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <Link href="/"className="hover:text-blue-600 transition">Home</Link>
          <Link href="/browse" className="hover:text-blue-600 transition">Browse</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
  Contact
</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/post_product">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              Post Your Clothes
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
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
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md rounded-b-lg px-6 py-4 space-y-4 transition-all duration-300">
          <Link href="/post_product" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-all duration-300">
              Post Your Clothes
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
