import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../public/hero-image.png";
import heroImageElement from "../../public/hero-image-shape.svg";
import { heroSectionStyles } from "../../Styles/HeaderStyle";

function HeroSection() {
	return (
		<div style={heroSectionStyles} className="w-full h-[640px] md:h-[520px] lg:h-[890px]">
			<div className="relative pt-20 lg:pt-52 flex flex-col lg:flex-row text-center lg:justify-between h-[953px] max-w-8xl">
				{/* First Column */}
				<div className=" w-full text-left lg:w-1/2 lg:pl-8 xl:pl-[10%] px-6">
					<h1 className="xl:text-8xl md:text-7xl text-5xl font-serif font-bold pt-28 mb-10">
						Best Legal Solutions.
					</h1>
					<p className="text-gray-600 font-medium text-lg mb-10 max-w-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<Link to="/practice" className="btn-primary w-44 items-center">
						Practice Areas
					</Link>
				</div>

				{/* Second Column */}
				<div className="w-1/2 hidden lg:flex ml-20">
					<div className="absolute z-10">
						<img
							src={heroImage}
							alt="Hero"
							className="w-full h-[680px] pt-24 xl:pt-0 max-w-xl"
						/>
					</div>
					<div className="relative max-w-xl pr-[2%] pt-20 xl:pr-0">
						<img src={heroImageElement} alt="Hero" className="w-full h-full pr-10 " />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
