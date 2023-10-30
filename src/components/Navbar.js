import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../public/Logo.png";
//import curve from "../public/beanshape.png";
import LinkWithCurve from "./LinkWithCurve";
import Navdropdown from "./Navdropdown";

const Navbar = () => {

  return (
    <nav className="flex bg-white lg:w-[90%] xl:w-[85%] mx-auto rounded-md space-x-8 items-center justify-between p-5">
      <Link to="/">
        <img src={logo} alt="logo" className="w-36" />
      </Link>
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] justify-between">
        <LinkWithCurve to="/" name="Home" />
        <LinkWithCurve to="/about" name="About" />
        <LinkWithCurve to="/blog" name="Blog" />

       	{/* dropdown list */}
         <Navdropdown />

        <LinkWithCurve to="/contact" name="Contact" />
      </div>
      <Link to="/contact" className="btn-primary text-center">
        Appointment Now
      </Link>
    </nav>
  );
};

export default Navbar;
