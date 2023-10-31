import React from "react";
import { sectionStyles } from "../Styles/HeaderStyle";
import element1 from "../public/breadcrumb-element-2.svg";
import element2 from "../public/breadcrumb-element-1.svg";

function Header({ pageTitle, name }) {
	return (
		<div style={sectionStyles} className="relative top-0">
			<div className="w-full mx-auto">
				<div className="flex flex-col items-center pt-52">
					<h1 className="h2 md:h1">{pageTitle}</h1>
					<div className="flex">
						<h2>
							{" "}
							<span className="mr-2">Home</span>  //
							<span className="text-primary ml-2"> {name}</span>
						</h2>
					</div>
				</div>
			</div>
			{/* bread crumps elements*/}
			<div className="absolute hidden lg:inline top-[210px] right-[10%]">
				<img src={element1} alt="element1" className="w-50" />
			</div>
			<div className="absolute hidden lg:inline bottom-[100px] left-[10%]">
				<img src={element2} alt="element1" className="w-50" />
			</div>
		</div>
	);
}

export default Header;
