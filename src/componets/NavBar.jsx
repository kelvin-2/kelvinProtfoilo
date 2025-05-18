import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Projects", label: "Projects" },
    { path: "/Contact", label: "Contact" },
    { path: "/About", label: "About" },
  ];

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl">Kelvin</div>
        <div className="space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="hover:underline hover:text-gray-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
