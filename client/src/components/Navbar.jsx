import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className=" text-2xl font-bold tracking-wide">
          LOGO.
        </div>

        {/* Links */}
        <ul className="flex space-x-6  font-medium">
          <li>
            <Link to="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-200 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-200 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-200 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Create Account Button */}
        <Link
          to="/create-account"
          className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-[0_4px_0_0_#15803d] hover:shadow-[0_2px_0_0_#15803d] active:shadow-none active:translate-y-[4px] transition-all duration-150"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}

