import React from "react";

function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <div className="logo flex items-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-15 w-auto object-contain"
        />
      </div>

      {/* Menu */}
      <ul className="flex gap-10 font-poppins  text-gray-700 font-bold">
        <li className="cursor-pointer hover:text-blue-600 transition duration-200">
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition duration-200">
          About
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition duration-200">
          Contacts
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
