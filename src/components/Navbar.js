import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../public/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import LinkWithCurve from "./LinkWithCurve";
import Navdropdown from "./Navdropdown";
import SlideBar from "./SlideBar";


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSlideBar = () => {
		setIsOpen(!isOpen);
	};

	const closeSlideBar = () => {
		setIsOpen(false);
	};

	return (
		<nav className="flex bg-white lg:w-[90%] xl:w-[85%] mx-auto rounded-md space-x-8 shadow-lg items-center justify-between p-5">
			<Link to="/">
				<img src={logo} alt="logo" className="w-36" />
			</Link>
			<div className="hidden lg:flex lg:w-[45%] xl:w-[40%] justify-between">
				<LinkWithCurve to="/" name="Home" />
				<LinkWithCurve to="/about" name="About" />
				<LinkWithCurve to="/blog" name="Blog" />
				<Navdropdown />
				<LinkWithCurve to="/contact" name="Contact" />
			</div>
			<GiHamburgerMenu
				color="#b68c5a"
				size={20}
				className={`lg:hidden w-12 h-12 p-4 cursor-pointer ${
					isOpen ? "bg-primaryLight" : ""
				}`}
				onClick={toggleSlideBar}
			/>
			<SlideBar isOpen={isOpen} closeSlideBar={closeSlideBar} />
			<Link to="/contact" className="btn-primary hidden lg:flex text-center">
				Appointment Now
			</Link>
		</nav>
	);
};

export default Navbar;
