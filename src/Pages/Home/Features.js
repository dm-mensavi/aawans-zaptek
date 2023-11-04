import React from "react";
import icon1 from "../../public/promo-icon-1.png";
import icon2 from "../../public/promo-icon-2.png";
import icon3 from "../../public/promo-icon-3.png";

function Features() {
	return (
		<div className="my-28 mx-[2%] md:mx-[5%] lg:mx-[10%]">
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
				{/* feature one */}
				<div className="flex w-full lg:w-3/12 pr-3 min-w-[350px] max-w-lg mr-5">
					<div className="pl-5 w-1/3">
          <div className="bg-primaryLight w-16 h-16 rounded-full">
							<img
								src={icon1}
								alt="icon2"
								className="p-4 w-16 h-16"
							/>
						</div>
					</div>
					<div className="flex w-2/3 flex-col max-w-sm">
						<h3 className=" h4 mb-4">Best Client Support</h3>
						<p className=" text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor.
						</p>
					</div>
				</div>
				{/* feature two */}
				<div className="flex w-full lg:w-3/12 pr-3 min-w-[350px] max-w-lg mr-5">
					<div className="pl-5 w-1/3">
						<div className="bg-primaryLight w-16 h-16 rounded-full">
							<img
								src={icon2}
								alt="icon2"
								className="p-4 w-16 h-16"
							/>
						</div>
					</div>
					<div className="flex w-2/3 flex-col max-w-sm">
						<h3 className=" h4 mb-4">Awesome Lawyer</h3>
						<p className=" text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor.
						</p>
					</div>
				</div>
				{/* feature three */}
				<div className="flex w-full lg:w-3/12 pr-3 min-w-[350px] max-w-lg mr-5">
					<div className="pl-5 w-1/3">
          <div className="bg-primaryLight w-16 h-16 rounded-full">
							<img
								src={icon3}
								alt="icon2"
								className="p-4 w-16 h-16"
							/>
						</div>
					</div>
					<div className="flex w-2/3 flex-col max-w-sm">
						<h3 className=" h4 mb-4">All Solutions</h3>
						<p className=" text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
