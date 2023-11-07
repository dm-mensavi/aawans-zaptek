import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { practiceAreaData } from "../PracticeAreas/PracticeAreaData";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { flipX, fadeIn } from "../../variants";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

function PracticeAreaSlider() {
	const swiper = useSwiper();

	return (
		<div className="flex items-center flex-col">
			<motion.h2
				variants={fadeIn("up", 0.5, 0)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0 }}
				className="px-7 py-1 bg-primary inline-block text-white rounded-md my-10">
				Practice Areas
			</motion.h2>
			<motion.h2
				variants={fadeIn("up", 0.5, 0)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0 }}
				className="h3 md:h2 mb-10">
				Our Practice Areas
			</motion.h2>
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
				spaceBetween={50}
				navigation={true}
				loop={true}
				modules={[Navigation, Pagination, A11y]}
				className="flex w-[85%] h-[90%] swiper absolute">
				{practiceAreaData.map((item) => (
					<SwiperSlide
						className=" shadow-lg rounded-lg pb-10 mb-32"
						key={item.id}>
						<motion.div
							variants={flipX()}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.5 }}
							className="flex flex-col justify-center items-center"
							to={`/practice/${item.id}`}>
							<div className="relative mb-14 w-full">
								<img
									src={require(`../../public/${item.image}.jpg`)}
									alt="not found"
									className="rounded-lg w-full object-cover top-0 left-0"
								/>

								{/* Icons absolute -bottom-10 left-[35%]*/}
								<figure className="">
									<img
										src={item.icon}
										alt={item.title}
										className="absolute -bottom-10 left-[35%] border-white border-4 border-spacing-3 z-10 w-24 h-24 rounded-full"
									/>
								</figure>
							</div>

							<div className="text-center">
								<Link to={`/practice/${item.id}`} className="link-text">
									{item.title}
								</Link>

								<p className="font-normal text-[20px] text-[#565656] font-sans">
									{item.description}
								</p>
							</div>

							<Link
								to={`/practice/${item.id}`}
								className="font-semibold text-lg mt-8 bg-primaryLighter py-2 px-8 rounded-lg font-sans hover:bg-primary hover:text-white transition duration-200">
								Read More
							</Link>
						</motion.div>
					</SwiperSlide>
				))}
				{/* Custom buttons */}
				{/* <div className="flex justify-center my-10">
					<button
						onClick={() => swiper.slidePrev()}
						className=" hover:bg-primaryLight cursor-pointer transition-all duration-300  ease-in-out rounded-full p-5 mx-3 border-2">
						<AiOutlineLeft size={15} />
					</button>
					<button
						onClick={() => swiper.slideNext()}
						className=" hover:bg-primaryLight  cursor-pointer transition-all duration-300  ease-in-out rounded-full p-5 mx-3 border-2">
						<AiOutlineRight size={15} />
					</button>
				</div> */}
			</Swiper>
		</div>
	);
}

export default PracticeAreaSlider;
