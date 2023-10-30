import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import curve from "../public/beanshape.png"; // Import the curve image

const Navdropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex-col">
      <div
        className={`flex relative flex-row items-center link-text text-lg ${
          isOpen ? "text-black" : ""
        }`}
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Pages{" "}
        <IoIosArrowDown className={`mt-1 ml-1`} />
        {isHovered && (
          <img src={curve} alt="curve" className="absolute w-35 h-10 top-4 right-5" />
        )}
      </div>
      {isOpen && (
        <div className="absolute py-3 space-y-2 w-48 mt-8  bg-white rounded-lg shadow-md">
          <Link
            to="/attorney"
            className="block px-4 py-2 link-text text-lg"
            onClick={closeDropdown}
          >
            Attorney
          </Link>
          <Link
            to="/practice"
            className="block px-4 py-2 link-text text-lg"
            onClick={closeDropdown}
          >
            Practice Areas
          </Link>
          <Link
            to="/cases"
            className="block px-4 py-2 link-text text-lg"
            onClick={closeDropdown}
          >
            Cases
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navdropdown;
