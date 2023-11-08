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
// import required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

function CasesSlider() {
	return (
		<div style={casesStyles} className="bg-opacity-5">
			<div className="bg-[#f9f7f3] w-full h-full bg-opacity-90 px-5 sm:px-10">
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

						<Link to="/cases" className="btn-primary">
							View All Cases
						</Link>
					</motion.div>

					<Swiper
						slidesPerView={1}
						breakpoints={{
							520: {
								slidesPerView: 2,
							},
							1000: {
								slidesPerView: 3,
							},
						}}
						navigation={true}
						loop={true}
						modules={[Navigation, Pagination, A11y]}
						className="flex w-full h-full ">
						{caseData.map((cases) => (
              <SwiperSlide>
							<motion.div
								variants={flipX()}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0 }}
								className="relative card-container">
								<img
									src={cases.image}
									alt={cases.title}
									className="w-full lg:w-96 rounded-2xl h-80"
								/>
								<Link
									to={`/cases/${cases.id}`}
									className="text-container text-center rounded-3xl pb-20">
									<p className="text-white font-serif font-semibold text-3xl pt-44 header-text">
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
				</div>
			</div>
		</div>
	);
}

export default CasesSlider;
