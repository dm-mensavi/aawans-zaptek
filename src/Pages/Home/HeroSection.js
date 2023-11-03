import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../public/hero-image.png";
import heroImageElement from "../../public/hero-image-shape.svg";
import { sectionStyles } from "../../Styles/HeaderStyle";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function HeroSection() {
	return (
		<div
			style={sectionStyles}
			className="w-full h-[600px] md:h-[520px] lg:h-[810px] xl:h-[890px]">
			<div className="relative pt-20 lg:pt-32 xl:pt-52 flex flex-col lg:flex-row text-center lg:justify-between h-[953px] max-w-8xl">
				{/* First Column */}
				<div className=" w-full text-left -mt-10 lg:w-1/2 lg:pl-8 xl:pl-[10%] px-6">
					<motion.h1
						variants={fadeIn("up", 0.7, 0.3)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						className="xl:text-8xl md:text-7xl text-5xl font-serif font-bold pt-32 mb-10">
						Best Legal Solutions.
					</motion.h1>
					
					<motion.p
						variants={fadeIn("up", 0.7, 0.5)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						className="text-gray-600 font-medium text-lg mb-10 lg:mb-5 max-w-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</motion.p>
					
					<motion.div
						variants={fadeIn("up", 0.7, 0.7)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}>
						<Link to="/practice" className="btn-primary w-44 items-center">
							Practice Areas
						</Link>
					</motion.div>
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
					<motion.div
						variants={fadeIn("down", 1.5, 0.3)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						className="relative max-w-xl pr-[2%] pt-20 xl:pr-0">
						<img
							src={heroImageElement}
							alt="Hero"
							className="w-full h-full pr-10 "
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
