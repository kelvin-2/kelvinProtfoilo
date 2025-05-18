import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { id: "Home", label: "Home" },
    {id:"Skills", label:"Skills"},
    { id: "Projects", label: "Projects" },
    { id: "Contact", label: "Contact" },
    { id: "About", label: "About" },
  ];

  const scrollToSection =(id) =>{
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <nav className="text-white py-5 px-6 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-lg font-medium hover:text-blue-400 transition-colors duration-300 relative group"
            >
              {link.id}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;