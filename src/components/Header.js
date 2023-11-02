/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { sectionStyles } from "../Styles/HeaderStyle";
import element1 from "../public/breadcrumb-element-2.svg";
import element2 from "../public/breadcrumb-element-1.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Header({ pageTitle, name }) {
	return (
		<div
			style={sectionStyles}
			className="relative top-0 h-[300px] lg:h-[400px]">
			<div className="w-full mx-auto">
				<div className="flex flex-col items-center pt-36 lg:pt-52">
					<h1 className="h2 md:h1">{pageTitle}</h1>
					<div className="flex">
						<h2>
							{" "}
							<span className="mr-2">Home</span> //
							<span className="text-primary ml-2"> {name}</span>
						</h2>
					</div>
				</div>
			</div>
			{/* bread crumps elements*/}
			<motion.div
				variants={fadeIn("left", 1, 0.3)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				className="absolute hidden lg:inline top-[210px] right-[10%]">
				<img src={element1} alt="element1" className="w-50" />
			</motion.div>
			<motion.div
				variants={fadeIn("right", 1, 0.3)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				className="absolute hidden lg:inline bottom-[100px] left-[10%]">
				<img src={element2} alt="element1" className="w-50" />
			</motion.div>
		</div>
	);
}

export default Header;
