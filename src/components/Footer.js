import React from "react";
import { sectionStyles } from "../Styles/HeaderStyle";
import { Link } from "react-router-dom";
import Logo from "../public/Logo.png";
import {
	FaTwitter,
	FaFacebookF,
	FaSkype,
	FaLinkedinIn,
	FaAngleRight,
} from "react-icons/fa";

function Footer() {
	return (
		<div
			style={sectionStyles}
			className="flex mx-auto lg:h-[500px] justify-between items-center text-black/70">
			<div className="flex flex-wrap flex-10/12 my-28 justify-between w-[95%] lg:w-[90%] xl:w-[80%] mx-auto px-5">
				{/* First Column */}
				<div className="flex flex-col w-4/5 md:w-2/5 lg:w-3/12 items-start space-y-7 mb-3">
					<img src={Logo} alt="Logo" className="w-44 h-14" />
					<p className="max-w-xs text-start text-lg">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</p>
					<div className="flex space-x-4 ">
						<Link target="_blank" to="https://www.facebook.com">
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaFacebookF size={12} className=" text-black"></FaFacebookF>
							</div>
						</Link>
						<Link target="_blank" to="https://www.twitter.com">
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaTwitter size={12} className=" text-black"></FaTwitter>
							</div>
						</Link>
						<Link target="_blank" to="https://www.web.skype.com">
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaSkype size={12} className="text-black"></FaSkype>
							</div>
						</Link>
						<Link target="_blank" to="https://www.linkedin.com">
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaLinkedinIn size={12} className=" text-black"></FaLinkedinIn>
							</div>
						</Link>
					</div>
				</div>

				{/* Second Column */}
				<div className="w-4/5 md:w-2/5 lg:w-2/12 space-y-3 mb-5">
					<h3 className="mb-2 h3">Quick Link:</h3>
					<ul className="list-none list-inside text-lg space-y-5">
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/about" className="ml-2 text-black/70 link-animate">
								About Us
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/practice" className="ml-2 text-black/70 link-animate">
								Practice Area
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/blog" className="ml-2 text-black/70 link-animate">
								Blog
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/attorney" className="ml-2 text-black/70 link-animate">
								Attorneys
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/cases" className="ml-2 text-black/70 link-animate">
								Cases
							</Link>
						</li>
					</ul>
				</div>

				{/* Third Column */}
				<div className="w-4/5 md:w-2/5 lg:w-2/12 mb-5">
					<h3 className="h3 mb-2">Explore Us:</h3>
					<ul className="list-none list-inside text-lg space-y-5">
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/contact" className="ml-2 text-black/70 link-animate">
								Contact Us
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/style" className="ml-2 text-black/70 link-animate">
								Style Guide
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/change-log" className="ml-2 text-black/70 link-animate">
								Change Log
							</Link>
						</li>
						<li className="flex items-center">
							<FaAngleRight size={15} />
							<Link to="/licenses" className="ml-2 text-black/70 link-animate">
								Licenses
							</Link>
						</li>
					</ul>
				</div>

				{/* Fourth Column */}
				<div className="w-4/5 md:w-2/5 lg:w-2/12">
					<h3 className="h3 mb-2">Contact Us:</h3>
					<div className="space-y-3 text-lg">
						<p className="mb-2">Phone & Email:</p>
						<p>
							<button
								onClick={() => (window.location = "tel:00568568945698")}
								className="font-bold link-animate">
								(00)-568-945-698
							</button>
						</p>
						<p>
							<button
								onClick={() => (window.location = "mailto:info247@gmail.com")}
								className="font-bold link-animate">
								info247@gmail.com
							</button>
						</p>
						<p className="mt-2">Location:</p>
						<p>
							<strong>568 Tangle Wood MS 39503.</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
