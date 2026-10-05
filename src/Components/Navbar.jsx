import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-3 left-0 w-full">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-black-700 no-underline">
              Home
            </Link>

            <Link to="/education" className="text-black-700 no-underline">
              Education
            </Link>

            <Link to="/projects" className="text-black-700 no-underline">
              Projects
            </Link>

            <Link to="/achievements" className="text-black-700 no-underline">
              Achievements
            </Link>

            <Link to="/contact" className="text-black-700 no-underline">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-[100px]"></div>
      <div className="bg-amber-500">Hello</div>
    </>
  );
};

export default Navbar;
