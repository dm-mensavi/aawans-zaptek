import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from 'react-icons/io';
import logo from '../public/Logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className='flex space-x-8 items-center justify-between p-5'>
      <Link to="/">
        <img src={logo} alt="logo" className='w-32'/>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      {/* dropdown list */}
      <div className="relative">
        <span className="text-black cursor-pointer flex" onClick={toggleDropdown}>
          Pages <IoIosArrowDown className='mt-1'/>
        </span>
        {isOpen && (
          <div className="absolute mt-2 space-y-2 w-max bg-primaryLight">
            <Link to="/attorney" className="block px-4 py-2" onClick={closeDropdown}>
              Attorney
            </Link>
            <Link to="/practice" className="block px-4 py-2" onClick={closeDropdown}>
              Practice Areas
            </Link>
            <Link to="/cases" className="block px-4 py-2" onClick={closeDropdown}>
              Cases
            </Link>
          </div>
        )}
      </div>

      <Link to="/contact">Contact</Link>
      <Link to="/contact" className='btn-primary'>Appointment Now</Link>
{/* 
      <Link to="/practiceDetails">Practice Details</Link>
      <Link to="/caseDetails">Case Details</Link>
      <Link to="/blogDetails">Blog Details</Link>
      <Link to="/blogCategory">Blog Category</Link>
      <Link to="/404">404 Page</Link>  */}
    </nav>
  );
};

export default Navbar;
