import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../public/Logo.png";
import { IoIosArrowDown } from "react-icons/io";

const SlideBar = ({ isOpen, closeSlideBar }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesOpen(!isPagesOpen);
  };
  

  return (
    <motion.div
      className={`fixed bg-primaryLight top-0 left-0 w-[250px] h-full p-8 overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      initial={{ x: "-120%" }}
      transition={{ ease: [0.25, 0.25, 0.25, 0.75] }}
      animate={{ x: isOpen ? -40 : "-120%" }}
    >
      <div className="flex justify-between mb-8">
        <Link to="/">
          <img src={logo} alt="logo" className="w-36" />
        </Link>
      </div>
      <div className="flex flex-col space-y-6">
        <Link to="/" className="text-lg link-text" onClick={closeSlideBar}>
          Home
        </Link>
        <Link to="/about" className="text-lg link-text" onClick={closeSlideBar}>
          About
        </Link>
        <Link to="/blog" className="text-lg link-text" onClick={closeSlideBar}>
          Blog
        </Link>
        {/* Dropdown for Pages */}
        <div className="relative group">
          <div
            className="text-lg flex justify-between link-text cursor-pointer"
            onClick={togglePagesDropdown}
          >
            Pages <IoIosArrowDown size={23} className={`mt-1 ml-1`} />
          </div>
          {isPagesOpen && (
            <div className="left-8 top-full p-2">
              <Link to="/attorney" className="block py-2 text-lg link-text" onClick={closeSlideBar}>
                Attorney
              </Link>
              <Link
                to="/practice"
                className="block py-2 text-lg link-text" onClick={closeSlideBar}
              >
                Practice Areas
              </Link>
              <Link to="/cases" className="block py-2 text-lg link-text mb-[-15px]" onClick={closeSlideBar}>
                Cases
              </Link>
            </div>
          )}
        </div>
        <Link to="/contact" className="text-lg link-text" onClick={closeSlideBar}>
          Contact
        </Link>
      </div>
      <Link to="/contact" className="btn-primary text-center mt-8" onClick={closeSlideBar}>
        Appointment Now
      </Link>
    </motion.div>
  );
};

export default SlideBar;
