import React from "react";
import { motion } from "framer-motion";
import { casesStyles } from "../../Styles/HeaderStyle";
import { fadeIn, flipX } from "../../variants";
import { Link } from "react-router-dom";
import { caseData } from "../Cases/CasesData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../Styles/Cases.css";
import "../../Styles/practiceslides.css";
// import required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

function CasesSlider() {
	return (
		<div style={casesStyles} className="bg-opacity-5">
			<div className="popular-cases relative bg-[#f9f7f3] w-full h-full bg-opacity-90 px-5 sm:px-10">
				{/* content */}
				<div className="flex pt-16 justify-left flex-col">
					<motion.h2
						variants={fadeIn("up", 0.5, 0)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="px-7 w-max py-1 bg-primary inline-block text-white rounded-md my-10">
						Recent Cases
					</motion.h2>
					<motion.div
						variants={fadeIn("up", 0.5, 0)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="flex flex-col sm:flex-row space-y-5 mb-10 items-left justify-between">
						<h2 className="h3 md:h2 ">Some Popular Cases</h2>

						<Link to="/cases" className="btn-primary mr-10">
							View All Cases
						</Link>
					</motion.div>

					<div className="cases-swiper-container relative grid grid-cols-10 items-center">
						<Swiper
							slidesPerView={1}
							spaceBetween={50}
							breakpoints={{
								760: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
							navigation= {true}				
							loop={true}
							modules={[Navigation, Pagination, A11y]}
							className="flex sm:ml-5 w-full h-full col-span-10 md:col-span-7 lg:col-span-8 order-2"
							>
								{caseData.map((cases) => (
									<SwiperSlide>
										<motion.div
											/* variants={flipX()} */
											initial="offscreen"
											whileInView="onscreen"
											viewport={{ once: true, amount: 0 }}
											className="relative card-container">
											<img
												src={cases.image}
												alt={cases.title}
												className="w-full lg:w-96 rounded-2xl h-80 object-cover object-center"
											/>
											<Link
												to={`/cases/${cases.id}`}
												className="w-full lg:w-full scale-x-[-1] text-container text-center rounded-3xl pb-12"
											>
													<p className="text-white font-serif font-semibold text-3xl pt-44 header-text ">
														{cases.title}
													</p>
													<p className="text-xl mt-3  text-primary subheading-text">
														{cases.subtitle}
													</p>
											</Link>
										</motion.div>
									</SwiperSlide>
								))}
						</Swiper>
						<div className="col-span-0 md:col-span-3 lg:col-span-2 order-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CasesSlider;
